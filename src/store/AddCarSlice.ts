import { createSlice } from "@reduxjs/toolkit";
export interface CarItem {
    name: string, 
    color: string,
    id: number
}
interface CarTypes {
    cars: CarItem[]
}
const initialState: CarTypes = {
    cars: []
} 
const CarSlice = createSlice({
    name: "addCar",
    initialState,
    reducers: {
        addCar: (state, action: {payload: CarItem}) => {
            state.cars.push(action.payload)
        },
        setCars: (state, action:{payload: CarItem[]}) => {
            state.cars = action.payload
        }
    }
});
export const {addCar, setCars} = CarSlice.actions
export default CarSlice.reducer