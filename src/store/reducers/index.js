// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import auth from './auth';
import loader from './loader';
import alert from './alert';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, auth, loader, alert });

export default reducers;
