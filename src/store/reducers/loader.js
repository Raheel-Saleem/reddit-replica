// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    isLoading: false
};

// ==============================|| SLICE - MENU ||============================== //

const loader = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        startLoading(state, action) {
            state.isLoading = true;
        },

        stopLoading(state, action) {
            state.isLoading = false;
        }
    }
});

export default loader.reducer;

export const { startLoading, stopLoading } = loader.actions;
