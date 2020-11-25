import { useRouter } from 'next/router'
import Link from 'next/link'

const MenuLink = ({ href, text, icon, counter }) => {
  const { pathname } = useRouter()
  const isActive = pathname === href
  
  return (
    <>
      <Link href={ href }>
        <a className={ isActive ? 'sidebar__item active' : 'sidebar__item' }>
          <div className="sidebar__icon">
            <svg className={ 'icon ' + icon }>
              <use xlinkHref={ 'img/sprite.svg#' + icon } />
            </svg>
          </div>
          <div className="sidebar__text">{ text }</div> 
          { counter ? <div className="sidebar__counter">{ counter }</div> : '' }
        </a>
      </Link>
    </>
  )
}

export default MenuLink