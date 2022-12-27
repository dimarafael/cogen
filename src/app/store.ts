import {configureStore} from "@reduxjs/toolkit";
import hmiReducer from '../features/hmi/hmiSlice'
import {cogenApi} from "../services/cogenApi";

export const store = configureStore({
    reducer:{
        hmi: hmiReducer,
        [cogenApi.reducerPath]: cogenApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cogenApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
