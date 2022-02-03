import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services";

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const data = await userService.getAll();
            dispatch(getAll({data}));
            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    reducers: {
        getAll: (state, action) => {
            state.users = [...action.payload.data];
        }
    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.cars = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const userReducer = userSlice.reducer;
const {getAll} = userSlice.actions;

export default userReducer

export const userActions = {
   getAll
}
