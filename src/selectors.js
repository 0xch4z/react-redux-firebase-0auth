import { createSelector } from 'reselect'

export const isAuthenticated = state => (
  getAuth(state).authenticated
)

export const getAuth = createSelector(
  state => state.auth,
  auth => auth.toJS()
)
