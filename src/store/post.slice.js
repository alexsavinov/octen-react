import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../services";

export const getAllPosts = createAsyncThunk(
    'users/getAllPosts',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const data = await postService.getAll();
            dispatch(getAll({data}));
            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    reducers: {
        getAll: (state, action) => {
            state.posts = [...action.payload.data];
        }
    },
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.cars = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const postReducer = postSlice.reducer;
const {getAll} = postSlice.actions;

export default postReducer

export const postActions = {
   getAll
}
