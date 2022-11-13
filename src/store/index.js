// third-party
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
// project import
import reducers from './reducers';
import storage from 'redux-persist/lib/storage';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [logger]
});

const { dispatch } = store;

export { store, dispatch };

export const persistor = persistStore(store);
