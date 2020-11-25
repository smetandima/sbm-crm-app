import { useEffect } from 'react'
import Layout from '../components/layout'

const Comments = () => {

  return (
    <>
      <Layout>
        <div className="page__wrapper">
          <div className="page__center">
            <div className="page__row page__row_head">
              <div className="page__col">
                <div className="page__hello h5">Hi David,</div>
                <div className="page__welcome h2">Comments</div>
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
                    <div className="banner__title h3">3 comments found.</div>
                    <div className="banner__text">Create Your Product Dashboard in Minutes</div><button className="banner__btn btn btn_white">Mark all as read</button>
                  </div>
                </div>
                <div className="activity">
                  <div className="activity__row">
                    <div className="activity__col">
                      <div className="activity__container">
                        <div className="activity__title h6">Recent Activity</div>
                        <div className="activity__inner">
                          <div className="activity__variants"><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Likes</span></span></label><label className="checkbox"><input className="checkbox__input" type="checkbox" defaultChecked /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Comments</span></span></label><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Mention</span></span></label><label className="checkbox"><input className="checkbox__input" type="checkbox" defaultChecked /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Followers</span></span></label><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Mention</span></span></label><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Other</span></span></label></div>
                          <div className="activity__group">
                            <div className="activity__list">
                              <div className="activity__item active">
                                <div className="activity__ava"><img className="activity__pic" src="img/ava-4.png" />
                                  <div className="activity__status"><img className="activity__pic" src="img/chat-black.svg" /></div>
                                </div>
                                <div className="activity__details">
                                  <div className="activity__author title">Donald Franklin</div>
                                  <div className="activity__line caption">
                                    <div className="activity__category">Commented on</div>
                                    <div className="activity__info">Collab.</div>
                                    <div className="activity__time">12h</div>
                                  </div>
                                  <div className="activity__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                                </div>
                                <div className="activity__preview"><img className="activity__pic" src="img/figure-5.png" /></div>
                              </div>
                              <div className="activity__item">
                                <div className="activity__ava"><img className="activity__pic" src="img/ava-5.png" />
                                  <div className="activity__status"><img className="activity__pic" src="img/chat-black.svg" /></div>
                                </div>
                                <div className="activity__details">
                                  <div className="activity__author title">Dash</div>
                                  <div className="activity__line caption">
                                    <div className="activity__category">Commented on</div>
                                    <div className="activity__info">Sapiens.</div>
                                    <div className="activity__time">16h</div>
                                  </div>
                                  <div className="activity__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                                </div>
                                <div className="activity__preview"><img className="activity__pic" src="img/figure-5.png" /></div>
                              </div>
                              <div className="activity__item">
                                <div className="activity__ava"><img className="activity__pic" src="img/ava-4.png" />
                                  <div className="activity__status"><img className="activity__pic" src="img/chat-black.svg" /></div>
                                </div>
                                <div className="activity__details">
                                  <div className="activity__author title">Donald Franklin</div>
                                  <div className="activity__line caption">
                                    <div className="activity__category">Commented on</div>
                                    <div className="activity__info">Collab.</div>
                                    <div className="activity__time">18h</div>
                                  </div>
                                  <div className="activity__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                                </div>
                                <div className="activity__preview"><img className="activity__pic" src="img/figure-5.png" /></div>
                              </div>
                              <div className="activity__item">
                                <div className="activity__ava"><img className="activity__pic" src="img/ava-5.png" />
                                  <div className="activity__status"><img className="activity__pic" src="img/chat-black.svg" /></div>
                                </div>
                                <div className="activity__details">
                                  <div className="activity__author title">Donald Franklin</div>
                                  <div className="activity__line caption">
                                    <div className="activity__category">Commented on</div>
                                    <div className="activity__info">Collab.</div>
                                    <div className="activity__time">22h</div>
                                  </div>
                                  <div className="activity__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                                </div>
                                <div className="activity__preview"><img className="activity__pic" src="img/figure-5.png" /></div>
                              </div>
                              <div className="activity__item">
                                <div className="activity__ava"><img className="activity__pic" src="img/ava-4.png" />
                                  <div className="activity__status"><img className="activity__pic" src="img/chat-black.svg" /></div>
                                </div>
                                <div className="activity__details">
                                  <div className="activity__author title">Donald Franklin</div>
                                  <div className="activity__line caption">
                                    <div className="activity__category">Commented on</div>
                                    <div className="activity__info">Bento 1.</div>
                                    <div className="activity__time">24h</div>
                                  </div>
                                  <div className="activity__text">"Love this so much! What tools do you use to create your 3d illustrations?"</div>
                                </div>
                                <div className="activity__preview"><img className="activity__pic" src="img/figure-5.png" /></div>
                              </div>
                            </div>
                            <div className="activity__btns"><button className="activity__btn btn btn_black">Load More</button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="activity__col">
                      <div className="activity__title h6">Add a new comment</div>
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
                        </div>
                        <div className="files"><a className="files__item purple" href="#">
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
                          </a></div><button className="editor__btn btn btn_black btn_wide">Reply Comment</button>
                      </div>
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

export default Comments