import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./themeSlice";
import refreshSlicer from "./refreshSlicer";

export const store = configureStore({
    reducer: {
        themeKey : themeSliceReducer,
        refreshKey : refreshSlicer,
    },
})