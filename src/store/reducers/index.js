// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import auth from './auth';
import loader from './loader';
import alert from './alert';
import post from './post';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, auth, loader, alert, post });

export default reducers;
