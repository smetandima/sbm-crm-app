import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import moment from 'moment'
import Layout from '../components/layout'
import Header from '../components/shared/header'
import { useSelector, useDispatch } from 'react-redux'
import Daterange from '../components/widgets/daterange'
import Shopselect from '../components/widgets/shopselect'

const Customers = () => {
  const API_ENDPOINT = useSelector(state => state.api_endpoint)
  const dispatch = useDispatch()

  const [data, setData] = useState(useSelector(state => state.customers))
  const [error, setError] = useState(undefined)

  const offset = useSelector(state => state.customer_offset)
  const period = useSelector(state => state.customer_period)
  const shop = useSelector(state => state.shop)
  const loading = useSelector(state => state.loading)
  const rowCount = 10

  const firstUpdate = useRef(true);

  const [selected, setSelected] = useState([])

  useEffect(() => {
    // setData([])
    // dispatch({
    //   type: 'SET_CUSTOMER_OFFSET',
    //   payload: -1
    // })
    // if(!firstUpdate.current){
    //   setData([])
    //   dispatch({
    //     type: 'SET_CUSTOMER_OFFSET',
    //     payload: -1
    //   })
    // }else{
    //   firstUpdate.current = false
    // }
    if(firstUpdate.current){
      firstUpdate.current = false
    }else{
      setData([])
      dispatch({
        type: 'SET_CUSTOMER_OFFSET',
        payload: -1
      })
    }
    
  }, [shop.value, period.value])

  useEffect(() => {
    if(offset !== -1){
      if(data.length !== (offset / rowCount + 1) * rowCount){
        dispatch({
          type: 'TOGGLE_LOADING',
          payload: true
        })
        get_customer_info().then(res => {
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
  
  async function get_customer_info(){
    const ret = await axios({
      method: 'post',
      url: API_ENDPOINT + '/get_customer_info',
      data: {
        offset: offset,
        period: period,
        shop: shop.value,
        search_key: '',
        limit: rowCount
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
                    <div className="banner__title h3">All customers</div>
                    <div className="banner__text">Registered customers and their visit behavior</div><button className="banner__btn btn btn_white">Check purchase behavior</button>
                  </div>
                </div>
              </div>
              <div className="page__stat page__stat_pt32">
                <div className="sorting">
                  <div className="sorting__row">
                    <div className="sorting__col">
                      <div className="sorting__dropdowns">
                        <Shopselect />
                        <Daterange />
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
                        <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                        <div className="products__cell">Customer</div>
                        <div className="products__cell">Email</div>
                        <div className="products__cell">Phone number</div>
                        <div className="products__cell">Total visits</div>
                        <div className="products__cell">Last visit</div>
                      </div>
                      <>
                        { data.length > 0 ? 
                          data.map((item, idx) => {
                            return <div key={ idx } className="products__row">
                              <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                              <div className="products__cell"><a className="products__item">
                                  <div className="products__details">
                                    <div className="products__title title">{ item.name }</div>
                                    <div className={item.spoonity_id ? 'products__info caption color-pink' : 'products__info caption color-purple'}>{ item.spoonity_id ? `Spoonity ID: ${item.spoonity_id}` : `Gfo ID: ${item.gfo_id}` }</div>
                                  </div>
                                </a></div>
                              <div className="products__cell">
                                <div className="products__payment">{ item.email }</div>
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
                                  <div className="products__text">{ moment(item.last_visit.date).format('MMM DD, YYYY') }</div>
                                </div>
                              </div>
                            </div>
                          }) 
                        : <div style={{width: '350px'}}>{period.description}, there are no customer activity in {shop.description}</div> }
                      </> 
                    </div>
                  </div>
                  <div className="products__more">
                    <div style={{marginBottom: '10px'}}>
                      Total loaded <span style={{fontWeight: 'bold'}}>{data.length}</span> customers from <span style={{fontWeight: 'bold'}}>{shop.description}</span> during <span style={{fontWeight: 'bold'}}>{period.description}</span></div>
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
      </Layout>
    </>
  )
}

export default Customers