import React from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={this.props.history}>
            {this.props.routes}
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
