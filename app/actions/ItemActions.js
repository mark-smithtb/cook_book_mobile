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

    fetch('https://moochit-staging.herokuapp.com/v1/users/friends_feed.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': auth_key
      }
    })
    .then(response => response.json())
    .then((itemList) => {
      var itemListObj = {}
      itemList.forEach(function(data){
        itemListObj[data.id] = data
      });
      dispatch({ type: ITEMS_FETCH_SUCCESS, payload: itemListObj})
    })
  }
}
