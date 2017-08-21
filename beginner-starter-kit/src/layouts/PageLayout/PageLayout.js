import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

const PageLayout = ({ children }) => (
  <div style={{
    textAlign: 'center',
  }}
  >
    <h1>Beginner Starter Kit</h1>
    <IndexLink to="/" activeClassName="page-layout__nav-item--active" >Home</IndexLink>
    {' · '}
    <Link to="/counter" activeClassName="page-layout__nav-item--active">Counter</Link>
    <div className="page-layout__viewport">
      {children}
    </div>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}

PageLayout.defaultProps = {
  children: null,
}

export default PageLayout
