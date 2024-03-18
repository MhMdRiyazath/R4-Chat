import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: false,
    reducers: {
        toggleTheme: (state) => {
            // Modify the state directly
            return !state;
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
