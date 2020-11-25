import { useEffect } from 'react'
import Layout from '../components/layout'

const Schedules = () => {

  return (
    <>
      <Layout>
        <div className="page__wrapper">
          <div className="page__center">
            <div className="page__row page__row_head">
              <div className="page__col">
                <div className="page__hello h5">Hi David,</div>
                <div className="page__welcome h2">Schedules</div>
              </div>
              <div className="page__col">
                <div className="header"><button className="header__burger" />
                  <div className="search">
                    <div className="search__field"><input className="search__input" type="text" placeholder="Search" /><button className="search__toggle"><svg className="icon icon-search">
                          <use xlinkHref="img/sprite.svg#icon-search" />
                        </svg><svg className="icon icon-close">
                          <use xlinkHref="img/sprite.svg#icon-close" />
                        </svg></button></div>
                    <div className="search__result">
                      <div className="search__info caption-sm">Recent Searches</div>
                      <div className="search__list"><a className="search__item" href="#">
                          <div className="search__preview bg-pink"><img className="search__pic" src="img/figure-1.png" /></div>
                          <div className="search__text">Earning byitems<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg></div>
                        </a><a className="search__item" href="#">
                          <div className="search__preview bg-yellow"><img className="search__pic" src="img/figure-4.png" /></div>
                          <div className="search__text">This monthStatements<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg></div>
                        </a><a className="search__item" href="#">
                          <div className="search__preview bg-blue-light"><img className="search__pic" src="img/figure-3.png" /></div>
                          <div className="search__text">How manysales I got…<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg></div>
                        </a></div><button className="search__btn btn btn_purple btn_wide">Advance Search</button>
                    </div>
                  </div><button className="header__search"><svg className="icon icon-search">
                      <use xlinkHref="img/sprite.svg#icon-search" />
                    </svg></button>
                  <div className="notifications"><button className="notifications__open"><svg className="icon icon-bell">
                        <use xlinkHref="img/sprite.svg#icon-bell" />
                      </svg><span className="notifications__counter">2</span></button>
                    <div className="notifications__wrap">
                      <div className="notifications__info h6">Recent Notification</div>
                      <div className="notifications__list"><a className="notifications__item" href="notifications">
                          <div className="notifications__ava"><img className="notifications__pic" src="img/ava-1.png" />
                            <div className="notifications__status bg-blue"><img className="notifications__pic" src="img/chat.svg" /></div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">Sarah Saunders</div>
                              <div className="notifications__time caption">8h</div>
                            </div>
                            <div className="notifications__text caption-sm">Commented on <span className="notifications__project">Collab Design</span></div>
                          </div>
                        </a><a className="notifications__item" href="notifications">
                          <div className="notifications__ava"><img className="notifications__pic" src="img/ava-1.png" />
                            <div className="notifications__status bg-green"><img className="notifications__pic" src="img/bag.svg" /></div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">Glenn Greer</div>
                              <div className="notifications__time caption">12h</div>
                            </div>
                            <div className="notifications__text caption-sm">Just pushaded <span className="notifications__project">Sapiens Illustration</span></div>
                          </div>
                        </a><a className="notifications__item" href="notifications">
                          <div className="notifications__ava"><img className="notifications__pic" src="img/ava-1.png" />
                            <div className="notifications__status bg-purple"><img className="notifications__pic" src="img/message.svg" /></div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">Sarah Saunders</div>
                              <div className="notifications__time caption">14h</div>
                            </div>
                            <div className="notifications__text caption-sm">Sent you a message 📪 </div>
                          </div>
                        </a><a className="notifications__item" href="notifications">
                          <div className="notifications__ava"><img className="notifications__pic" src="img/ava-1.png" />
                            <div className="notifications__status bg-red"><img className="notifications__pic" src="img/heart.svg" /></div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">Sarah Saunders</div>
                              <div className="notifications__time caption">21h</div>
                            </div>
                            <div className="notifications__text caption-sm">Liked <span className="notifications__project">Folio Agency</span></div>
                          </div>
                        </a><a className="notifications__item" href="notifications">
                          <div className="notifications__ava"><img className="notifications__pic" src="img/ava-1.png" />
                            <div className="notifications__status bg-blue"><img className="notifications__pic" src="img/chat.svg" /></div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">Sarah Saunders</div>
                              <div className="notifications__time caption">8h</div>
                            </div>
                            <div className="notifications__text caption-sm">Commented on <span className="notifications__project">Collab Design</span></div>
                          </div>
                        </a><a className="notifications__item" href="notifications">
                          <div className="notifications__ava"><img className="notifications__pic" src="img/ava-1.png" />
                            <div className="notifications__status bg-green"><img className="notifications__pic" src="img/bag.svg" /></div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">Glenn Greer</div>
                              <div className="notifications__time caption">12h</div>
                            </div>
                            <div className="notifications__text caption-sm">Just pushaded <span className="notifications__project">Sapiens Illustration</span></div>
                          </div>
                        </a></div>
                      <div className="notifications__btns"><a className="notifications__btn btn btn_black" href="notifications">See all incoming activity</a></div>
                    </div>
                  </div><a className="header__user" href="#"><img className="header__pic" src="img/ava.png" /></a>
                </div>
              </div>
            </div>
            <div className="page__content">
              <div className="banner">
                <div className="banner__container">
                  <div className="banner__preview"><img className="banner__pic" src="img/banner-pic.png" /></div>
                  <div className="banner__wrap">
                    <div className="banner__title h3">Unity Dashboard</div>
                    <div className="banner__text">Create Your Product Dashboard in Minutes</div><button className="banner__btn btn btn_white">Create Schedule</button>
                  </div>
                </div>
              </div>
              <div className="schedules">
                <div className="schedules__container">
                  <div className="schedules__col">
                    <div className="schedules__title h6">Small Timeline</div>
                    <div className="schedules__list"><a className="schedules__item active" href="#">
                        <div className="schedules__date bg-pink-light">
                          <div className="schedules__name caption-sm">Mon</div>
                          <div className="schedules__number h4">20</div>
                        </div>
                        <div className="schedules__details">
                          <div className="schedules__category title">Unity UI Kit<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg></div>
                          <div className="schedules__info caption-sm">UI Design</div>
                          <div className="schedules__time caption">10:00</div>
                        </div>
                      </a><a className="schedules__item" href="#">
                        <div className="schedules__date bg-purple-light">
                          <div className="schedules__name caption-sm">Tue</div>
                          <div className="schedules__number h4">21</div>
                        </div>
                        <div className="schedules__details">
                          <div className="schedules__category title">Bento 3D<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg></div>
                          <div className="schedules__info caption-sm">UI Design</div>
                          <div className="schedules__time caption">11:30</div>
                        </div>
                      </a><a className="schedules__item" href="#">
                        <div className="schedules__date bg-blue-light">
                          <div className="schedules__name caption-sm">Wed</div>
                          <div className="schedules__number h4">22</div>
                        </div>
                        <div className="schedules__details">
                          <div className="schedules__category title">Unity UI Kit<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg></div>
                          <div className="schedules__info caption-sm">UI Design</div>
                          <div className="schedules__time caption">12:00</div>
                        </div>
                      </a><a className="schedules__item" href="#">
                        <div className="schedules__date bg-yellow-light">
                          <div className="schedules__name caption-sm">Thu</div>
                          <div className="schedules__number h4">23</div>
                        </div>
                        <div className="schedules__details">
                          <div className="schedules__category title">Unity UI Kit<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg></div>
                          <div className="schedules__info caption-sm">UI Design</div>
                          <div className="schedules__time caption">10:00</div>
                        </div>
                      </a></div><button className="schedules__btn btn btn_blue-dark btn_wide">Add more</button>
                  </div>
                  <div className="schedules__col">
                    <div className="schedules__top">
                      <div className="schedules__title h6">Big Timeline</div>
                      <div className="schedules__arrows"><button className="schedules__arrow"><svg className="icon icon-arrow-left">
                            <use xlinkHref="img/sprite.svg#icon-arrow-left" />
                          </svg></button><button className="schedules__arrow"><svg className="icon icon-arrow-right">
                            <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                          </svg></button></div>
                    </div>
                    <div className="schedules__inner">
                      <div className="schedules__graphic">
                        <div className="schedules__head">
                          <div className="schedules__option">Aug</div>
                          <div className="schedules__week">
                            <div className="schedules__cell">
                              <div className="schedules__day green">M</div>
                            </div>
                            <div className="schedules__cell">
                              <div className="schedules__day green">T</div>
                            </div>
                            <div className="schedules__cell">
                              <div className="schedules__day active">W</div>
                            </div>
                            <div className="schedules__cell">
                              <div className="schedules__day">Th</div>
                            </div>
                            <div className="schedules__cell">
                              <div className="schedules__day gray">Fr</div>
                            </div>
                            <div className="schedules__cell">
                              <div className="schedules__day">Sa</div>
                            </div>
                          </div>
                        </div>
                        <div className="schedules__body">
                          <div className="schedules__grid">
                            <div className="schedules__line" />
                            <div className="schedules__line" />
                            <div className="schedules__line" />
                            <div className="schedules__line" />
                            <div className="schedules__line" />
                          </div>
                          <div className="schedules__row">
                            <div className="schedules__option">08:00</div>
                            <div className="schedules__week">
                              <div className="schedules__task bg-purple" style={{width: '33.33%'}}>
                                <div className="schedules__text">Bento 3D Objects</div>
                              </div>
                            </div>
                          </div>
                          <div className="schedules__row">
                            <div className="schedules__option">09:00</div>
                            <div className="schedules__week">
                              <div className="schedules__task bg-pink" style={{width: '50%', marginLeft: '16.66%'}}>
                                <div className="schedules__text">Bento 3D Objects</div>
                              </div>
                            </div>
                          </div>
                          <div className="schedules__row">
                            <div className="schedules__option">10:00</div>
                            <div className="schedules__week">
                              <div className="schedules__task bg-blue-light" style={{width: '83.33%'}}>
                                <div className="schedules__text">Bento 3D Objects</div>
                              </div>
                            </div>
                          </div>
                          <div className="schedules__row">
                            <div className="schedules__option">11:00</div>
                            <div className="schedules__week">
                              <div className="schedules__task bg-purple-light" style={{width: '66.66%', marginLeft: '16.66%'}}>
                                <div className="schedules__text">Bento 3D Objects</div>
                              </div>
                            </div>
                          </div>
                          <div className="schedules__row">
                            <div className="schedules__option">12:00</div>
                            <div className="schedules__week">
                              <div className="schedules__task bg-blue" style={{width: '33.33%', marginLeft: '33.33%'}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="schedules__legend">
                      <div className="schedules__status green">Small note</div>
                      <div className="schedules__status purple">Small note</div>
                      <div className="schedules__status gray">Small note</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page__flex">
                <div className="widget widget_shadow">
                  <div className="widget__title">Icon Progress</div>
                  <div className="quality">
                    <div className="quality__list">
                      <div className="quality__item quality__item_chart">
                        <div className="quality__preview bg-blue-light-opacity"><img className="quality__pic" src="img/figure-5.png" /></div>
                        <div className="quality__details">
                          <div className="quality__title title">Folio Agency</div>
                          <div className="quality__info caption-sm">UI Design Kit</div>
                        </div>
                        <div className="quality__chart">
                          <div id="chart-circle-yellow" />
                          <div className="quality__percent caption-sm">35%</div>
                        </div>
                      </div>
                      <div className="quality__item quality__item_chart">
                        <div className="quality__preview bg-pink-opacity"><img className="quality__pic" src="img/figure-1.png" /></div>
                        <div className="quality__details">
                          <div className="quality__title title">Unity Comps</div>
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
                    </div><button className="quality__btn quality__btn_mt30 btn btn_black btn_wide">Discover More</button>
                  </div>
                </div>
                <div className="widget widget_shadow">
                  <div className="widget__title">Recent Earnings 🔥</div>
                  <div className="tabs">
                    <div className="tabs__row">
                      <div className="tabs__col"><a className="tabs__item active" href="#">
                          <div className="tabs__preview bg-blue"><img className="tabs__pic" src="img/figure-3.png" /></div>
                          <div className="tabs__details">
                            <div className="tabs__category title">Collab UI<svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg></div>
                            <div className="tabs__info caption-sm">UI Design</div>
                            <div className="tabs__price caption">$64</div>
                          </div>
                        </a><a className="tabs__item" href="#">
                          <div className="tabs__preview bg-pink"><img className="tabs__pic" src="img/figure-1.png" /></div>
                          <div className="tabs__details">
                            <div className="tabs__category title">Sapiens<svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg></div>
                            <div className="tabs__info caption-sm">UI Design</div>
                            <div className="tabs__price caption">$64</div>
                          </div>
                        </a><a className="tabs__item" href="#">
                          <div className="tabs__preview bg-yellow"><img className="tabs__pic" src="img/figure-2.png" /></div>
                          <div className="tabs__details">
                            <div className="tabs__category title">Folio Agency<svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg></div>
                            <div className="tabs__info caption-sm">UI Design</div>
                            <div className="tabs__price caption">$64</div>
                          </div>
                        </a></div>
                      <div className="tabs__col">
                        <div className="tabs__chart">
                          <div id="chart-tabs" />
                        </div>
                        <div className="tabs__desc">
                          <div className="tabs__title title">Aug Earning</div>
                          <div className="tabs__date caption-sm">18 July - 18 Agu</div><button className="tabs__btn btn btn_black"><svg className="icon icon-plus-square">
                              <use xlinkHref="img/sprite.svg#icon-plus-square" />
                            </svg><span className="btn__icon">Create New</span></button>
                        </div>
                      </div>
                    </div>
                    <div className="tabs__nav"><a className="tabs__link" href="#">
                        <div className="tabs__icon"><svg className="icon icon-bag">
                            <use xlinkHref="img/sprite.svg#icon-bag" />
                          </svg></div>
                        <div className="tabs__text">Trending</div>
                      </a><a className="tabs__link active" href="#">
                        <div className="tabs__icon"><svg className="icon icon-overview">
                            <use xlinkHref="img/sprite.svg#icon-overview" />
                          </svg></div>
                        <div className="tabs__text">Popular</div>
                      </a><a className="tabs__link" href="#">
                        <div className="tabs__icon"><svg className="icon icon-folder">
                            <use xlinkHref="img/sprite.svg#icon-folder" />
                          </svg></div>
                        <div className="tabs__text">Trending</div>
                      </a><a className="tabs__link" href="#">
                        <div className="tabs__icon"><svg className="icon icon-wallet">
                            <use xlinkHref="img/sprite.svg#icon-wallet" />
                          </svg></div>
                        <div className="tabs__text">Trending</div>
                      </a></div>
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

export default Schedules