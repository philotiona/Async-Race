import { setCars } from "../store/AddCarSlice"
import type { AppDispatch } from "../store/store"

export const fetchGarage = () => async (dispatch: AppDispatch) => {
    try{
        const response = await fetch("http://localhost:3000/garage")
        const data = await response.json()
        dispatch(setCars(data))
    } catch(error) {
        console.error(error)
    }
}