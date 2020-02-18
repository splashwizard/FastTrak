import { combineReducers } from 'redux';
import alert from './alert'
import auth from './auth';
import users from './users'
import vehicles from './vehicles'
import userVehicles from './userVehicles'
export default combineReducers({
    alert, auth, users, vehicles, userVehicles
})