import { useEffect } from 'react'
import Layout from '../components/layout'

const Notifications = () => {

  return (
    <>
      <Layout>
        <div className="page__wrapper">
          <div className="page__center">
            <div className="page__row page__row_head page__row_responsive page__row_border">
              <div className="page__col">
                <div className="page__hello h5">Hi David,</div>
                <div className="page__welcome h2">Notifications</div>
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
            <div className="page__row page__row_responsive page__row_border">
              <div className="page__col">
                <div className="notification">
                  <div className="notification__tags"><a className="notification__tag active" href="#">Clients</a><a className="notification__tag" href="#">Products</a><a className="notification__tag" href="#">Administrator</a><a className="notification__tag" href="#">Sales</a><a className="notification__tag" href="#">Withdrawals</a></div>
                  <div className="notification__container">
                    <div className="notification__title h6">Recent Notification</div>
                    <div className="notification__list">
                      <div className="notification__item">
                        <div className="notification__ava"><img className="notification__pic" src="img/ava-1.png" />
                          <div className="notification__status bg-blue"><img className="notification__pic" src="img/chat.svg" /></div>
                        </div>
                        <div className="notification__details">
                          <div className="notification__author title">Glenn Greer</div>
                          <div className="notification__line caption">
                            <div className="notification__category">Commented on</div>
                            <div className="notification__info">Collab.</div>
                            <div className="notification__time">12h</div>
                          </div>
                          <div className="inbox__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                          <div className="actions"><button className="actions__btn"><svg className="icon icon-comment">
                                <use xlinkHref="img/sprite.svg#icon-comment" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-like">
                                <use xlinkHref="img/sprite.svg#icon-like" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-more">
                                <use xlinkHref="img/sprite.svg#icon-more" />
                              </svg></button></div>
                        </div>
                        <div className="notification__preview bg-purple-light"><img className="notification__pic" src="img/figure-1.png" /></div>
                      </div>
                      <div className="notification__item">
                        <div className="notification__ava"><img className="notification__pic" src="img/ava-1.png" />
                          <div className="notification__status bg-blue"><img className="notification__pic" src="img/chat.svg" /></div>
                        </div>
                        <div className="notification__details">
                          <div className="notification__author title">Glenn Greer</div>
                          <div className="notification__line caption">
                            <div className="notification__category">Commented on</div>
                            <div className="notification__info">Collab.</div>
                            <div className="notification__time">12h</div>
                          </div>
                          <div className="inbox__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                          <div className="actions"><button className="actions__btn"><svg className="icon icon-comment">
                                <use xlinkHref="img/sprite.svg#icon-comment" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-like">
                                <use xlinkHref="img/sprite.svg#icon-like" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-more">
                                <use xlinkHref="img/sprite.svg#icon-more" />
                              </svg></button></div>
                        </div>
                        <div className="notification__preview bg-purple-light"><img className="notification__pic" src="img/figure-1.png" /></div>
                      </div>
                      <div className="notification__item">
                        <div className="notification__ava"><img className="notification__pic" src="img/ava-2.png" />
                          <div className="notification__status bg-green"><img className="notification__pic" src="img/bag.svg" /></div>
                        </div>
                        <div className="notification__details">
                          <div className="notification__author title">Glenn Greer</div>
                          <div className="notification__line caption">
                            <div className="notification__category">Commented on</div>
                            <div className="notification__info">Unity Dashboard kit</div>
                            <div className="notification__time">8h</div>
                          </div>
                          <div className="actions"><button className="actions__btn"><svg className="icon icon-comment">
                                <use xlinkHref="img/sprite.svg#icon-comment" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-like">
                                <use xlinkHref="img/sprite.svg#icon-like" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-more">
                                <use xlinkHref="img/sprite.svg#icon-more" />
                              </svg></button></div>
                        </div>
                        <div className="notification__preview bg-yellow"><img className="notification__pic" src="img/figure-1.png" /></div>
                      </div>
                      <div className="notification__item">
                        <div className="notification__ava"><img className="notification__pic" src="img/ava-1.png" />
                          <div className="notification__status bg-red"><img className="notification__pic" src="img/heart.svg" /></div>
                        </div>
                        <div className="notification__details">
                          <div className="notification__author title">Abbie Rodriquez</div>
                          <div className="notification__line caption">
                            <div className="notification__category">liked</div>
                            <div className="notification__info">Collab.</div>
                            <div className="notification__time">18h</div>
                          </div>
                          <div className="actions"><button className="actions__btn"><svg className="icon icon-comment">
                                <use xlinkHref="img/sprite.svg#icon-comment" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-like">
                                <use xlinkHref="img/sprite.svg#icon-like" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-more">
                                <use xlinkHref="img/sprite.svg#icon-more" />
                              </svg></button></div>
                        </div>
                        <div className="notification__preview bg-blue-light"><img className="notification__pic" src="img/figure-1.png" /></div>
                      </div>
                      <div className="notification__item">
                        <div className="notification__ava"><img className="notification__pic" src="img/ava-1.png" />
                          <div className="notification__status bg-blue"><img className="notification__pic" src="img/chat.svg" /></div>
                        </div>
                        <div className="notification__details">
                          <div className="notification__author title">Glenn Greer</div>
                          <div className="notification__line caption">
                            <div className="notification__category">Mention you on</div>
                            <div className="notification__info">Collab.</div>
                            <div className="notification__time">18h</div>
                          </div>
                          <div className="notification__text">Put the comment lines here</div>
                          <div className="actions"><button className="actions__btn"><svg className="icon icon-comment">
                                <use xlinkHref="img/sprite.svg#icon-comment" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-like">
                                <use xlinkHref="img/sprite.svg#icon-like" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-more">
                                <use xlinkHref="img/sprite.svg#icon-more" />
                              </svg></button></div>
                        </div>
                        <div className="notification__preview bg-purple-light"><img className="notification__pic" src="img/figure-1.png" /></div>
                      </div>
                    </div>
                    <div className="notification__btns"><button className="notification__btn btn btn_black">Load More</button></div>
                  </div>
                </div>
              </div>
              <div className="page__col">
                <div className="filters">
                  <div className="filters__container">
                    <div className="filters__item">
                      <div className="filters__title h6">Filter</div>
                      <div className="filters__variants"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Likes</span></span></label><label className="checkbox"><input className="checkbox__input" type="checkbox" defaultChecked /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Comments</span></span></label><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Mention</span></span></label><label className="checkbox"><input className="checkbox__input" type="checkbox" defaultChecked /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Followers</span></span></label><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Mention</span></span></label><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Other</span></span></label></div>
                      <div className="filters__btns"><button className="filters__btn btn btn_purple">Unselect all</button><button className="filters__btn btn btn_white">Select All</button></div>
                    </div>
                    <div className="filters__item">
                      <div className="filters__title h6">From</div>
                      <div className="filters__line"><label className="radio"><input className="radio__input" type="radio" name="radio" defaultChecked /><span className="radio__in"><span className="radio__tick" /><span className="radio__text">Followers</span></span></label><label className="radio"><input className="radio__input" type="radio" name="radio" /><span className="radio__in"><span className="radio__tick" /><span className="radio__text">Everyone</span></span></label></div><a className="filters__reset" href="#">Reset all filters</a>
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

export default Notifications