import { Actions } from 'react-native-router-flux';
import {
  ITEM_UPDATE,
  ITEM_CREATE,
  ITEMS_FETCH_SUCCESS,
  ITEMS_SAVE_SUCCESS
} from './types';

export const itemsFetch = () => {
  return (dispatch, getState) => {
    const auth_key = getState().auth.user.auth_token
    console.log(auth_key)
    fetch('http://localhost:3000/v1/users/friends_feed.json', {
      method: 'GET',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${auth_key}`
      }
    })
    .then(response => {
      console.log(response)
    });
  }
}
