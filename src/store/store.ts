import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./AddCarSlice";

export const store = configureStore({
    reducer: {
        addCar: carReducer
    }
})
export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;