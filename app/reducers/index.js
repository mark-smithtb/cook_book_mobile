import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ItemReducer from './ItemReducer';

export default combineReducers({
  auth: AuthReducer,
  items: ItemReducer
})
