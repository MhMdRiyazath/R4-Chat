import {createSlice} from '@reduxjs/toolkit';

export const refreshSlice = createSlice({
    name: 'refresh',
    initialState: false,
    reducers: {
        toggleRefresh: (state) => {
            // Modify the state directly
            return !state;
        }
    }
})


export const {toggleRefresh} = refreshSlice.actions;
export default refreshSlice.reducer;