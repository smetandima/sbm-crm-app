import Link from 'next/link'
import MenuLink from './menu_link'
import Settings from './settings'

const Menu = () => {

  return (
    <>
      <div className="sidebar__wrapper">
          <div className="sidebar__inner">
            <Link href="/">
              <a className="sidebar__logo" >
                <img className="sidebar__pic" src="logo-sm.png" />
              </a>
            </Link>
            <div className="sidebar__list">
              <div className="sidebar__group">
                <div className="sidebar__caption caption-sm">
                  CRM<span> tools</span>
                </div>
                <div className="sidebar__menu">
                  
                  <MenuLink  href="/overview" text="Overview" icon="icon-overview" />
                  <MenuLink  href="/customers" text="Customers" icon="icon-profile" />
                  <MenuLink  href="/campaigns" text="Campaigns" icon="icon-chart" />
                  <MenuLink  href="/schedules" text="Schedules" icon="icon-discovery" />
                  <MenuLink  href="/statement" text="Statement" icon="icon-document" />

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
                  <MenuLink  href="/inbox" text="Inbox" icon="icon-message" counter="18" />
                  <MenuLink  href="/notifications" text="Notifications" icon="icon-notification" counter="2" />
                  <MenuLink  href="/comments" text="Comments" icon="icon-chat" counter="20" />
                </div>
              </div> 
            </div>
            <div className="sidebar__profile">
              <div className="sidebar__details" style={{ cursor: 'pointer' }}>
                <a className="sidebar__link">
                  <div className="sidebar__icon">
                    <svg className="icon icon-logout">
                      <use xlinkHref="img/sprite.svg#icon-logout" />
                    </svg>
                  </div>
                  <div className="sidebar__text">Log out</div>
                </a>
              </div>
              <a className="sidebar__user">
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
    </>
  )
}

export default Menu