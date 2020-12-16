import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import moment from 'moment'

let store

const initialState = {
  theme: 'light',
  api_endpoint: 'https://api-sbmtec.herokuapp.com',
  //api_endpoint: 'http://localhost:3001',
  loading: false,
  // Customer page 
  customers: [],
  customer_offset: 0,
  customer_period: {
    description: 'Yesterday',
    value: 'yesterday',
    from: moment().subtract(1, 'days').format('YYYY-MM-DD'),
    to: moment().subtract(1, 'days').format('YYYY-MM-DD')
  },
  shop: {
    description: 'All shops',
    text: 'You own 3 shops',
    value: ['TEMPLE', 'CUPERTINO', 'IRVINE']
  },
  customer_type: {
    description: 'All types customers',
    value: 'all'
  },
  // Overview page 

  visit_count: [],
  visit_count_compare: [],
  all_time_visit_count: [],
  all_customer_count: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_THEME': 
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark'
      }
    case 'TOGGLE_LOADING': 
      return {
        ...state,
        loading: action.payload
      }
    case 'SET_CUSTOMERS': 
      return {
        ...state,
        customers: [...action.payload]
      }
    case 'SET_CUSTOMER_OFFSET': 
      return {
        ...state,
        customer_offset: action.payload
      }
    case 'SET_CUSTOMER_PERIOD': 
      return {
        ...state,
        customer_period: action.payload
      }
    case 'SET_SHOP': 
      return {
        ...state,
        shop: action.payload
      }
    case 'SET_CUSTOMER_TYPE': 
      return {
        ...state,
        customer_type: action.payload
      }
    case 'SET_VISIT_COUNT': 
      return {
        ...state,
        visit_count: [...action.payload]
      }
    case 'SET_VISIT_COUNT_COMPARE': 
      return {
        ...state,
        visit_count_compare: [...action.payload]
      }
    case 'SET_ALL_TIME_VISIT_COUNT': 
      return {
        ...state,
        all_time_visit_count: [...action.payload]
      }
    case 'SET_ALL_CUSTOMER_COUNT': 
      return {
        ...state,
        all_customer_count: [...action.payload]
      }
    default: 
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)
  
  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}