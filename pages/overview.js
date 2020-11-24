import Layout from '../components/layout'

const Overview = () => {
  return (
    <>
      <Layout>
        <div className="page__wrapper">
          <div className="page__center">
            <div className="page__row page__row_head page__row_border">
              <div className="page__col">
                <div className="page__hello h5">Hi Tam Tran,</div>
                <div className="page__welcome h2">
                  Welcome back<span className="desktop-hide">👋</span>
                </div>
              </div>
              <div className="page__col">
                <div className="header">
                  <button className="header__burger" />
                  <div className="search">
                    <div className="search__field">
                      <input className="search__input" type="text" placeholder="Search" /><button className="search__toggle">
                        <svg className="icon icon-search">
                          <use xlinkHref="img/sprite.svg#icon-search" /></svg><svg className="icon icon-close">
                          <use xlinkHref="img/sprite.svg#icon-close" />
                        </svg>
                      </button>
                    </div>
                    <div className="search__result">
                      <div className="search__info caption-sm">Recent Searches</div>
                      <div className="search__list">
                        <a className="search__item" href="#">
                          <div className="search__preview bg-pink">
                            <img className="search__pic" src="img/figure-1.png" />
                          </div>
                          <div className="search__text">
                            Earning by items<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg>
                          </div> </a><a className="search__item" href="#">
                          <div className="search__preview bg-yellow">
                            <img className="search__pic" src="img/figure-4.png" />
                          </div>
                          <div className="search__text">
                            This month Statements<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg>
                          </div> </a><a className="search__item" href="#">
                          <div className="search__preview bg-blue-light">
                            <img className="search__pic" src="img/figure-3.png" />
                          </div>
                          <div className="search__text">
                            How many sales I got…<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <button className="search__btn btn btn_purple btn_wide">
                        Advance Search
                      </button>
                    </div>
                  </div>
                  <button className="header__search">
                    <svg className="icon icon-search">
                      <use xlinkHref="img/sprite.svg#icon-search" />
                    </svg>
                  </button>
                  <div className="notifications">
                    <button className="notifications__open">
                      <svg className="icon icon-bell">
                        <use xlinkHref="img/sprite.svg#icon-bell" /></svg><span className="notifications__counter">2</span>
                    </button>
                    <div className="notifications__wrap">
                      <div className="notifications__info h6">Recent Notification</div>
                      <div className="notifications__list">
                        <a className="notifications__item" href="notifications.html">
                          <div className="notifications__ava">
                            <img className="notifications__pic" src="img/ava-1.png" />
                            <div className="notifications__status bg-blue">
                              <img className="notifications__pic" src="img/chat.svg" />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Sarah Saunders
                              </div>
                              <div className="notifications__time caption">8h</div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Commented on
                              <span className="notifications__project">Collab Design</span>
                            </div>
                          </div> </a><a className="notifications__item" href="notifications.html">
                          <div className="notifications__ava">
                            <img className="notifications__pic" src="img/ava-1.png" />
                            <div className="notifications__status bg-green">
                              <img className="notifications__pic" src="img/bag.svg" />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">Glenn Greer</div>
                              <div className="notifications__time caption">12h</div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Just pushaded
                              <span className="notifications__project">Sapiens Illustration</span>
                            </div>
                          </div> </a><a className="notifications__item" href="notifications.html">
                          <div className="notifications__ava">
                            <img className="notifications__pic" src="img/ava-1.png" />
                            <div className="notifications__status bg-purple">
                              <img className="notifications__pic" src="img/message.svg" />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Sarah Saunders
                              </div>
                              <div className="notifications__time caption">14h</div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Sent you a message 📪
                            </div>
                          </div> </a><a className="notifications__item" href="notifications.html">
                          <div className="notifications__ava">
                            <img className="notifications__pic" src="img/ava-1.png" />
                            <div className="notifications__status bg-red">
                              <img className="notifications__pic" src="img/heart.svg" />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Sarah Saunders
                              </div>
                              <div className="notifications__time caption">21h</div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Liked
                              <span className="notifications__project">Folio Agency</span>
                            </div>
                          </div> </a><a className="notifications__item" href="notifications.html">
                          <div className="notifications__ava">
                            <img className="notifications__pic" src="img/ava-1.png" />
                            <div className="notifications__status bg-blue">
                              <img className="notifications__pic" src="img/chat.svg" />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Sarah Saunders
                              </div>
                              <div className="notifications__time caption">8h</div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Commented on
                              <span className="notifications__project">Collab Design</span>
                            </div>
                          </div> </a><a className="notifications__item" href="notifications.html">
                          <div className="notifications__ava">
                            <img className="notifications__pic" src="img/ava-1.png" />
                            <div className="notifications__status bg-green">
                              <img className="notifications__pic" src="img/bag.svg" />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">Glenn Greer</div>
                              <div className="notifications__time caption">12h</div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Just pushaded
                              <span className="notifications__project">Sapiens Illustration</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="notifications__btns">
                        <a className="notifications__btn btn btn_black" href="notifications.html">See all incoming activity</a>
                      </div>
                    </div>
                  </div>
                  <a className="header__user" href="#"><img className="header__pic" src="img/ava.png" /></a>
                </div>
              </div>
            </div>
            <div className="page__row page__row_border">
              <div className="page__col">
                <div className="slider">
                  <div className="slider__container">
                    <div className="slider__inner owl-carousel js-slider">
                      <div className="slider__item">
                        <div className="slider__details">
                          <div className="slider__title h5">
                            Set a Google Analytics Code
                          </div>
                          <div className="slider__text">
                            Did you know you can set a Google Analytics code for your
                            products?
                          </div>
                          <a className="slider__btn btn btn_white js-popup-open" href="#popup-settings" data-effect="mfp-zoom-in">Settings</a>
                        </div>
                        <div className="slider__preview">
                          <img className="slider__pic" src="img/slider-pic.png" />
                        </div>
                      </div>
                      <div className="slider__item">
                        <div className="slider__details">
                          <div className="slider__title h5">
                            Set a Google Analytics Code
                          </div>
                          <div className="slider__text">
                            Did you know you can set a Google Analytics code for your
                            products?
                          </div>
                          <a className="slider__btn btn btn_white js-popup-open" href="#popup-settings" data-effect="mfp-zoom-in">Settings</a>
                        </div>
                        <div className="slider__preview">
                          <img className="slider__pic" src="img/slider-pic.png" />
                        </div>
                      </div>
                      <div className="slider__item">
                        <div className="slider__details">
                          <div className="slider__title h5">
                            Set a Google Analytics Code
                          </div>
                          <div className="slider__text">
                            Did you know you can set a Google Analytics code for your
                            products?
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
                <div className="page__widgets">
                  <div className="widget widget_shadow">
                    <div className="widget__title">Earnings by item</div>
                    <div className="widget__list">
                      <a className="widget__item" href="products.html">
                        <div className="widget__preview bg-pink">
                          <img className="widget__pic" src="img/figure-1.png" />
                        </div>
                        <div className="widget__details">
                          <div className="widget__category title">
                            Bento 3D Kit<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg>
                          </div>
                          <div className="widget__info caption">Illustration</div>
                        </div> </a><a className="widget__item" href="products.html">
                        <div className="widget__preview bg-yellow">
                          <img className="widget__pic" src="img/figure-2.png" />
                        </div>
                        <div className="widget__details">
                          <div className="widget__category title">
                            Bento 3D Kit<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg>
                          </div>
                          <div className="widget__info caption">Illustration</div>
                        </div> </a><a className="widget__item" href="products.html">
                        <div className="widget__preview bg-blue-light">
                          <img className="widget__pic" src="img/figure-3.png" />
                        </div>
                        <div className="widget__details">
                          <div className="widget__category title">
                            Collab UI Kit<svg className="icon icon-arrow-right">
                              <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg>
                          </div>
                          <div className="widget__info caption">Coded Template</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="widget widget_chart widget_pink">
                    <div className="widget__title">Earnings</div>
                    <div className="widget__wrap">
                      <div className="widget__chart widget__chart_earning">
                        <div id="chart-earning" />
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
                    <div className="widget__title">Your earning this month</div>
                    <div className="widget__counter title title_md color-purple">
                      123121
                    </div>
                    <div className="widget__text">
                      Update your payout method in Settings
                    </div>
                    <a className="widget__btn btn btn_white btn_wide" href="payouts.html">Withdraw All Earnings</a>
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

export default Overview