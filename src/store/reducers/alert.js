// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    open: false,
    type: '',
    msg: ''
};

// ==============================|| SLICE - MENU ||============================== //

const alert = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        openAlert(state, action) {
            state.open = true;
            state.type = action.payload.type;
            state.msg = action.payload.msg;
        },
        closeAlert(state, action) {
            state.open = false;
            state.type = '';
            state.msg = '';
        }
    }
});

export default alert.reducer;

export const { openAlert, closeAlert } = alert.actions;
