const Header = ({ headerClass, text }) => {
  return (<>
    <div className={headerClass}>
      <div className="page__col">
        <div className="page__hello h5">Hi David,</div>
        <div className="page__welcome h2">
          { text }
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
                    Earning by items<svg className="icon icon-arrow-right">
                      <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                    </svg>
                  </div> </a><a className="search__item" href="#">
                  <div className="search__preview bg-yellow">
                    <img className="search__pic" src="img/figure-4.png" />
                  </div>
                  <div className="search__text">
                    This month customers<svg className="icon icon-arrow-right">
                      <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                    </svg>
                  </div> </a><a className="search__item" href="#">
                  <div className="search__preview bg-blue-light">
                    <img className="search__pic" src="img/figure-3.png" />
                  </div>
                  <div className="search__text">
                    How many sales I got…<svg className="icon icon-arrow-right">
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
                <a className="notifications__item" href="notifications">
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
                  </div> </a><a className="notifications__item" href="notifications">
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
                  </div> </a><a className="notifications__item" href="notifications">
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
                  </div> </a><a className="notifications__item" href="notifications">
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
                  </div> </a><a className="notifications__item" href="notifications">
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
                  </div> </a><a className="notifications__item" href="notifications">
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
                <a className="notifications__btn btn btn_black" href="notifications">See all incoming activity</a>
              </div>
            </div>
          </div>
          <a className="header__user" href="#"><img className="header__pic" src="img/ava.png" /></a>
        </div>
      </div>
    </div>
  </>)
}

export default Header