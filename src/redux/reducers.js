import { combineReducers } from 'redux';
import drawerReducer from './drawer/drawerReducer';
import userReducer from './user/userReducer';
import adminReducer from './admin/adminReducer';

export default combineReducers({
  drawer: drawerReducer,
  user: userReducer,
  admin: adminReducer,
});
