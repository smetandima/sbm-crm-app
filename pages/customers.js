import { useEffect, useState } from 'react'
import axios from 'axios'
import * as moment from 'moment'
import Layout from '../components/layout'
import Header from '../components/shared/header'

const Customers = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const offsetData = new FormData()
    offsetData.append('limit', 10)
    offsetData.append('offset', offset)

    setLoading(true)
    get_customer_info(offsetData).then(res => {
      setData([...data, ...res.data.customer_info])
      setLoading(false)
    })
  }, [offset])

  async function get_customer_info(offsetData){
    const ret = await axios({
      method: 'post',
      url: 'http://198.11.172.117/sbm-dashboard/crm/get_customer_info',
      data: offsetData
    })
    return ret.data
  }
  return (
    <>
      <Layout>
        <div className="page__wrapper">
          <div className="page__center">
            <Header 
              haederClass = "page__row page__row_head"
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
                        <div className="dropdown js-dropdown">
                          <div className="dropdown__head js-dropdown-head">Last 30 days</div>
                          <div className="dropdown__body js-dropdown-body">
                            <a className="dropdown__item" href="#">
                              <div className="dropdown__title title">Bento 3D Kit </div>
                              <div className="dropdown__info caption">Illustration</div>
                            </a><a className="dropdown__item" href="#">
                              <div className="dropdown__title title">Bento 3D Kit </div>
                              <div className="dropdown__info caption">Illustration</div>
                            </a><a className="dropdown__item" href="#">
                              <div className="dropdown__title title">Collab UI Kit </div>
                              <div className="dropdown__info caption">Coded Template</div>
                            </a></div>
                        </div>
                        <div className="dropdown js-dropdown">
                          <div className="dropdown__head js-dropdown-head">Aug 2020</div>
                          <div className="dropdown__body js-dropdown-body">
                            <a className="dropdown__item" href="#">
                              <div className="dropdown__title title">Bento 3D Kit </div>
                              <div className="dropdown__info caption">Illustration</div>
                            </a><a className="dropdown__item" href="#">
                              <div className="dropdown__title title">Bento 3D Kit </div>
                              <div className="dropdown__info caption">Illustration</div>
                            </a><a className="dropdown__item" href="#">
                              <div className="dropdown__title title">Collab UI Kit </div>
                              <div className="dropdown__info caption">Coded Template</div>
                            </a></div>
                        </div>
                      </div>
                    </div>
                    <div className="sorting__col">
                      <div className="sorting__line">
                        <div className="sorting__search"><button className="sorting__open"><svg className="icon icon-search">
                              <use xlinkHref="img/sprite.svg#icon-search" />
                            </svg></button><input className="sorting__input" type="text" placeholder="Search" /></div>
                        <div className="sorting__actions"><button className="sorting__action"><svg className="icon icon-edit">
                              <use xlinkHref="img/sprite.svg#icon-edit" />
                            </svg></button><button className="sorting__action"><svg className="icon icon-box">
                              <use xlinkHref="img/sprite.svg#icon-box" />
                            </svg></button></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products products_main">
                  <div className="products__table">
                    <div className="products__row products__row_head">
                      <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                      <div className="products__cell">Customer</div>
                      <div className="products__cell">Email</div>
                      <div className="products__cell">Phone number</div>
                      <div className="products__cell">Visit count</div>
                    </div>
                    <>
                      { data.length > 0 ? 
                        data.map((item, idx) => {
                          return <div key={ idx } className="products__row">
                            <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                            <div className="products__cell"><a className="products__item" href="#">
                                <div className="products__preview"><img className="products__pic" src="img/product-pic.png"/></div>
                                <div className="products__details">
                                  <div className="products__title title">{ item.name }</div>
                                  <div className="products__info caption color-gray">{ item.spoonity_id }</div>
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
                                <div className="products__money">{ item.visit_count }</div>
                                <div className="products__tooltip">
                                  <div className="products__sale">
                                    <div className="products__icon bg-red"><img className="products__pic" src="img/chat-black.svg"/></div>
                                    <div className="products__caption caption-sm">Last visit</div>
                                  </div>
                                  <div className="products__price">{ moment(item.last_visit.date).format('MMM DD, YYYY') }</div>
                                  <div className="products__progress"><span style={{width: '68%'}} /></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        }) 
                          : 'Empty' }
                    </> 
                  </div>
                  <div className="products__more"><button className="products__btn btn btn_black" onClick={() => {
                    setOffset(offset + 10)
                  }}>Load More</button></div>
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