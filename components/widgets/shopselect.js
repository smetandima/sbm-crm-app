import { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Shopselect = () => {
  const [shop, setShop] = useState(useSelector(state => state.shop))
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'SET_SHOP',
      payload: shop
    })
  }, [shop])
  return (
    <>
      <div className={dropdownOpen ? 'dropdown js-dropdown active' : 'dropdown js-dropdown'}>
        <div className="dropdown__head js-dropdown-head" onClick={() => {
          setDropdownOpen(!dropdownOpen)
        }} >{shop.description}
        </div>

        <div className="dropdown__body js-dropdown-body">
          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setShop({
              description: 'All shops',
              text: 'You own 3 shops',
              value: 'all'
            })
          }}>
            <div className="dropdown__title title">All shops</div>
            <div className="dropdown__info caption">You own 3 shops</div>
          </div>

          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setShop({
              description: 'TEMPLE',
              text: 'MeetFresh - TEMPLE',
              value: 'TEMPLE'
            })
          }}>
            <div className="dropdown__title title">TEMPLE</div>
            <div className="dropdown__info caption">MeetFresh - TEMPLE</div>
          </div>

          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setShop({
              description: 'IRVINE',
              text: 'MeetFresh - IRVINE',
              value: 'IRVINE'
            })
          }}>
            <div className="dropdown__title title">IRVINE</div>
            <div className="dropdown__info caption">MeetFresh - IRVINE</div>
          </div>

          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setShop({
              description: 'CUPERTINO',
              text: 'MeetFresh - CUPERTINO',
              value: 'CUPERTINO'
            })
          }}>
            <div className="dropdown__title title">CUPERTINO</div>
            <div className="dropdown__info caption">MeetFresh - CUPERTINO</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shopselect