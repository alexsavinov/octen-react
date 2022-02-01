import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";

const store = configureStore({
    reducer:{
        carReducer,
        // TODO: add slices for Users, Posts, Comments
    }
})

export default store
