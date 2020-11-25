import { useEffect } from 'react'
import Layout from '../components/layout'

const Statement = () => {

  return (
    <>
      <Layout>
        <div className="page__wrapper">
          <div className="page__center">
            <div className="page__row page__row_head page__row_border">
              <div className="page__col">
                <div className="page__hello h5">Hi David,</div>
                <div className="page__welcome page__welcome_sm h2">Earnings Report</div>
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
            <div className="page__row page__row_border">
              <div className="page__col">
                <div className="details details_statements">
                  <div className="details__container">
                    <div className="details__title h6 mobile-hide">Earnings Report</div>
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
                    <div className="details__row">
                      <div className="details__col">
                        <div className="details__top">
                          <div className="details__number h1">$586</div><a className="details__line" href="#">
                            <div className="details__preview"><img className="details__pic" src="img/details-pic-1.png" /></div>
                            <div className="details__info caption-sm">Your total earnings</div>
                          </a>
                        </div>
                        <div className="details__bottom">
                          <div className="details__statistics">
                            <div className="details__chart details__chart_activity">
                              <div id="chart-active-users" />
                            </div>
                            <div className="details__status">
                              <div className="details__icon bg-green"><svg className="icon icon-arrow-up-fat">
                                  <use xlinkHref="img/sprite.svg#icon-arrow-up-fat" />
                                </svg></div>
                              <div className="details__percent caption-sm color-green">6%</div>
                            </div>
                          </div>
                          <div className="details__info caption-sm">Update your payout method in Settings</div>
                        </div>
                      </div>
                      <div className="details__col">
                        <div className="details__chart details__chart_report">
                          <div id="chart-report" />
                        </div>
                      </div>
                    </div>
                    <div className="details__list details__list_three">
                      <div className="details__item">
                        <div className="details__head">
                          <div className="details__preview bg-purple"><img className="details__pic" src="img/folder.svg" /></div>
                          <div className="details__text caption-sm">Total Earnings</div>
                        </div>
                        <div className="details__counter h4">$586.75</div>
                        <div className="details__indicator">
                          <div className="details__progress bg-purple" style={{width: '55%'}} />
                        </div>
                      </div>
                      <div className="details__item">
                        <div className="details__head">
                          <div className="details__preview bg-pink"><img className="details__pic" src="img/activity.svg" /></div>
                          <div className="details__text caption-sm">Item Earnings</div>
                        </div>
                        <div className="details__counter h4">$425.94</div>
                        <div className="details__indicator">
                          <div className="details__progress bg-pink" style={{width: '52%'}} />
                        </div>
                      </div>
                      <div className="details__item">
                        <div className="details__head">
                          <div className="details__preview bg-blue"><img className="details__pic" src="img/bag.svg" /></div>
                          <div className="details__text caption-sm">Tax withheld</div>
                        </div>
                        <div className="details__counter h4">$25.94</div>
                        <div className="details__indicator">
                          <div className="details__progress bg-blue" style={{width: '55%'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page__nav mobile-hide"><a className="page__link active" href="#">Last 30 Days</a><a className="page__link" href="#">Aug 2020</a><a className="page__link" href="#">Jul 2020</a></div>
                <div className="page__stat page__stat_sm">
                  <div className="sorting mobile-show">
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
                          <div className="sorting__actions"><button className="sorting__action"><svg className="icon icon-print">
                                <use xlinkHref="img/sprite.svg#icon-print" />
                              </svg></button><button className="sorting__action"><svg className="icon icon-download-fat">
                                <use xlinkHref="img/sprite.svg#icon-download-fat" />
                              </svg></button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sorting mobile-hide">
                    <div className="sorting__actions"><button className="sorting__action"><svg className="icon icon-print">
                          <use xlinkHref="img/sprite.svg#icon-print" />
                        </svg></button><button className="sorting__action"><svg className="icon icon-download-fat">
                          <use xlinkHref="img/sprite.svg#icon-download-fat" />
                        </svg></button></div>
                  </div>
                  <div className="products products_statement">
                    <div className="products__title h6 mobile-hide">Statement</div>
                    <div className="products__info caption mobile-hide">Please note: Transactions are based Time in California, USA.</div>
                    <div className="products__table">
                      <div className="products__row products__row_head">
                        <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                        <div className="products__cell">Date</div>
                        <div className="products__cell">Order ID</div>
                        <div className="products__cell">Amount</div>
                        <div className="products__cell">Price</div>
                        <div className="products__cell text-right">Type</div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                        <div className="products__cell color-gray">17 Aug 2020</div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">Sale</div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">17 Aug 2020</div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                        <div className="products__cell color-gray">17 Aug 2020</div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">Sale</div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">17 Aug 2020</div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                        <div className="products__cell color-gray">17 Aug 2020</div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">Sale</div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">17 Aug 2020</div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                        <div className="products__cell color-gray">17 Aug 2020</div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">Sale</div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">17 Aug 2020</div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                        <div className="products__cell color-gray">17 Aug 2020</div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">Sale</div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">17 Aug 2020</div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                        <div className="products__cell color-gray">17 Aug 2020</div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">Sale</div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">17 Aug 2020</div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /></span></label></div>
                        <div className="products__cell color-gray">17 Aug 2020</div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">Sale</div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">17 Aug 2020</div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="products__more"><button className="products__btn btn btn_black">Load More</button></div>
                  </div>
                </div>
              </div>
              <div className="page__col">
                <div className="page__group">
                  <div className="widget widget_stat widget_shadow widget_after">
                    <div className="widget__chart widget__chart_items">
                      <div id="chart-earnings-by-item" />
                    </div>
                    <div className="widget__title">Earnings By Item</div>
                    <div className="widget__counter title title_md">479.4</div>
                    <div className="widget__text widget__text_mb40">Update your payout method in Settings</div>
                    <div className="widget__legend">
                      <div className="widget__color">
                        <div className="widget__bg" style={{background: '#6C5DD3'}} />
                        <div className="widget__text">Templates</div>
                      </div>
                      <div className="widget__color">
                        <div className="widget__bg" style={{background: '#FFA2C0'}} />
                        <div className="widget__text">Themes</div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget_shadow widget_after">
                    <div className="widget__title mr-auto">Your Top Items</div>
                    <div className="quality quality_big">
                      <div className="quality__list"><a className="quality__item" href="#">
                          <div className="quality__preview bg-pink-opacity"><img className="quality__pic" src="img/figure-1.png" /></div>
                          <div className="quality__details">
                            <div className="quality__category title">Unity UI Kit<svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg></div>
                            <div className="quality__info caption-sm">UI Design</div>
                            <div className="quality__money caption">$64</div>
                          </div>
                        </a><a className="quality__item" href="#">
                          <div className="quality__preview bg-pink-opacity"><img className="quality__pic" src="img/figure-2.png" /></div>
                          <div className="quality__details">
                            <div className="quality__category title">Unity UI Kit<svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg></div>
                            <div className="quality__info caption-sm">UI Design</div>
                            <div className="quality__money caption">$64</div>
                          </div>
                        </a><a className="quality__item" href="#">
                          <div className="quality__preview bg-blue-light"><img className="quality__pic" src="img/figure-6.png" /></div>
                          <div className="quality__details">
                            <div className="quality__category title">Unity UI Kit<svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg></div>
                            <div className="quality__info caption-sm">UI Design</div>
                            <div className="quality__money caption">$64</div>
                          </div>
                        </a><a className="quality__item" href="#">
                          <div className="quality__preview bg-yellow"><img className="quality__pic" src="img/figure-4.png" /></div>
                          <div className="quality__details">
                            <div className="quality__category title">Unity UI Kit<svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                              </svg></div>
                            <div className="quality__info caption-sm">UI Design</div>
                    <div className="quality__money caption">$64</div>
                  </div>
                </a></div><button className="quality__btn btn btn_black btn_wide">Show all report</button>
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

export default Statement