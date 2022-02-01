import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const createCar = createAsyncThunk(
    'cars/createCar',
    async ({data: newCar}, {dispatch}) => {
        try {
            const data = await carService.create(newCar);
            dispatch(addCar({data}));
        } catch (e) {

        }
    }
)

export const updateCarById = createAsyncThunk(
    'cars/updateCarById',
    async ({id, car}, {dispatch}) => {
        try {
            const newCar = await carService.updateById(id, car);
            dispatch(updateCar({car: newCar}));
        } catch (e) {

        }
    }
)

export const deleteCarById = createAsyncThunk(
    'cars/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}))
        } catch (e) {

        }
    }
)

const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        status: null,
        carForUpdate: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        },
        carToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;
        },
        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.car.id);
            state.cars[index] = action.payload.car;
            state.carForUpdate = null;
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const carReducer = carSlice.reducer;
const {addCar, deleteCar, carToUpdate, updateCar} = carSlice.actions;

export default carReducer

export const carActions = {
    addCar, deleteCar, carToUpdate, updateCar
}

