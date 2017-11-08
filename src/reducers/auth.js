import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from '../actions/auth'

export const initialState = {
  authenticated: false,
  user: null,
}

export default (state = initialState, action) => {
  const { payload, type } = action
  console.log('TYPE: ', type)
  switch (type) {
    // add user to state
    case SIGN_IN_SUCCESS:
      return {
        authenticated: true,
        user: payload,
      }
    // reset state
    case SIGN_OUT_SUCCESS:
    console.log('SIGN_OUT_SUCCESS BROUGHT TO REDUCER')
      return initialState
    // do nothing
    default:
      console.log('UNDEFINED BROUGHT TO REDUCER')
      return state
  }
}
