import { combineReducers } from 'redux';

import auth from "./Auth";
import data from './Data';

export default combineReducers({
  auth, data
});