import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import moment from 'moment'
import NumberFormat from 'react-number-format';
import CountUp from 'react-countup';

import Layout from '../components/layout'
import Header from '../components/shared/header'
import Shopselect from '../components/widgets/shopselect'
import Customertype from '../components/widgets/customertype'

import CustomerDetails from '../components/widgets/customerDetails'

const Customers = () => {
  const API_ENDPOINT = useSelector(state => state.api_endpoint)
  const dispatch = useDispatch()

  const [data, setData] = useState(useSelector(state => state.customers))

  const customerCount = useSelector(state => state.all_customer_count)
  const visitCount = useSelector(state => state.all_time_visit_count)

  const [error, setError] = useState(undefined)

  const offset = useSelector(state => state.customer_offset)
  const customer_type = useSelector(state => state.customer_type)
  const shop = useSelector(state => state.shop)
  const loading = useSelector(state => state.loading)
  const rowCount = 500

  const firstUpdate = useRef(true)

  const [selected, setSelected] = useState([])

  useEffect(() => {
    if(firstUpdate.current){
      firstUpdate.current = false
      get_all_time_visit_count().then(res => {
        if(res.status === 200){
          if(Object.keys(res).length === 0 && res.constructor === Object){
            
          }else{
            dispatch({
              type: 'SET_ALL_TIME_VISIT_COUNT',
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
      })
      get_all_customer_count().then(res => {
        if(res.status === 200){
          if(Object.keys(res).length === 0 && res.constructor === Object){
            
          }else{
            dispatch({
              type: 'SET_ALL_CUSTOMER_COUNT',
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
      })
    }else{
      setData([])
      dispatch({
        type: 'SET_CUSTOMER_OFFSET',
        payload: -1
      })
    }
  }, [shop.value, customer_type.value])

  useEffect(() => {
    
  }, [JSON.stringify(customerCount), JSON.stringify(visitCount)])

  useEffect(() => {
    if(offset !== -1){
      if(data.length !== (offset / rowCount + 1) * rowCount){
        dispatch({
          type: 'TOGGLE_LOADING',
          payload: true
        })
        get_customer_visit_info().then(res => {
          if(res.status === 200){
            if(Object.keys(res).length === 0 && res.constructor === Object){
              
            }else{
              setData([...data, ...res.data.recordset])
              dispatch({
                type: 'SET_CUSTOMERS',
                payload: [...data, ...res.data.recordset]
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
      }
    }else{
      dispatch({
        type: 'SET_CUSTOMER_OFFSET',
        payload: 0
      })
    }
    return () => {
      dispatch({
        type: 'TOGGLE_LOADING',
        payload: false
      })
    }
  }, [offset])
  
  async function get_customer_visit_info(){
    const ret = await axios({
      method: 'post',
      url: API_ENDPOINT + '/get_customer_visit_info',
      data: {
        offset: offset,
        shop: shop.value,
        customer_type: customer_type.value,
        search_key: '',
        limit: rowCount
      }
    })
    return ret
  }
  async function get_all_time_visit_count(){
    const ret = await axios({
      method: 'post',
      url: API_ENDPOINT + '/get_all_time_visit_count',
      data: {
        shop: shop.value
      }
    })
    return ret
  }
  async function get_all_customer_count(){
    const ret = await axios({
      method: 'post',
      url: API_ENDPOINT + '/get_all_customer_count',
      data: {
        shop: shop.value
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
              headerClass = "page__row page__row_head"
              text = { <>Welcome back<span className="desktop-hide">👋</span></> }
            />
            <div className="page__content">
              <div className="banner">
                <div className="banner__container">
                  <div className="banner__preview"><img className="banner__pic" src="img/banner-pic.png"/></div>
                  <div className="banner__wrap">
                    <div className="banner__title h3">{(customerCount.length > 0) && (visitCount.length > 0) ? 
                      <>
                        <span style={{ fontWeight: '800'}}>
                          <CountUp 
                            end={customerCount.length == 2 ? customerCount[0].customer_count + customerCount[1].customer_count : 0}
                            separator=","
                          />
                        </span> customers registered
                      </> : '0 customers registered'}</div>
                    <div className="banner__text h5">and they visit our shops for  
                      {(customerCount.length > 0) && (visitCount.length > 0) ? 
                        <>
                          <span style={{marginLeft: '10px', fontWeight: '800'}}>
                            <CountUp 
                              end={visitCount.reduce((sum, item) => sum += (item.tsm_count + item.gfo_count), 0)}
                              separator=","
                            />
                          </span> times
                        </> : '0 times'}
                    </div>
                    <div className="banner__text h5">All transactions count including unknown customers is  
                      {(customerCount.length > 0) && (visitCount.length > 0) ? 
                        <span style={{marginLeft: '10px', fontWeight: '800'}}>
                          <CountUp 
                            end={visitCount.reduce((acc, item) => {
                              return acc += item.all_count
                            }, 0)}
                            separator=","
                          />
                        </span> : '0'}
                    </div>
                    <a className="btn btn_white js-popup-open" href="#popup-visit-count-details" data-effect="mfp-zoom-in">View details</a>
                  </div>
                </div>
              </div>
              <div className="page__stat page__stat_pt32">
                <div className="sorting">
                  <div className="sorting__row">
                    <div className="sorting__col">
                      <div className="sorting__dropdowns">
                        <Shopselect/>
                        <Customertype/>
                      </div>
                    </div>
                    <div className="sorting__col">
                      <div className="sorting__line">
                        <div className="sorting__search"><button className="sorting__open"><svg className="icon icon-search">
                              <use xlinkHref="img/sprite.svg#icon-search" />
                            </svg></button><input className="sorting__input" type="text" placeholder="Search" /></div>
                        <div className="sorting__actions"><button className="sorting__action"><svg className="icon icon-box">
                              <use xlinkHref="img/sprite.svg#icon-box" />
                            </svg></button></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products products_main">
                  <div className="customer_wrapper">
                    <div className="products__table">
                      <div className="products__row products__row_head">
                        <div className="products__cell">Customer</div>
                        <div className="products__cell">Phone number</div>
                        <div className="products__cell">Total visits</div>
                        <div className="products__cell">First visit</div>
                        <div className="products__cell">Last visit</div>
                        <div className="products__cell">Last visit days ago</div>
                        <div className="products__cell" title="Visit times per week">Visit ratio</div>
                      </div>
                      <>
                        { data.length > 0 ? 
                          data.map((item, idx) => {
                            return <div key={ idx } className="products__row">
                              <div className="products__cell">
                                <a className="products__item">
                                  <div className="products__details">
                                    <div className="products__title title">{ item.name ? item.name : 'Unknown' }</div>
                                    <div className='products__info caption color-purple'>{ item.email ? item.email : 'Unknown' }</div>
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
                                  <div className="products__text">{ moment(item.first_visit).format('MMM DD, YYYY') }</div>
                                </div>
                              </div>
                              <div className="products__cell">
                                <div className="products__cost">
                                  <div className="products__text">{ moment(item.last_visit).format('MMM DD, YYYY') }</div>
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
                            </div>
                          }) 
                        : <div style={{width: '350px'}}>There are no customer activity in {shop.description}</div> }
                      </> 
                    </div>
                  </div>
                  <div className="products__more">
                    <div style={{marginBottom: '10px'}}>
                      Total loaded <span style={{fontWeight: 'bold'}}>{data.length}</span> customers from <span style={{fontWeight: 'bold'}}>{shop.description}</span>.</div>
                    <button className="products__btn btn btn_black" onClick={() => {
                      dispatch({
                        type: 'SET_CUSTOMER_OFFSET',
                        payload: offset + rowCount
                      })
                    }}>{loading ? 'Loading...' : 'Load More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popup mfp-hide" id="popup-visit-count-details">
          <div className="popup__form">
            <div className="popup__title h6">Customer visit details</div>
            <div className="popup__row">
              <div className="popup__field field">
                <div className="field__label">TOTAL TRANSACTOINS</div>
                <div className="field__wrap">
                  <div className="h4">
                    <NumberFormat value={visitCount.reduce((sum, item) => sum += item.all_count, 0)} thousandSeparator="," displayType={'text'}/>
                  </div>
                  {visitCount.map((item, idx) => {
                    return  <div style={{color: '#B2B3BD', fontSize: '12px'}} key={idx}>{item.shop_name}:
                              <span style={{marginLeft: '10px'}}><NumberFormat value={item.all_count} thousandSeparator="," displayType={'text'}/></span>
                            </div>
                  })}
                </div>
              </div>
              <div className="popup__field field">
                <div className="field__label">MEMBER VISITS</div>
                <div className="field__wrap">
                  <div className="h4">
                    <NumberFormat value={visitCount.reduce((sum, item) => sum += (item.tsm_count + item.gfo_count), 0)} thousandSeparator="," displayType={'text'}/>
                  </div>
                  {visitCount.map((item, idx) => {
                    return  <div style={{color: '#B2B3BD', fontSize: '12px'}} key={idx}>{item.shop_name}:
                              <span style={{marginLeft: '10px'}}><NumberFormat value={item.tsm_count + item.gfo_count} thousandSeparator="," displayType={'text'}/></span>
                            </div>
                  })}
                </div>
              </div>
            </div>
            <div className="popup__row" style={{borderBottom: '1px solid #E4E4E4', paddingBottom: '32px'}}>
              <div className="popup__field field">
                <div className="field__label">SPOONITY MEMBER VISITS</div>
                <div className="field__wrap">
                  <div className="h4">
                    <NumberFormat value={visitCount.reduce((sum, item) => sum += (item.tsm_count), 0)} thousandSeparator="," displayType={'text'}/>
                  </div>
                  {visitCount.map((item, idx) => {
                    return  <div style={{color: '#B2B3BD', fontSize: '12px'}} key={idx}>{item.shop_name}:
                              <span style={{marginLeft: '10px'}}><NumberFormat value={item.tsm_count} thousandSeparator="," displayType={'text'}/></span>
                            </div>
                  })}
                </div>
              </div>
              <div className="popup__field field">
                <div className="field__label">GLOBAL ONLINE ORDERS</div>
                <div className="field__wrap">
                  <div className="h4">
                    <NumberFormat value={visitCount.reduce((sum, item) => sum += (item.gfo_count), 0)} thousandSeparator="," displayType={'text'}/>
                  </div>
                  {visitCount.map((item, idx) => {
                    return  <div style={{color: '#B2B3BD', fontSize: '12px'}} key={idx}>{item.shop_name}:
                              <span style={{marginLeft: '10px'}}><NumberFormat value={item.gfo_count} thousandSeparator="," displayType={'text'}/></span>
                            </div>
                  })}
                </div>
              </div>
            </div>
            <div className="popup__row">
              <div className="popup__field field">
                <div className="field__label">TOTAL SPOONITY MEMBERS</div>
                <div className="field__wrap">
                  <div className="h4">
                    <NumberFormat value={customerCount.length == 2 ? customerCount[0].customer_count : 0} thousandSeparator="," displayType={'text'}/>
                  </div>
                </div>
              </div>
              <div className="popup__field field">
                <div className="field__label">TOTAL GLOBAL ONLINE CUSTOMERS</div>
                <div className="field__wrap">
                  <div className="h4">
                    <NumberFormat value={customerCount.length == 2 ? customerCount[1].customer_count : 0} thousandSeparator="," displayType={'text'}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="popup__row" style={{borderBottom: '1px solid #E4E4E4', paddingBottom: '32px'}}>
              <div className="popup__field field">
                <div className="field__label">TOTAL KNOWN MEMBERS</div>
                <div className="field__wrap">
                  <div className="h4">
                    <NumberFormat value={customerCount.length == 2 ? customerCount[0].customer_count + customerCount[1].customer_count : 0} thousandSeparator="," displayType={'text'}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="popup__text">Customer counts and their visits details of all time.</div>
          </div>
        </div>
        <div className="popup mfp-hide" id="popup-customer-details">
          <div className="popup__form">
            Here goes customer details
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Customers