import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import SignInPage from './pages/sign-in'
import { getAuth, isAuthenticated } from './selectors'

const mapStateToProps = state => ({
  auth: state.auth,
})

const App = (props) => {
  const { user, authenticated } = props.auth
  return (
    <div>
      <SignInPage />
      <h1>
        { authenticated ?
          `Hey there, ${user.displayName}!` : 'Please login'
        }
      </h1>
    </div>
  )
}

export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(App)
)
