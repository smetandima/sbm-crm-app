import { useEffect, useState, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useOnClickOutside from '../../hooks/useOnClickOutside'

const Customertype = () => {
  const [customer_type, setCustomer_type] = useState(useSelector(state => state.customer_type))
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dispatch = useDispatch()
  const ref = useRef()

  useEffect(() => {
    dispatch({
      type: 'SET_CUSTOMER_TYPE',
      payload: customer_type
    })
  }, [customer_type])

  useOnClickOutside(ref, () => setDropdownOpen(false))

  return (
    <>
      <div className={dropdownOpen ? 'dropdown js-dropdown active' : 'dropdown js-dropdown'} ref={ref}>
        <div className="dropdown__head js-dropdown-head" onClick={() => {
          setDropdownOpen(!dropdownOpen)
        }} >{customer_type.description}
        </div>

        <div className="dropdown__body js-dropdown-body">
          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setCustomer_type({
              description: 'All types customers',
              value: 'all'
            })
          }}>
            <div className="dropdown__title title">All types customers</div>
            <div className="dropdown__info caption">All types of customers that visited our shops</div>
          </div>

          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setCustomer_type({
              description: 'Spoonity members',
              value: 'spoonity'
            })
          }}>
            <div className="dropdown__title title">Spoonity members</div>
            <div className="dropdown__info caption">Spoonity reward members</div>
          </div>

          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setCustomer_type({
              description: 'GF order members',
              value: 'gfo'
            })
          }}>
            <div className="dropdown__title title">GF order members</div>
            <div className="dropdown__info caption">Global food online order members</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Customertype