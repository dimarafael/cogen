import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface HmiState {
    page: number
}

const initialState: HmiState = {
    page: 0,
}

export const hmiSlice = createSlice({
    name: 'hmi',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        }
    }
})

export const {setPage} = hmiSlice.actions

export default hmiSlice.reducer

