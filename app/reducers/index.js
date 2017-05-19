import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducer({
  auth: AuthReducer
})
