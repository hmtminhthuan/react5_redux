import { configureStore } from "@reduxjs/toolkit";
import { arrBurger } from "./BurgerReducer";
export const store = configureStore({
    reducer: {
        buggerState: arrBurger,
    }
})