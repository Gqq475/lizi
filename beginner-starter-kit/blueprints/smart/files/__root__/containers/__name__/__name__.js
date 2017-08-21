import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const propTypes = {

}

export class <%= pascalEntityName %> extends Component {xw
  render() {
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

<%= pascalEntityName %>.propTypes = propTypes

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>)
