import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.jsx";
import uiSlice from "./uiSlice.jsx";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;