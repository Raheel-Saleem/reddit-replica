// third-party
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// project import
import reducers from './reducers';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
    reducer: reducers,
    middleware: [logger]
});

const { dispatch } = store;

export { store, dispatch };
