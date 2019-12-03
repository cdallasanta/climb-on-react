import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import SiteReducer from './siteReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  site: SiteReducer
});

export default rootReducer;