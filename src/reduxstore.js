import reducersObject from './reducers'
import { createStore, combineReducers } from 'redux'
import { registerSimplerRedux } from 'simpler-redux'

let store

// Keep the same redux store during a hot reload
if (module.hot) {
  if (typeof module.hot.data !== 'undefined' && typeof module.hot.data.store !== 'undefined') {
    store = module.hot.data.store
  }
  // Save the store before unloading this module into module.hot.data.store
  module.hot.dispose(data => {
    data.store = store
  })
}

if (typeof store === 'undefined') {
  // TODO: Wrap your redux store with registerSimplerRedux and export it from here as shown below.
  store = registerSimplerRedux(createStore(combineReducers(reducersObject)))
}

export default store
