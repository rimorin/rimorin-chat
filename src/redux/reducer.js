import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import app from '../modules/AppState';
import chat from '../modules/chat/ChatState';
import auth from '../modules/auth/AuthState';

export default combineReducers({
  // ## Generator Reducers
  app,
  chat,
  auth
});
