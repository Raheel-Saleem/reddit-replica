// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    community_name: '',
    description: '',
    post_id: -1,
    post_name: '',
    posted_time: '',
    total_likes: 0,
    username: ''
};

// ==============================|| SLICE - MENU ||============================== //

const post = createSlice({
    name: 'post',
    initialState,
    reducers: {
        selectedPost(state, action) {
            state.community_name = action.payload.community_name;
            state.description = action.payload.description;
            state.post_id = action.payload.post_id;
            state.post_name = action.payload.post_name;
            state.posted_time = action.payload.posted_time;
            state.total_likes = action.payload.total_likes;
            state.username = action.payload.username;
            // state = action.payload;
        },
        setToInitial(state, action) {
            state = initialState;
        }
    }
});

export default post.reducer;

export const { selectedPost, setToInitial } = post.actions;
