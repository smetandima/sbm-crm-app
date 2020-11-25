import { useEffect } from 'react'
import Layout from '../components/layout'

const Inbox = () => {

  return (
    <>
      <Layout>
        <div className="page__wrapper">
          <div className="page__center">
            <div className="page__row page__row_responsive page__row_head page__row_border">
              <div className="page__col page__col_w50">
                <div className="page__hello h5">Hi David,</div>
                <div className="page__welcome h2">Your Inbox</div>
              </div>
              <div className="page__col page__col_w50">
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
              <div className="page__col page__col_w50">
                <div className="inbox">
                  <div className="sorting">
                    <div className="sorting__search"><button className="sorting__open"><svg className="icon icon-search">
                          <use xlinkHref="img/sprite.svg#icon-search" />
                        </svg></button><input className="sorting__input" type="text" placeholder="Search" /></div>
                  </div>
                  <div className="inbox__tags"><a className="inbox__tag active" href="#">Your inbox</a><a className="inbox__tag" href="#">Archives</a><a className="inbox__tag" href="#">Done</a><a className="inbox__tag" href="#">Saved</a></div>
                  <div className="inbox__container">
                    <div className="inbox__title title">Recent Messages</div>
                    <div className="inbox__list">
                      <div className="inbox__item active">
                        <div className="inbox__ava"><img className="inbox__pic" src="img/ava-2.png" /></div>
                        <div className="inbox__details">
                          <div className="inbox__head">
                            <div className="inbox__author caption">Joel Becker</div>
                            <div className="inbox__time caption">12h</div>
                          </div>
                          <div className="inbox__title title">When is the Sketch version available for download?</div>
                          <div className="inbox__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                          <div className="actions"><button className="actions__btn"><svg className="icon icon-comment">
                                <use xlinkHref="img/sprite.svg#icon-comment" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-more">
                                <use xlinkHref="img/sprite.svg#icon-more" />
                              </svg></button></div>
                        </div>
                      </div>
                      <div className="inbox__item">
                        <div className="inbox__ava"><img className="inbox__pic" src="img/ava-2.png" /></div>
                        <div className="inbox__details">
                          <div className="inbox__head">
                            <div className="inbox__author caption">Joel Becker</div>
                            <div className="inbox__time caption">12h</div>
                          </div>
                          <div className="inbox__title title">When is the Sketch version available for download?</div>
                          <div className="inbox__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                          <div className="actions"><button className="actions__btn"><svg className="icon icon-comment">
                                <use xlinkHref="img/sprite.svg#icon-comment" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-more">
                                <use xlinkHref="img/sprite.svg#icon-more" />
                              </svg></button></div>
                        </div>
                      </div>
                      <div className="inbox__item">
                        <div className="inbox__ava"><img className="inbox__pic" src="img/ava-2.png" /></div>
                        <div className="inbox__details">
                          <div className="inbox__head">
                            <div className="inbox__author caption">Joel Becker</div>
                            <div className="inbox__time caption">12h</div>
                          </div>
                          <div className="inbox__title title">When is the Sketch version available for download?</div>
                          <div className="inbox__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                          <div className="actions"><button className="actions__btn"><svg className="icon icon-comment">
                                <use xlinkHref="img/sprite.svg#icon-comment" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-more">
                                <use xlinkHref="img/sprite.svg#icon-more" />
                              </svg></button></div>
                        </div>
                      </div>
                      <div className="inbox__item">
                        <div className="inbox__ava"><img className="inbox__pic" src="img/ava-2.png" /></div>
                        <div className="inbox__details">
                          <div className="inbox__head">
                            <div className="inbox__author caption">Joel Becker</div>
                            <div className="inbox__time caption">12h</div>
                          </div>
                          <div className="inbox__title title">When is the Sketch version available for download?</div>
                          <div className="inbox__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                          <div className="actions"><button className="actions__btn"><svg className="icon icon-comment">
                                <use xlinkHref="img/sprite.svg#icon-comment" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-more">
                                <use xlinkHref="img/sprite.svg#icon-more" />
                              </svg></button></div>
                        </div>
                      </div>
                      <div className="inbox__item">
                        <div className="inbox__ava"><img className="inbox__pic" src="img/ava-2.png" /></div>
                        <div className="inbox__details">
                          <div className="inbox__head">
                            <div className="inbox__author caption">Joel Becker</div>
                            <div className="inbox__time caption">12h</div>
                          </div>
                          <div className="inbox__title title">When is the Sketch version available for download?</div>
                          <div className="inbox__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                          <div className="actions"><button className="actions__btn"><svg className="icon icon-comment">
                                <use xlinkHref="img/sprite.svg#icon-comment" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-more">
                                <use xlinkHref="img/sprite.svg#icon-more" />
                              </svg></button></div>
                        </div>
                      </div>
                      <div className="inbox__item">
                        <div className="inbox__ava"><img className="inbox__pic" src="img/ava-2.png" /></div>
                        <div className="inbox__details">
                          <div className="inbox__head">
                            <div className="inbox__author caption">Joel Becker</div>
                            <div className="inbox__time caption">12h</div>
                          </div>
                          <div className="inbox__title title">When is the Sketch version available for download?</div>
                          <div className="inbox__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                          <div className="actions"><button className="actions__btn"><svg className="icon icon-comment">
                                <use xlinkHref="img/sprite.svg#icon-comment" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star" />
                              </svg></button><button className="actions__btn"><svg className="icon icon-more">
                                <use xlinkHref="img/sprite.svg#icon-more" />
                              </svg></button></div>
                        </div>
                      </div>
                    </div>
                    <div className="inbox__foot"><button className="inbox__btn btn btn_black">Load More</button></div>
                  </div>
                </div>
              </div>
              <div className="page__col page__col_w50">
                <div className="inbox">
                  <div className="inbox__control">
                    <div className="inbox__btns"><button className="inbox__btn btn btn_purple">Delete</button><button className="inbox__btn btn btn_gray">Archive</button></div><a className="inbox__more" href="#"><svg className="icon icon-dots-border">
                        <use xlinkHref="img/sprite.svg#icon-dots-border" />
                      </svg></a>
                  </div>
                  <div className="inbox__box">
                    <div className="inbox__ava"><img className="inbox__pic" src="img/ava-2.png" /></div>
                    <div className="inbox__details">
                      <div className="inbox__head">
                        <div className="inbox__author title">Joel Becker</div>
                        <div className="inbox__time caption">12h</div>
                      </div>
                      <div className="inbox__title h5">When is the Sketch version available for download?</div>
                      <div className="inbox__text">
                        <p>Thanks! it's amazing. however, I cannot open this and 'cleverly' which was also just released by the same author, on sketch 63.1.</p>
                        <p>I get a message that says that the file cannot be opened. do you have any idea why this might be? can you upload a compatible file with this sketch version please? I'll appreciate the support. thanks in advance</p>
                      </div>
                      <div className="files">
                        <div className="files__list"><a className="files__item purple" href="#">
                            <div className="files__preview"><img className="files__pic" src="img/figure-1.png" /></div>
                            <div className="files__details">
                              <div className="files__title caption">Attachment.PNG </div>
                              <div className="files__size caption">3.6 MB</div>
                            </div>
                          </a><a className="files__item blue" href="#">
                            <div className="files__preview"><img className="files__pic" src="img/figure-5.png" /></div>
                            <div className="files__details">
                              <div className="files__title caption">Attachment.PNG </div>
                              <div className="files__size caption">3.6 MB</div>
                            </div>
                          </a></div>
                      </div>
                    </div>
                  </div>
                  <div className="editor">
                    <div className="editor__wrap">
                      <div className="editor__head">
                        <div className="editor__control"><button className="editor__action"><svg className="icon icon-editor-smile">
                              <use xlinkHref="img/sprite.svg#icon-editor-smile" />
                            </svg></button><button className="editor__action active"><svg className="icon icon-editor-bold">
                              <use xlinkHref="img/sprite.svg#icon-editor-bold" />
                            </svg></button><button className="editor__action"><svg className="icon icon-editor-italic">
                              <use xlinkHref="img/sprite.svg#icon-editor-italic" />
                            </svg></button><button className="editor__action"><svg className="icon icon-editor-pic">
                              <use xlinkHref="img/sprite.svg#icon-editor-pic" />
                            </svg></button></div><button className="editor__add" />
                      </div>
                      <div className="editor__body">
                        <div className="editor__field"><textarea className="editor__textarea" placeholder="text ..." defaultValue={""} /></div>
                        <div className="editor__gallery">
                          <div className="editor__preview"><img className="editor__pic" src="img/editor-pic-1.png" /><button className="editor__close"><svg className="icon icon-remove">
                                <use xlinkHref="img/sprite.svg#icon-remove" />
                              </svg></button></div>
                          <div className="editor__preview"><img className="editor__pic" src="img/editor-pic-2.png" /><button className="editor__close"><svg className="icon icon-remove">
                                <use xlinkHref="img/sprite.svg#icon-remove" />
                              </svg></button></div>
                        </div>
                      </div>
                    </div><button className="editor__btn btn btn_black">Send Message</button>
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

export default Inbox