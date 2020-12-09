import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import moment from 'moment'

let store

const initialState = {
  theme: 'light',
  //api_endpoint: 'https://api-sbmtec.herokuapp.com',
  api_endpoint: 'http://localhost:3001',
  loading: false,
  // Customer page 
  customers: [],
  customer_offset: 0,
  customer_period: {
    description: 'Today',
    value: 'today',
    from: moment().format('YYYY-MM-DD'),
    to: moment().format('YYYY-MM-DD')
  },
  shop: {
    description: 'All shops',
    text: 'You own 3 shops',
    value: 'all'
  }
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