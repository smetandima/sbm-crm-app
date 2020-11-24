
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__top">
          <button className="sidebar__close">
            <svg className="icon icon-close">
              <use xlinkHref="img/sprite.svg#icon-close" />
            </svg></button><a className="sidebar__logo" href="index.html"><img className="sidebar__pic sidebar__pic_black" src="logo-dark.png" /><img className="sidebar__pic sidebar__pic_white" src="logo-white.png" /></a><button className="sidebar__burger" />
        </div>
        <div className="sidebar__wrapper">
          <div className="sidebar__inner">
            <a className="sidebar__logo" href="index.html">
              <img className="sidebar__pic" src="logo-sm.png" />
            </a>
            <div className="sidebar__list">
              <div className="sidebar__group">
                <div className="sidebar__caption caption-sm">
                  CRM<span> tools</span>
                </div>
                <div className="sidebar__menu">
                  <a className="sidebar__item active" href="index.html">
                    <div className="sidebar__icon">
                      <svg className="icon icon-overview">
                        <use xlinkHref="img/sprite.svg#icon-overview" />
                      </svg>
                    </div>
                    <div className="sidebar__text">Overview</div> 
                  </a>
                  <a className="sidebar__item" href="products.html">
                    <div className="sidebar__icon">
                      <svg className="icon icon-bag">
                        <use xlinkHref="img/sprite.svg#icon-bag" />
                      </svg>
                    </div>
                    <div className="sidebar__text">Products</div> 
                  </a>
                  <a className="sidebar__item" href="campaigns.html">
                    <div className="sidebar__icon">
                      <svg className="icon icon-chart">
                        <use xlinkHref="img/sprite.svg#icon-chart" />
                      </svg>
                    </div>
                    <div className="sidebar__text">Campaigns</div> 
                  </a>
                  <a className="sidebar__item" href="schedules.html">
                    <div className="sidebar__icon">
                      <svg className="icon icon-discovery">
                        <use xlinkHref="img/sprite.svg#icon-discovery" />
                      </svg>
                    </div>
                    <div className="sidebar__text">Schedules</div> 
                  </a>
                  <a className="sidebar__item" href="payouts.html">
                    <div className="sidebar__icon">
                      <svg className="icon icon-wallet">
                        <use xlinkHref="img/sprite.svg#icon-wallet" />
                      </svg>
                    </div>
                    <div className="sidebar__text">Payouts</div> 
                  </a>
                  <a className="sidebar__item" href="statement.html">
                    <div className="sidebar__icon">
                      <svg className="icon icon-document">
                        <use xlinkHref="img/sprite.svg#icon-document" />
                      </svg>
                    </div>
                    <div className="sidebar__text">Statements</div> 
                  </a>
                  <a className="sidebar__item js-popup-open" href="#popup-settings" data-effect="mfp-zoom-in">
                    <div className="sidebar__icon">
                      <svg className="icon icon-settings">
                        <use xlinkHref="img/sprite.svg#icon-settings" />
                      </svg>
                    </div>
                    <div className="sidebar__text">Settings</div>
                  </a>
                </div>
              </div>
              <div className="sidebar__group">
                <div className="sidebar__caption caption-sm">Marketing</div>
                <div className="sidebar__menu">
                  <a className="sidebar__item" href="inbox.html">
                    <div className="sidebar__icon">
                      <svg className="icon icon-message">
                        <use xlinkHref="img/sprite.svg#icon-message" />
                      </svg>
                    </div>
                    <div className="sidebar__text">Inbox</div>
                    <div className="sidebar__counter">18</div> 
                  </a>
                  <a className="sidebar__item" href="notifications.html">
                    <div className="sidebar__icon">
                      <svg className="icon icon-notification">
                        <use xlinkHref="img/sprite.svg#icon-notification" />
                      </svg>
                    </div>
                    <div className="sidebar__text">Notifications</div>
                    <div className="sidebar__counter">2</div> 
                  </a>
                  <a className="sidebar__item" href="comments.html">
                    <div className="sidebar__icon">
                      <svg className="icon icon-chat">
                        <use xlinkHref="img/sprite.svg#icon-chat" />
                      </svg>
                    </div>
                    <div className="sidebar__text">Comments</div>
                    <div className="sidebar__counter">20</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="sidebar__profile">
              <div className="sidebar__details">
                <a className="sidebar__link" href="#">
                  <div className="sidebar__icon">
                    <svg className="icon icon-logout">
                      <use xlinkHref="img/sprite.svg#icon-logout" />
                    </svg>
                  </div>
                  <div className="sidebar__text">Log out</div>
                </a>
              </div>
              <a className="sidebar__user" href="#">
                <div className="sidebar__ava">
                  <img className="sidebar__pic" src="img/ava.png" />
                </div>
                <div className="sidebar__desc">
                  <div className="sidebar__man">David</div>
                  <div className="sidebar__status caption">Super administrator</div>
                </div>
                <div className="sidebar__arrow">
                  <svg className="icon icon-arrows">
                    <use xlinkHref="img/sprite.svg#icon-arrows" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar__bottom">
          <label className="switch switch_theme js-switch-theme"><input className="switch__input" type="checkbox" /><span className="switch__in"><span className="switch__box" /><span className="switch__icon"><svg className="icon icon-moon">
          <use xlinkHref="img/sprite.svg#icon-moon" /></svg><svg className="icon icon-sun">
          <use xlinkHref="img/sprite.svg#icon-sun" /></svg></span></span></label>
        </div>
      </div>
    </>
  )
}

export default Sidebar