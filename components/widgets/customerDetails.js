import { useEffect, useState, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'

const CustomerDetails = () => {

  return (
    <>
      <div className="popup mfp-hide" id="popup-customer-details">
        <div className="popup__form">
          Here goes customer details
        </div>
      </div>
    </>
  )
}

export default CustomerDetails