/* eslint global-require: "off" */
import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
// ========================================================
// CSS Library Initializtion
// ========================================================
import 'normalize.css'

import createStore from './store/createStore'
import './styles/main.scss'

// ========================================================
// Store Instantiation
// ========================================================
const store = createStore(window.__INITIAL_STATE__)

// ========================================================
// History Instantiation
// ========================================================
const history = syncHistoryWithStore(browserHistory, store)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./components/App').default
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <App store={store} routes={routes} history={history} />,
    MOUNT_NODE,
  )
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    render = () => {
      try {
        renderApp()
      } catch (e) {
        renderError(e)
      }
    }

    // Setup hot module replacement
    module.hot.accept([
      './components/App',
      './routes/index',
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      }),
    )
  }
}

// ========================================================
// Go!
// ========================================================
if (!__TEST__) render()
