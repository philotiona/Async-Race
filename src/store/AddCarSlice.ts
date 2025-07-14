import { createSlice } from "@reduxjs/toolkit";
export interface CarItem {
    name: string, 
    color: string,
    id: number | null
}
interface CarTypes {
    cars: CarItem[],
    selectedCarId: null | number
}
const initialState: CarTypes = {
    cars: [],
    selectedCarId: null
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
        },
        setSelectedCar: (state, action: {payload: number | null}) => {
            state.selectedCarId = action.payload
        },
        updateCar: (state, action: {payload: CarItem}) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars[index] = action.payload
        },
        removeCar: (state, action: {payload: number}) => {
            state.cars = state.cars.filter(cars => cars.id !== action.payload)
        }
    }
});
export const {addCar, setCars, setSelectedCar, updateCar, removeCar} = CarSlice.actions
export default CarSlice.reducer