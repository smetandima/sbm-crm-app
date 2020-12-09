import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

const Daterange = () => {
  const [period, setPeriod] = useState(useSelector(state => state.customer_period))
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'SET_CUSTOMER_PERIOD',
      payload: period
    })
  }, [period])
  return (
    <>
      <div className={dropdownOpen ? 'dropdown js-dropdown active' : 'dropdown js-dropdown'}>
        <div className="dropdown__head js-dropdown-head" onClick={() => {
          setDropdownOpen(!dropdownOpen)
        }} >{period.description}</div>
        <div className="dropdown__body js-dropdown-body">
          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setPeriod({
              description: 'Today',
              value: 'today',
              from: moment().format('YYYY-MM-DD'),
              to: moment().format('YYYY-MM-DD')
            })
          }}>
            <div className="dropdown__title title">Today</div>
            <div className="dropdown__info caption">{moment().format('DD, MMM YYYY')}</div>
          </div>
          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setPeriod({
              description: 'Yesterday',
              value: 'yesterday',
              from: moment().subtract(1, 'days').format('YYYY-MM-DD'),
              to: moment().subtract(1, 'days').format('YYYY-MM-DD')
            })
          }}>
            <div className="dropdown__title title">Yesterday</div>
            <div className="dropdown__info caption">{moment().subtract(1, 'days').format('DD, MMM YYYY')}</div>
          </div>
          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setPeriod({
              description: 'This week',
              value: 'this_week',
              from: moment().startOf('week').format('YYYY-MM-DD'),
              to: moment().endOf('week').format('YYYY-MM-DD')
            })
          }}>
            <div className="dropdown__title title">This week</div>
            <div className="dropdown__info caption">{moment().startOf('week').format('DD, MMM YYYY')} ~ {moment().endOf('week').format('DD, MMM YYYY')}</div>
          </div>
          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setPeriod({
              description: 'Last week',
              value: 'last_week',
              from: moment().subtract(1, 'weeks').startOf('week').format('YYYY-MM-DD'),
              to: moment().subtract(1, 'weeks').endOf('week').format('YYYY-MM-DD')
            })
          }}>
            <div className="dropdown__title title">Last week</div>
            <div className="dropdown__info caption">{moment().subtract(1, 'weeks').startOf('week').format('DD, MMM YYYY')} ~ {moment().subtract(1, 'weeks').endOf('week').format('DD, MMM YYYY')}</div>
          </div>
          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setPeriod({
              description: 'This month',
              value: 'this_month',
              from: moment().startOf('month').format('YYYY-MM-DD'),
              to: moment().endOf('month').format('YYYY-MM-DD')
            })
          }}>
            <div className="dropdown__title title">This month</div>
            <div className="dropdown__info caption">{moment().startOf('month').format('DD, MMM YYYY')} ~ {moment().endOf('month').format('DD, MMM YYYY')}</div>
          </div>
          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setPeriod({
              description: 'Last month',
              value: 'last_month',
              from: moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD'),
              to: moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD')
            })
          }}>
            <div className="dropdown__title title">Last month</div>
            <div className="dropdown__info caption">{moment().subtract(1, 'months').startOf('month').format('DD, MMM YYYY')} ~ {moment().subtract(1, 'months').endOf('month').format('DD, MMM YYYY')}</div>
          </div>
          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setPeriod({
              description: 'Last 30 days',
              value: 'last_30_days',
              from: moment().subtract(30, 'days').format('YYYY-MM-DD'),
              to: moment().format('YYYY-MM-DD')
            })
          }}>
            <div className="dropdown__title title">Last 30 days</div>
            <div className="dropdown__info caption">{moment().subtract(30, 'days').format('DD, MMM YYYY')} ~ {moment().format('DD, MMM YYYY')}</div>
          </div>
          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setPeriod({
              description: 'This year',
              value: 'this_year',
              from: moment().startOf('year').format('YYYY-MM-DD'),
              to: moment().endOf('year').format('YYYY-MM-DD')
            })
          }}>
            <div className="dropdown__title title">This year</div>
            <div className="dropdown__info caption">{moment().startOf('year').format('DD, MMM YYYY')} ~ {moment().endOf('year').format('DD, MMM YYYY')}</div>
          </div>
          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setPeriod({
              description: 'Last year',
              value: 'last_year',
              from: moment().subtract(1, 'years').startOf('year').format('YYYY-MM-DD'),
              to: moment().subtract(1, 'years').endOf('year').format('YYYY-MM-DD')
            })
          }}>
            <div className="dropdown__title title">Last year</div>
            <div className="dropdown__info caption">{moment().subtract(1, 'years').startOf('year').format('DD, MMM YYYY')} ~ {moment().subtract(1, 'years').endOf('year').format('DD, MMM YYYY')}</div>
          </div>
          <div className="dropdown__item" onClick={() => {
            setDropdownOpen(false)
            setPeriod({
              description: 'All time',
              value: 'all_time',
              from: moment().subtract(3, 'years').startOf('year').format('YYYY-MM-DD'),
              to: moment().endOf('year').format('YYYY-MM-DD')
            })
          }}>
            <div className="dropdown__title title">All time</div>
            <div className="dropdown__info caption">This might take a lot of time to process</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Daterange