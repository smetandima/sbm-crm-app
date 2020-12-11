import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import axios from 'axios'
import moment from 'moment'

import Layout from '../components/layout'
import Header from '../components/shared/header'
import Daterange from '../components/widgets/daterange'
import Shopselect from '../components/widgets/shopselect'
// colors
const blue = '#A0D7E7';
const blueLight = '#0e97b5';
const purple = '#6C5DD3';
const white = '#ffffff';
// const blueOpacity = '#e6efff';
// const blueLight = '#50B5FF';
const pink = '#FFB7F5';
// const orangeOpacity = '#fff5ed';
const yellow = '#FFCE73';
const green = '#7FBA7A';
const red = '#FF754C';
// const greenOpacity = '#ecfbf5';
const gray = '#808191';
const grayOpacity = '#f2f2f2';
// const grayLight = '#E2E2EA';
const borderColor = "#E4E4E4";
// const text = "#171725";

const Overview = () => {
  const API_ENDPOINT = useSelector(state => state.api_endpoint)
  const dispatch = useDispatch()
  const [error, setError] = useState(undefined)
  const firstUpdate = useRef(true)
  const period = useSelector(state => state.customer_period)
  const shop = useSelector(state => state.shop)
  const loading = useSelector(state => state.loading)
  
  const visit_count = useSelector(state => state.visit_count)

  const [visitCountAll, setVisitCountAll] = useState({
    all: 0,
    tsm: 0,
    gfo: 0
  })
  //const [constData,]

  useEffect(() => {
    //if(fistUpdate && )
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
          status: res.status,
          msg: 'Database error'
        })
      }
      dispatch({
        type: 'TOGGLE_LOADING',
        payload: false
      })
    })
  }, [period, shop])

  useEffect(() => {
    let all = 0, tsm = 0, gfo = 0
    visit_count.forEach(item => {
      all += item.all_count
      tsm += item.tsm_count 
      gfo += item.gfo_count
    })
    setVisitCountAll({
      all: all,
      tsm: tsm,
      gfo: gfo
    })
  }, [visit_count])

  useEffect(() => {
    // Chart 

    let options_visit = {
      labels: ['Aug', 'Sep', 'Oct', 'Nov'],
      series: [{
         name: 'Verified customers',
        data: [230, 130, 280, 200]
      }, {
         name: 'Unknown customers',
        data: [210, 170, 430, 200]
      }],
      colors: [blue, purple],
      chart: {
        height: '100%',
        type: 'line',
        toolbar: {
          show: false
        }
      },
      grid: {
        borderColor: borderColor,
        strokeDashArray: 0,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: 0,
          left: 15,
          right: 0,
          bottom: 0
        }
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: false
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        x: {
          show: false
        }
      }
    };
    let options_shop = {
      labels: ['Temple', 'Cupertino', 'Irvine'],
      series: [{
        name: 'Verified customers',
        data: [95, 66, 44]
      }, {
        name: 'Unknown customers',
        data: [72, 48, 38]
      }],
      colors: [purple, blue],
      chart: {
        height: '100%',
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 0.9
          }
        }
      },
      grid: {
        borderColor: borderColor,
        strokeDashArray: 0,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          top: 0,
          left: 15,
          right: 0,
          bottom: 0
        }
      },
      stroke: {
        curve: 'smooth'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: '40%'
        }
      },
      legend: {
        show: false
      },
      tooltip: {
        shared: true
      },
      xaxis: {
        axisBorder: {
          show: false,
          color: borderColor
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: false
        }
      } 
    };

    let visit_chart = undefined
    let shop_chart = undefined

    let chart_shop = document.querySelector('#chart-shop');
    if (chart_shop != null) {
      shop_chart = new ApexCharts(chart_shop, options_shop).render();
    }
    
    let chart_visit = document.querySelector('#chart-visit');
    if (chart_visit != null) {
      visit_chart = new ApexCharts(chart_visit, options_visit).render()
    }

    return () => {
      options_shop = []
      options_visit = []
      visit_chart = undefined
      shop_chart = undefined
    }
  }, [])
  
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
                <div className="slider">
                  <div className="slider__container">
                    <div className="slider__inner">
                      <div className="slider__item">
                        <div className="slider__details">
                          <div className="slider__title h5">
                            Complete your profile
                          </div>
                          <div className="slider__text">
                            In order to explore the professional figures, please complete your profile.
                          </div>
                          <a className="slider__btn btn btn_white js-popup-open" href="#popup-settings" data-effect="mfp-zoom-in">Settings</a>
                        </div>
                        <div className="slider__preview">
                          <img className="slider__pic" src="img/slider-pic.png" />
                        </div>
                      </div>
                    </div>
                    <button className="slider__close">
                      <svg className="icon icon-remove">
                        <use xlinkHref="img/sprite.svg#icon-remove" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="filter_widget">
                  <div className="widget"><Shopselect /></div>
                  <div className="widget"><Daterange /></div>
                  
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
                              All customers - {visitCountAll.all}
                              <svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg>
                            </div>
                            <div className="widget__info caption">Spoonity ID, Full name, Email address, Phone number</div>
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
                              Spoonity reward members - {visitCountAll.tsm}
                              <svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg>
                            </div>
                            <div className="widget__info caption">Spoonity ID, Phone number</div>
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
                              Global food online orders - {visitCountAll.gfo}
                              <svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg>
                            </div>
                            <div className="widget__info caption">They didn't leave their information</div>
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
                              Unknown customers - {visitCountAll.all - visitCountAll.tsm - visitCountAll.gfo}
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
                        <div id="chart-visit" />
                      </div>
                      <div className="widget__btns">
                        <button className="widget__btn btn btn_purple btn_wide">
                          Analytics
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page__col">
                <div className="page__group">
                  <div className="widget widget_stat widget_pb60">
                    <div className="widget__title">Total registerd customers</div>
                    <div className="widget__counter title title_md color-purple">
                      80,310
                    </div>
                    <div className="widget__text">
                      All customers that visited our shops
                    </div>
                    <Link href="/customers">
                      <a className="widget__btn btn btn_white btn_wide">See all customers</a>
                    </Link>
                  </div>
                  <div className="widget widget_empty widget_p0">
                    <div className="widget__title">Shops</div>
                    <div className="widget__chart widget__chart_impressions">
                      <div id="chart-shop" />
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