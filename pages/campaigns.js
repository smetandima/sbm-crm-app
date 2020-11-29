import { useEffect } from 'react'
import Layout from '../components/layout'
import Header from '../components/shared/header'
const Campaigns = () => {

  return (
    <>
      <Layout>
        <div className="page__wrapper">
          <div className="page__center">
            <Header 
              haederClass="page__row page__row_head page__row_border"
              text="Campaigns"
            />
            <div className="page__row page__row_border">
              <div className="page__col">
                <div className="details">
                  <div className="details__container">
                    <div className="details__title h6">Customers visited today 💡</div>
                    <div className="details__row">
                      <div className="details__col">
                        <div className="details__top">
                          <div className="details__number h1">478</div><a className="details__line" href="#">
                            <div className="details__preview"><img className="details__pic" src="img/details-pic.png" /></div>
                            <div className="details__info caption-sm">Total purchase today</div>
                          </a>
                        </div>
                        <div className="details__bottom">
                          <div className="details__statistics">
                            <div className="details__chart details__chart_activity">
                              <div id="chart-active-users" />
                            </div>
                            <div className="details__status">
                              <div className="details__icon bg-blue"><svg className="icon icon-arrow-down-fat">
                                  <use xlinkHref="img/sprite.svg#icon-arrow-down-fat" />
                                </svg></div>
                              <div className="details__percent caption-sm color-blue-dark">6%</div>
                            </div>
                          </div>
                          <div className="details__info caption-sm">Update your payout method in Settings</div>
                        </div>
                      </div>
                      <div className="details__col">
                        <div className="details__box">
                          <div className="details__chart details__chart_counter">
                            <div id="chart-users-counter" />
                          </div><button className="details__remove"><svg className="icon icon-remove">
                              <use xlinkHref="img/sprite.svg#icon-remove" />
                            </svg></button>
                        </div>
                      </div>
                    </div>
                    <div className="details__list details__list_four">
                      <div className="details__item">
                        <div className="details__head">
                          <div className="details__preview bg-purple"><img className="details__pic" src="img/folder.svg" /></div>
                          <div className="details__text caption-sm">Users</div>
                        </div>
                        <div className="details__counter h3">36k</div>
                        <div className="details__indicator">
                          <div className="details__progress bg-purple" style={{width: '55%'}} />
                        </div>
                      </div>
                      <div className="details__item">
                        <div className="details__head">
                          <div className="details__preview bg-pink"><img className="details__pic" src="img/activity.svg" /></div>
                          <div className="details__text caption-sm">Clicks</div>
                        </div>
                        <div className="details__counter h3">1m</div>
                        <div className="details__indicator">
                          <div className="details__progress bg-pink" style={{width: '52%'}} />
                        </div>
                      </div>
                      <div className="details__item">
                        <div className="details__head">
                          <div className="details__preview bg-blue"><img className="details__pic" src="img/bag.svg" /></div>
                          <div className="details__text caption-sm">Sales</div>
                        </div>
                        <div className="details__counter h3">327$</div>
                        <div className="details__indicator">
                          <div className="details__progress bg-blue" style={{width: '55%'}} />
                        </div>
                      </div>
                      <div className="details__item">
                        <div className="details__head">
                          <div className="details__preview bg-red"><img className="details__pic" src="img/chat.svg" /></div>
                          <div className="details__text caption-sm">Items</div>
                        </div>
                        <div className="details__counter h3">68</div>
                        <div className="details__indicator">
                          <div className="details__progress bg-red" style={{width: '68%'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page__widgets">
                  <div className="widget widget_users widget_shadow widget_p0">
                    <div className="widget__head">
                      <div className="widget__title">Users</div>
                    </div>
                    <div className="widget__body">
                      <div className="widget__flex">
                        <div className="widget__desc">
                          <div className="widget__category caption-sm">New Users</div>
                          <div className="widget__number h4">57m</div>
                          <div className="widget__percent">21.77%</div>
                        </div>
                        <div className="widget__chart widget__chart_users">
                          <div id="chart-users-blue" />
                        </div>
                      </div>
                      <div className="widget__flex">
                        <div className="widget__desc">
                          <div className="widget__category caption-sm">New Users</div>
                          <div className="widget__number h4">36m</div>
                          <div className="widget__percent">21.77%</div>
                        </div>
                        <div className="widget__chart widget__chart_users">
                          <div id="chart-users-purple" />
                        </div>
                      </div>
                    </div>
                    <div className="widget__foot"><a className="widget__link caption" href="#">Go to settings</a></div>
                  </div>
                  <div className="widget widget_chart widget_purple">
                    <div className="widget__title color-white">Income</div>
                    <div className="widget__wrap">
                      <div className="widget__chart widget__chart_earning">
                        <div id="chart-income" />
                      </div>
                      <div className="widget__btns"><button className="widget__btn btn btn_black btn_wide">Withdraw Earnings</button></div>
                    </div>
                  </div>
                </div>
                <div className="page__widgets">
                  <div className="widget widget_shadow">
                    <div className="widget__title">Icon Progress</div>
                    <div className="quality">
                      <div className="quality__list">
                        <div className="quality__item quality__item_chart">
                          <div className="quality__preview bg-pink-opacity"><img className="quality__pic" src="img/figure-1.png" /></div>
                          <div className="quality__details">
                            <div className="quality__title title">CRM Comps</div>
                            <div className="quality__info caption-sm">New 3D Kit</div>
                          </div>
                          <div className="quality__chart">
                            <div id="chart-circle-purple" />
                            <div className="quality__percent caption-sm">40%</div>
                          </div>
                        </div>
                        <div className="quality__item quality__item_chart">
                          <div className="quality__preview bg-yellow-opacity"><img className="quality__pic" src="img/figure-2.png" /></div>
                          <div className="quality__details">
                            <div className="quality__title title">Folio Designer</div>
                            <div className="quality__info caption-sm">UI Design Kit</div>
                          </div>
                          <div className="quality__chart">
                            <div id="chart-circle-green" />
                            <div className="quality__percent caption-sm">62%</div>
                          </div>
                        </div>
                        <div className="quality__item quality__item_chart">
                          <div className="quality__preview bg-blue-light-opacity"><img className="quality__pic" src="img/figure-3.png" /></div>
                          <div className="quality__details">
                            <div className="quality__title title">Folio Agency</div>
                            <div className="quality__info caption-sm">UI Design Kit</div>
                          </div>
                          <div className="quality__chart">
                            <div id="chart-circle-red" />
                            <div className="quality__percent caption-sm">75%</div>
                          </div>
                        </div>
                      </div><button className="quality__btn btn btn_black btn_wide">Discover More</button>
                    </div>
                  </div>
                  <div className="widget widget_shadow">
                    <div className="widget__top">
                      <div className="widget__title mr-auto">Latest Sales</div><a className="widget__next" href="#"><svg className="icon icon-arrow-next-fat">
                          <use xlinkHref="img/sprite.svg#icon-arrow-next-fat" />
                        </svg></a>
                    </div>
                    <div className="quality">
                      <div className="quality__list">
                        <div className="quality__item">
                          <div className="quality__preview bg-pink-opacity"><img className="quality__pic" src="img/figure-1.png" /></div>
                          <div className="quality__details">
                            <div className="quality__line">
                              <div className="quality__title title">CRM Comps</div>
                              <div className="quality__price title">+$35</div>
                            </div>
                            <div className="quality__info caption-sm">New 3D Kit</div>
                          </div>
                        </div>
                        <div className="quality__item">
                          <div className="quality__preview bg-pink-opacity"><img className="quality__pic" src="img/figure-3.png" /></div>
                          <div className="quality__details">
                            <div className="quality__line">
                              <div className="quality__title title">CRM Comps</div>
                              <div className="quality__price title">+$35</div>
                            </div>
                            <div className="quality__info caption-sm">New 3D Kit</div>
                          </div>
                        </div>
                        <div className="quality__item">
                          <div className="quality__preview bg-blue-opacity"><img className="quality__pic" src="img/figure-5.png" /></div>
                          <div className="quality__details">
                            <div className="quality__line">
                              <div className="quality__title title">CRM Comps</div>
                              <div className="quality__price title">+$35</div>
                            </div>
                            <div className="quality__info caption-sm">New 3D Kit</div>
                          </div>
                        </div>
                      </div><button className="quality__btn btn btn_purple btn_wide">Show all reports</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page__col">
                <div className="page__group">
                  <div className="widget widget_shadow">
                    <div className="widget__title">2020 Goal</div>
                    <div className="goal">
                      <div className="goal__container">
                        <div className="goal__slider owl-carousel js-slider-goal">
                          <div className="goal__preview"><img className="goal__pic" src="img/figure-1.png" />
                            <div className="goal__bg bg-blue-light" />
                          </div>
                          <div className="goal__preview"><img className="goal__pic" src="img/figure-2.png" />
                            <div className="goal__bg bg-pink" />
                          </div>
                        </div>
                      </div>
                      <div className="goal__list">
                        <div className="goal__item">
                          <div className="goal__head">
                            <div className="goal__title title">CRM Dashboard</div>
                            <div className="goal__percent title">40%</div>
                          </div>
                          <div className="goal__indicator">
                            <div className="goal__progress bg-purple" style={{width: '40%'}} />
                          </div>
                        </div>
                        <div className="goal__item">
                          <div className="goal__head">
                            <div className="goal__title title">CRM Dashboard</div>
                            <div className="goal__percent title">25%</div>
                          </div>
                          <div className="goal__indicator">
                            <div className="goal__progress bg-green" style={{width: '25%'}} />
                          </div>
                        </div>
                        <div className="goal__item">
                          <div className="goal__head">
                            <div className="goal__title title">CRM Dashboard</div>
                            <div className="goal__percent title">50%</div>
                          </div>
                          <div className="goal__indicator">
                            <div className="goal__progress bg-yellow" style={{width: '50%'}} />
                          </div>
                        </div>
                        <div className="goal__item">
                          <div className="goal__head">
                            <div className="goal__title title">CRM Dashboard</div>
                            <div className="goal__percent title">80%</div>
                          </div>
                          <div className="goal__indicator">
                            <div className="goal__progress bg-pink" style={{width: '80%'}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget_empty widget_p0">
                    <div className="widget__title">Affiliate Impressions</div>
                    <div className="widget__chart widget__chart_impressions">
                      <div id="chart-affiliate-impressions" />
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

export default Campaigns