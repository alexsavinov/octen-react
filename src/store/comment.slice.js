import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../services";

export const getAllComments = createAsyncThunk(
    'comments/getAllComments',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const data = await commentService.getAll();
            dispatch(getAll({data}));
            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    reducers: {
        getAll: (state, action) => {
            state.comments = [...action.payload.data];
        }
    },
    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.cars = action.payload
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const commentReducer = commentSlice.reducer;
const {getAll} = commentSlice.actions;

export default commentReducer

export const commentActions = {
   getAll
}
