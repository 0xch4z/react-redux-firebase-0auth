import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { signInWithGoogle, signInWithGithub, signInWithFacebook } from '../actions/auth'

const mapDispatchToProps = dispatch => {
  return ({ signInWithGoogle: () => dispatch(signInWithGoogle()) })
}

const SignInPage = ({ signInWithGoogle, signInWithFacebook, signInWithGithub }) => (
  <div>
    <button
      type="button"
      onClick={signInWithGoogle}
    >
      Sign in with Google
    </button>
    <button
      type="button"
      onClick={signInWithGithub}
    >
      Sign in with Github
    </button>
    <button
      type="button"
      onClick={signInWithFacebook}
    >
      Sign in with Facebook
    </button>
  </div>
)

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignInPage)
)
