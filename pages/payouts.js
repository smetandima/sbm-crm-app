import { useEffect } from 'react'
import Layout from '../components/layout'

const Payouts = () => {

  return (
    <>
      <Layout>
        <div className="page__wrapper">
          <div className="page__center">
            <div className="page__row page__row_head">
              <div className="page__col">
                <div className="page__hello h5">Hi David,</div>
                <div className="page__welcome h2">Your Payouts</div>
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
            <div className="page__row">
              <div className="page__col">
                <div className="widget widget_shadow">
                  <div className="widget__title">Choose A Payment Method</div>
                  <div className="payment">
                    <div className="payment__row">
                      <div className="payment__details">
                        <div className="payment__preview bg-purple-light"><img className="payment__pic" src="img/figure-5.png" /></div>
                        <div className="payment__mail title">payout@ui8.net</div>
                        <div className="payment__info caption-sm">Your selected payout method was confirmed on Feb 24, 2019.</div>
                        <div className="payment__logo"><img className="payment__pic" src="img/paypal.png" /></div>
                      </div>
                      <div className="payment__variants"><label className="payment__label"><input className="payment__radio" type="radio" name="payment" defaultChecked /><span className="payment__in"><span className="payment__tick" /><span className="payment__desc"><span className="payment__logo"><img className="payment__pic" src="img/paypal.png" /></span><span className="payment__info caption-sm">Your Paypal account has been authorized for payouts.</span><button className="payment__btn btn btn_gray">Deauthorize</button></span></span></label><label className="payment__label"><input className="payment__radio" type="radio" name="payment" /><span className="payment__in"><span className="payment__tick" /><span className="payment__desc"><span className="payment__logo"><img className="payment__pic payment__pic_black" src="img/payoneer.png" /><img className="payment__pic payment__pic_white" src="img/payoneer-white.png" /></span></span></span></label></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page__col">
                <div className="widget widget_empty widget_stat widget_pt0 widget_responsive">
                  <div className="widget__row">
                    <div className="widget__col">
                      <div className="widget__chart widget__chart_earning-month">
                        <div id="chart-users-blue" />
                      </div>
                    </div>
                    <div className="widget__col">
                      <div className="widget__title">Your earning this month</div>
                      <div className="widget__counter title title_md color-purple">479.4</div>
                      <div className="widget__text widget__text_mb32">Update your payout method in Settings</div><button className="widget__btn btn btn_purple btn_wide">Withdraw All Earning</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page__content page__content_pt64">
              <div className="page__stat">
                <div className="page__title h6">Withdraw History</div>
                <div className="sorting">
                  <div className="sorting__row">
                    <div className="sorting__col">
                      <div className="sorting__dropdowns">
                        <div className="dropdown js-dropdown">
                          <div className="dropdown__head js-dropdown-head">Last 30 days</div>
                          <div className="dropdown__body js-dropdown-body"><a className="dropdown__item" href="#">
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
                          <div className="dropdown__body js-dropdown-body"><a className="dropdown__item" href="#">
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
                <div className="products products_history">
                  <div className="products__table">
                    <div className="products__row products__row_head">
                      <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                      <div className="products__cell">Transaction</div>
                      <div className="products__cell">Payout Method</div>
                      <div className="products__cell">Stattus</div>
                      <div className="products__cell">Date Processed</div>
                      <div className="products__cell">Fees</div>
                    </div>
                    <div className="products__row">
                      <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                      <div className="products__cell">
                        <div className="products__price title">$2,932.9</div>
                        <div className="products__transaction caption color-gray">$25.00 transaction fee</div>
                      </div>
                      <div className="products__cell">Paypal</div>
                      <div className="products__cell">
                        <div className="products__status caption bg-green">Paid</div>
                      </div>
                      <div className="products__cell color-gray">17 Aug 2020</div>
                      <div className="products__cell color-red">$3.49</div>
                    </div>
                    <div className="products__body">
                      <div className="products__bg bg-green" />
                      <div className="products__line">
                        <div className="products__col color-gray">17 Aug 2020</div>
                        <div className="products__col">Paypal</div>
                        <div className="products__col color-red">$3.49</div>
                      </div>
                    </div>
                    <div className="products__row">
                      <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                      <div className="products__cell">
                        <div className="products__price title">$2,932.9</div>
                        <div className="products__transaction caption color-gray">$25.00 transaction fee</div>
                      </div>
                      <div className="products__cell">Paypal</div>
                      <div className="products__cell">
                        <div className="products__status caption bg-green">Paid</div>
                      </div>
                      <div className="products__cell color-gray">17 Aug 2020</div>
                      <div className="products__cell color-red">$3.49</div>
                    </div>
                    <div className="products__body">
                      <div className="products__bg bg-green" />
                      <div className="products__line">
                        <div className="products__col color-gray">17 Aug 2020</div>
                        <div className="products__col">Paypal</div>
                        <div className="products__col color-red">$3.49</div>
                      </div>
                    </div>
                    <div className="products__row">
                      <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                      <div className="products__cell">
                        <div className="products__price title">$2,932.9</div>
                        <div className="products__transaction caption color-gray">$25.00 transaction fee</div>
                      </div>
                      <div className="products__cell">Paypal</div>
                      <div className="products__cell">
                        <div className="products__status caption bg-green">Paid</div>
                      </div>
                      <div className="products__cell color-gray">17 Aug 2020</div>
                      <div className="products__cell color-red">$3.49</div>
                    </div>
                    <div className="products__body">
                      <div className="products__bg bg-green" />
                      <div className="products__line">
                        <div className="products__col color-gray">17 Aug 2020</div>
                        <div className="products__col">Paypal</div>
                        <div className="products__col color-red">$3.49</div>
                      </div>
                    </div>
                    <div className="products__row">
                      <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                      <div className="products__cell">
                        <div className="products__price title">$2,932.9</div>
                        <div className="products__transaction caption color-gray">$25.00 transaction fee</div>
                      </div>
                      <div className="products__cell">Paypal</div>
                      <div className="products__cell">
                        <div className="products__status caption bg-green">Paid</div>
                      </div>
                      <div className="products__cell color-gray">17 Aug 2020</div>
                      <div className="products__cell color-red">$3.49</div>
                    </div>
                    <div className="products__body">
                      <div className="products__bg bg-green" />
                      <div className="products__line">
                        <div className="products__col color-gray">17 Aug 2020</div>
                        <div className="products__col">Paypal</div>
                        <div className="products__col color-red">$3.49</div>
                      </div>
                    </div>
                    <div className="products__row">
                      <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                      <div className="products__cell">
                        <div className="products__price title">$2,932.9</div>
                        <div className="products__transaction caption color-gray">$25.00 transaction fee</div>
                      </div>
                      <div className="products__cell">Paypal</div>
                      <div className="products__cell">
                        <div className="products__status caption bg-green">Paid</div>
                      </div>
                      <div className="products__cell color-gray">17 Aug 2020</div>
                      <div className="products__cell color-red">$3.49</div>
                    </div>
                    <div className="products__body">
                      <div className="products__bg bg-green" />
                      <div className="products__line">
                        <div className="products__col color-gray">17 Aug 2020</div>
                        <div className="products__col">Paypal</div>
                        <div className="products__col color-red">$3.49</div>
                      </div>
                    </div>
                  </div>
                  <div className="products__more"><button className="products__btn btn btn_black">Load More</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Layout>
    </>
  )
}

export default Payouts