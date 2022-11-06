// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    email: '',
    isAuthenticated: null,
    user_id: null,
    username: '',
    isLoggedIn: false
};

// ==============================|| SLICE - MENU ||============================== //

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onLogin(state, action) {
            let { email, isAuthenticated, user_id, username, isLoggedIn } = action.payload;
            state.email = email;
            state.isAuthenticated = isAuthenticated;
            state.user_id = user_id;
            state.username = username;
            state.isLoggedIn = isLoggedIn;
        },
        onLogout(state, action) {
            state.email = null;
            state.isAuthenticated = null;
            state.user_id = null;
            state.username = null;
            state.isLoggedIn = false;
        },
        setAuthenticate(state, action) {
            state.isAuthenticated = true;
            state.isLoggedIn = true;
        }
    }
});

export default auth.reducer;

export const { onLogin, onLogout, setAuthenticate } = auth.actions;
