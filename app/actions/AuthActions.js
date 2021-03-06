import { Actions } from 'react-native-router-flux';
import {UrbanAirship} from 'urbanairship-react-native';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types'

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
  return (dispatch, getState) => {
    dispatch({type: LOGIN_USER})
    fetch('https://moochit-staging.herokuapp.com/v1/users/sessions.json', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.toLowerCase(),
      password: password
    })
  })
  .then(response => response.json())
  .then(user => loginUserSuccess(dispatch, user))


  }
}

const loginUserSuccess = (dispatch, user) => {
  // var channelId = UrbanAirship.getChannelId().then(channelId => {
  //   console.log('Channel: ', channelId);
  // });

    dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
  Actions.main();
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}
