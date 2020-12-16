import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import axios from 'axios'
import moment from 'moment'
import NumberFormat from 'react-number-format';
import dynamic from 'next/dynamic'
import CountUp from 'react-countup';

import Layout from '../components/layout'
import Header from '../components/shared/header'
import Daterange from '../components/widgets/daterange'
import Shopselect from '../components/widgets/shopselect'

import {CustomerVisitShop, CustomerVisitByDate} from '../components/charts/customerCharts'

const Overview = () => {
  const ReactApexChart = dynamic(() => import('react-apexcharts'), {ssr:false})

  const API_ENDPOINT = useSelector(state => state.api_endpoint)
  const dispatch = useDispatch()
  const [error, setError] = useState(undefined)
  const period = useSelector(state => state.customer_period)
  const shop = useSelector(state => state.shop)
  const loading = useSelector(state => state.loading)
  
  const visit_count = useSelector(state => state.visit_count)
  const visit_count_compare = useSelector(state => state.visit_count_compare)

  const [visitCountComareSeries, setVisitCountCompareSeries] = useState([])

  // Widget data 
  const [loyalMembers, setLoyalMembers] = useState([])

  const [topFoods, setTopFoods] = useState([])
  const [topAddons, setTopAddons] = useState([])

  const [customerVisitByDateSeries, setCustomerVisitByDateSeries] = useState([])
  const [customerVisitByDateOptions, setCustomerVisitByDateOptions] = useState([])


  const [visitCount, setVisitCount] = useState({
    all: 0,
    tsm: 0,
    gfo: 0
  })

  const [visitCountAll, setVisitCountAll] = useState(0)

  useEffect(() => {
    $('.overview-widget').hide();
    $('#loyal_members').fadeIn('slow');
  }, [])

  useEffect(() => {
    dispatch({
      type: 'TOGGLE_LOADING',
      payload: true
    })
    get_customer_visit_count().then(result => {
      if(result.status == 200){
        if(Object.keys(result).length === 0 && result.constructor === Object){
              
        }else{
          dispatch({
            type: 'SET_VISIT_COUNT',
            payload: [...result.data.recordset]
          })
        }
        setError(undefined)
      }else{
        setError({
          status: result.status,
          msg: 'Database error'
        })
      }
      dispatch({
        type: 'TOGGLE_LOADING',
        payload: false
      })
    })
  }, [JSON.stringify(period), JSON.stringify(shop)])

  useEffect(() => {
    dispatch({
      type: 'TOGGLE_LOADING',
      payload: true
    })
    get_customer_visit_count_compare().then(res => {
      if(res.status == 200){
        if(Object.keys(res).length === 0 && res.constructor === Object){
              
        }else{
          dispatch({
            type: 'SET_VISIT_COUNT_COMPARE',
            payload: [...res.data.recordset]
          })
        }
        setError(undefined)
      }else{
        setError({
          status: res.status,
          msg: 'Database error'
        })
      }
      dispatch({
        type: 'TOGGLE_LOADING',
        payload: false
      })
    })
  }, [JSON.stringify(period)])

  useEffect(() => {
    get_customer_visit_info().then(res => {
      if(res.status == 200){
        if(Object.keys(res).length === 0 && res.constructor === Object){
              
        }else{
          setLoyalMembers([...res.data.recordset])
        }
        setError(undefined)
      }else{
        setError({
          status: res.status,
          msg: 'Database error'
        })
      }
    })
    get_top_sale_items().then(res => {
      if(res.status == 200){
        if(Object.keys(res).length === 0 && res.constructor === Object){
              
        }else{
          let foods = []
          let addons = []
          res.data.recordset.forEach(item => {
            if(item.description.charAt(0) !== '+'){
              foods.push(item)
            }else{
              addons.push(item)
            }
          })
          setTopFoods([...foods.slice(0, 5)])
          setTopAddons([...addons.slice(0, 5)])
        }
        setError(undefined)
      }else{
        setError({
          status: res.status,
          msg: 'Database error'
        })
      }
    })
    get_customer_visit_count_by_date().then(res => {
      if(res.status == 200){
        if(Object.keys(res).length === 0 && res.constructor === Object){
              
        }else{
          let tsm = []
          let gfo = []
          let xaxis = []
          res.data.recordset.forEach(item => {
            tsm.push(item.tsm_count)
            gfo.push(item.gfo_count)
            xaxis.push(moment(item.d).format('DD MMM'))
          })
          setCustomerVisitByDateSeries([
            {
              name: 'Spoonity members',
              data: [...tsm]
            },
            {
              name: 'Global online order members',
              data: [...gfo]
            }
          ])
          setCustomerVisitByDateOptions({...CustomerVisitByDate.options, xaxis: {
            categories: [...xaxis]
          }})
        }
        setError(undefined)
      }else{
        setError({
          status: res.status,
          msg: 'Database error'
        })
      }
    })
    
  }, [shop.description])

  useEffect(() => {
    let all = 0, tsm = 0, gfo = 0
    
    visit_count.forEach(item => {
      all += item.all_count
      tsm += item.tsm_count 
      gfo += item.gfo_count
    })
    setVisitCount({
      all: all,
      tsm: tsm,
      gfo: gfo
    })
  }, [JSON.stringify(visit_count)])

  useEffect(() => {
    let series = [], all_count = [], tsm_count = [], gfo_count = [], other_count = []
  
    visit_count_compare.forEach(item => {
      all_count.push(item.all_count)
      tsm_count.push(item.tsm_count)
      gfo_count.push(item.gfo_count)
      other_count.push(item.all_count - item.tsm_count - item.gfo_count)
    })

    series.push({
      name: "All visits",
      data: [...all_count]
    }, {
      name: "Spoonity members",
      data: [...tsm_count]
    }, {
      name: "Global food online members",
      data: [...gfo_count]
    }, {
      name: "Unknown customers",
      data: [...other_count]
    })
    setVisitCountCompareSeries([...series])

    let total_count = 0

    all_count.forEach(item => {
      total_count += item
    })
    
    setVisitCountAll(total_count)

  }, [JSON.stringify(visit_count_compare)])
  
  async function get_customer_visit_count(){
    const ret = await axios({
      method: 'post',
      url: API_ENDPOINT + '/get_customer_visit_count',
      data: {
        period: period,
        shop: shop.value
      }
    })
    return ret
  }
  async function get_customer_visit_count_compare(){
    const ret = await axios({
      method: 'post',
      url: API_ENDPOINT + '/get_customer_visit_count_compare',
      data: {
        period: period,
        shop: ['TEMPLE', 'IRVINE', 'CUPERTINO']
      }
    })
    return ret
  }

  async function get_customer_visit_info(){
    const ret = await axios({
      method: 'post',
      url: API_ENDPOINT + '/get_customer_visit_info',
      data: {
        offset: 0,
        shop: shop.value,
        customer_type: 'all',
        search_key: '',
        limit: 5
      }
    })
    return ret
  }

  async function get_customer_visit_count_by_date(){
    const ret = await axios({
      method: 'post',
      url: API_ENDPOINT + '/get_customer_visit_count_by_date',
      data: {
        shop: shop.value,
        period: {
          from: moment().subtract(10, 'days').format('YYYY-MM-DD'),
          to: moment().format('YYYY-MM-DD')
        }
      }
    })
    return ret
  }
  
  async function get_top_sale_items(){
    const ret = await axios({
      method: 'post',
      url: API_ENDPOINT + '/get_top_sale_items',
      data: {
        offset: 0,
        shop: shop.value,
        period: {
          from: moment().subtract(30, 'days').format('YYYY-MM-DD'),
          to: moment().format('YYYY-MM-DD')
        },
        limit: 100
      }
    })
    return ret
  }

  return (
    <>
      <Layout>
        <div className="page__wrapper">
          <div className="page__center">
            <Header 
              headerClass = "page__row page__row_head page__row_border"
              text = { <>Welcome back<span className="desktop-hide">👋</span></> }
            />
            <div className="page__row page__row_border">
              <div className="page__col">
                <div className="filter_widget">
                  <div className="widget"><Shopselect /></div>
                  <div className="widget"><Daterange /></div>
                </div>
                <div className="page__widgets">
                  <div className="widget widget_shadow full-widget">
                    <div id="loyal_members" className="overview-widget">
                      <div style={{display: 'flex'}}>
                        <div className="widget__title mr-auto">Loyalty members</div>
                        <Link href="/customers">
                          <a className="widget__next">
                            <svg className="icon icon-arrow-next-fat"><use xlinkHref="img/sprite.svg#icon-arrow-next-fat" /></svg>
                          </a>
                        </Link>
                      </div>
                      <div className="quality">
                        <div className="quality__list">
                          <div className="products__table">
                            <div className="products__row products__row_head">
                              <div className="products__cell">Customer</div>
                              <div className="products__cell">Phone number</div>
                              <div className="products__cell">Total visits</div>
                              <div className="products__cell">Last visit days ago</div>
                              <div className="products__cell" title="Visit times per week">Visit ratio</div>
                              <div className="products__cell">Campaign</div>
                            </div>
                            <>
                              { loyalMembers.length > 0 ? 
                                loyalMembers.map((item, idx) => {
                                  return <div key={ idx } className="products__row">
                                    <div className="products__cell">
                                      <a className="products__item">
                                        <div className="products__details">
                                          <div className="products__title title">{ item.name }</div>
                                          <div className='products__info caption color-gray'>{ item.email }</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="products__cell">
                                      <div className="products__color">
                                        <div className="products__text">{ item.phone }</div>
                                      </div>
                                    </div>
                                    <div className="products__cell">
                                      <div className="products__cost">
                                        <div className="products__text">{ item.visit_count }</div>
                                      </div>
                                    </div>
                                    <div className="products__cell">
                                      <div className="products__cost">
                                        <div className="products__text">{ item.last_visit_days_ago }</div>
                                      </div>
                                    </div>
                                    <div className="products__cell">
                                      <div className="products__cost">
                                        <div className="products__text"><NumberFormat value={ item.visit_ratio } decimalScale='2' displayType={'text'}/></div>
                                      </div>
                                    </div>
                                    <div className="products__cell">
                                      <div className="products__cost">
                                        <div className="products__text">
                                          --
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                }) 
                              : <div style={{width: '350px'}}>Loading... Please wait</div> }
                            </> 
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="top_sale_items" className="overview-widget">
                      <div style={{display: 'flex'}}>
                        <div className="widget__title mr-auto">Top sale items in last 30 days</div>
                          <a className="widget__next" href="#">
                            <svg className="icon icon-arrow-next-fat">
                              <use xlinkHref="img/sprite.svg#icon-arrow-next-fat" />
                            </svg>
                          </a>
                      </div>
                      <div style={{display: 'flex'}}>
                        <div className="quality" style={{width: 'calc(50% - 24px)'}}>
                          <div className="color-gray" style={{fontSize: '24px'}}>Foods</div>
                          {topFoods.length > 0 ? 
                            topFoods.map((item, idx) => 
                              <div className="quality__list" key={idx} style={{margin: '24px 0'}}>
                                <div className="quality__item">
                                  <div className="quality__details">
                                    <div className="quality__line">
                                      <div className="quality__title title">{item.description}</div>
                                      <div className="quality__price title">{item.qty}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                            : 'Loading... please wait'
                          }
                        </div>
                        <div className="quality" style={{width: 'calc(50% - 24px)', marginLeft: '24px'}}>
                          <div className="color-gray" style={{fontSize: '24px'}}>Addons</div>
                          {topAddons.length > 0 ? 
                            topAddons.map((item, idx) => 
                              <div className="quality__list" key={idx} style={{margin: '24px 0'}}>
                                <div className="quality__item">
                                  <div className="quality__details">
                                    <div className="quality__line">
                                      <div className="quality__title title">{item.description}</div>
                                      <div className="quality__price title">{item.qty}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                            : 'Loading... please wait'
                          }
                        </div>
                      </div>
                    </div>
                    <div id="ongoing_campaign" className="overview-widget">
                      <div style={{display: 'flex'}}>
                        <div className="widget__title mr-auto">Ongoing campaigns</div><a className="widget__next" href="#"><svg className="icon icon-arrow-next-fat">
                            <use xlinkHref="img/sprite.svg#icon-arrow-next-fat" />
                          </svg></a>
                      </div>
                      <div className="quality">
                        <div className="quality__list">
                          <div className="quality__item quality__item_chart">
                            <div className="quality__preview bg-pink-opacity"><img className="quality__pic" src="img/figure-1.png" /></div>
                            <div className="quality__details">
                              <div className="quality__title title">Christmas campaign
                                <span className="campaign-type campaign-type-green">email</span>
                              </div>
                              <div className="quality__info caption-sm">Discount top sale foods for upcoming xmas event</div>
                            </div>
                            <div className="quality__chart">
                              <div id="chart-circle-purple" />
                              <div className="quality__percent caption-sm">40%</div>
                            </div>
                          </div>
                          <div className="quality__item quality__item_chart">
                            <div className="quality__preview bg-yellow-opacity"><img className="quality__pic" src="img/figure-2.png" /></div>
                            <div className="quality__details">
                              <div className="quality__title title">New year campaign
                                <span className="campaign-type campaign-type-purple">phone</span>
                              </div>
                              <div className="quality__info caption-sm">Coupon code for customers whose visit ratio is bigger than 5.0</div>
                            </div>
                            <div className="quality__chart">
                              <div id="chart-circle-green" />
                              <div className="quality__percent caption-sm">62%</div>
                            </div>
                          </div>
                          <div className="quality__item quality__item_chart">
                            <div className="quality__preview bg-blue-light-opacity"><img className="quality__pic" src="img/figure-3.png" /></div>
                            <div className="quality__details">
                              <div className="quality__title title">Online campaign
                                <span className="campaign-type campaign-type-green">email</span>
                              </div>
                              <div className="quality__info caption-sm">Buy one, get one for new registered spoonity members</div>
                            </div>
                            <div className="quality__chart">
                              <div id="chart-circle-red" />
                              <div className="quality__percent caption-sm">75%</div>
                            </div>
                          </div>
                          <div className="quality__item quality__item_chart">
                            <div className="quality__preview bg-blue-light-opacity"><img className="quality__pic" src="img/figure-3.png" /></div>
                            <div className="quality__details">
                              <div className="quality__title title">Online campaign
                                <span className="campaign-type campaign-type-green">email</span>
                              </div>
                              <div className="quality__info caption-sm">Buy one, get one for new registered spoonity members</div>
                            </div>
                            <div className="quality__chart">
                              <div id="chart-circle-yellow" />
                              <div className="quality__percent caption-sm">75%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="events" className="overview-widget">
                      <div style={{display: 'flex'}}>
                        <div className="widget__title mr-auto">Events</div><a className="widget__next" href="#"><svg className="icon icon-arrow-next-fat">
                            <use xlinkHref="img/sprite.svg#icon-arrow-next-fat" />
                          </svg></a>
                      </div>
                      <div className="quality">
                        <div className="quality__list">
                          <div className="quality__item quality__item_chart">
                            <div className="quality__preview bg-pink-opacity"><img className="quality__pic" src="img/figure-1.png" /></div>
                            <div className="quality__details">
                              <div className="quality__title title">Happy birthday!
                                <span className="campaign-type campaign-type-green">special</span>
                              </div>
                              <div className="quality__info caption-sm">There are 3 customers whose birthday is today. </div>
                            </div>
                          </div>
                          <div className="quality__item quality__item_chart">
                            <div className="quality__preview bg-pink-opacity"><img className="quality__pic" src="img/figure-1.png" /></div>
                            <div className="quality__details">
                              <div className="quality__title title">New customers
                                <span className="campaign-type campaign-type-green">special</span>
                              </div>
                              <div className="quality__info caption-sm">21 new customers visited our shops today. </div>
                            </div>
                          </div>
                          <div className="quality__item quality__item_chart">
                            <div className="quality__preview bg-pink-opacity"><img className="quality__pic" src="img/figure-1.png" /></div>
                            <div className="quality__details">
                              <div className="quality__title title">Campaign success
                                <span className="campaign-type campaign-type-purple">campaign</span>
                              </div>
                              <div className="quality__info caption-sm">Christmas campaign reached 98% of success.</div>
                            </div>
                          </div>
                          <div className="quality__item quality__item_chart">
                            <div className="quality__preview bg-pink-opacity"><img className="quality__pic" src="img/figure-1.png" /></div>
                            <div className="quality__details">
                              <div className="quality__title title">Recall customers
                                <span className="campaign-type campaign-type-purple">campaign</span>
                              </div>
                              <div className="quality__info caption-sm">37 loyalty customers last visited our shops 10 days ago. </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="tabs__nav" style={{marginTop: '24px'}}>
                      <a className="tabs__link active" href="#loyal_members">
                        <div className="tabs__icon"><svg className="icon icon-overview">
                            <use xlinkHref="img/sprite.svg#icon-overview" />
                          </svg></div>
                        <div className="tabs__text">Customers</div>
                      </a>
                      <a className="tabs__link" href="#top_sale_items">
                        <div className="tabs__icon"><svg className="icon icon-bag">
                            <use xlinkHref="img/sprite.svg#icon-bag" />
                          </svg>
                        </div>
                        <div className="tabs__text">Foods</div>
                      </a>
                      <a className="tabs__link" href="#ongoing_campaign">
                        <div className="tabs__icon"><svg className="icon icon-folder">
                            <use xlinkHref="img/sprite.svg#icon-folder" />
                          </svg></div>
                        <div className="tabs__text">Campaign</div>
                      </a>
                      <a className="tabs__link" href="#events">
                        <div className="tabs__icon"><svg className="icon icon-wallet">
                            <use xlinkHref="img/sprite.svg#icon-wallet" />
                          </svg></div>
                        <div className="tabs__text">Events</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="page__widgets">
                  <div className="widget widget_shadow">
                    <div className="widget__title">Total visits in {shop.description}</div>
                    <div className="widget__list">
                      <Link href="/customers">
                        <a className="widget__item">
                          <div className="widget__preview bg-pink">
                            <img className="widget__pic" src="img/figure-1.png" />
                          </div>
                          <div className="widget__details">
                            <div className="widget__category title">
                              All customers - {visitCount.all}
                              <svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg>
                            </div>
                            <div className="widget__info caption">All customers count that visited our shops</div>
                          </div> 
                        </a>
                      </Link>
                      <Link href="/customers">
                        <a className="widget__item">
                          <div className="widget__preview bg-yellow">
                            <img className="widget__pic" src="img/figure-2.png" />
                          </div>
                          <div className="widget__details">
                            <div className="widget__category title">
                              Spoonity members - {visitCount.tsm}
                              <svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg>
                            </div>
                            <div className="widget__info caption">Spoonity reward members</div>
                          </div> 
                        </a>
                      </Link>
                      <Link href="/customers">
                        <a className="widget__item">
                          <div className="widget__preview bg-blue-light">
                            <img className="widget__pic" src="img/figure-3.png" />
                          </div>
                          <div className="widget__details">
                            <div className="widget__category title">
                              Global food online orders - {visitCount.gfo}
                              <svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg>
                            </div>
                            <div className="widget__info caption">Online order customers</div>
                          </div>
                        </a>
                      </Link>
                      <Link href="/customers">
                        <a className="widget__item">
                          <div className="widget__preview bg-blue-light">
                            <img className="widget__pic" src="img/figure-3.png" />
                          </div>
                          <div className="widget__details">
                            <div className="widget__category title">
                              Unknown customers - {visitCount.all - visitCount.tsm - visitCount.gfo}
                              <svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg>
                            </div>
                            <div className="widget__info caption">They didn't leave their information</div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="widget widget_chart widget_pink">
                    <div className="widget__title">Visits</div>
                    <div className="widget__wrap">
                      <div className="widget__chart widget__chart_earning">
                        { customerVisitByDateSeries.length > 0 ?
                          <ReactApexChart 
                            options={ customerVisitByDateOptions }
                            series={ customerVisitByDateSeries }
                            type="line"
                            width="100%"
                          /> : <></>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page__col">
                <div className="page__group">
                  <div className="widget widget_stat widget_pb60">
                    <div className="widget__title">Total customer visits</div>
                    <div className="widget__counter title title_md color-purple">
                      <CountUp 
                        end={visitCountAll}
                        separator=","
                      />
                    </div>
                    <div className="widget__text">
                      All customers that visited our shops in <span className="color-pink">{period.description}</span>
                    </div>
                    <Link href="/customers">
                      <a className="widget__btn btn btn_white btn_wide">See all customers</a>
                    </Link>
                  </div>
                  <div className="widget widget_empty widget_p0">
                    <div className="widget__title">Shops compare</div>
                    <div className="widget__chart widget__chart_impressions">
                      <ReactApexChart 
                        options={ CustomerVisitShop.options }
                        series={ visitCountComareSeries }
                        type="bar"
                        width="100%"
                        height="320"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Overview