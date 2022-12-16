import {configureStore} from "@reduxjs/toolkit";
import hmiReducer from '../features/hmi/hmiSlice'

export const store = configureStore({
    reducer:{
        hmi: hmiReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
