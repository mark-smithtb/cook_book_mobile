import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password}) => {
  return dispatch => {
    fetch('https://moochit-staging.herokuapp.com/users/sign_in', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(response => {

  })
  }
}
