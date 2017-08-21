/* eslint no-param-reassign: "off" */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Login from './loginReducer'
export const makeRootReducer = asyncReducers => combineReducers({
  routing: routerReducer,
  ...asyncReducers,
  Login
})

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}
