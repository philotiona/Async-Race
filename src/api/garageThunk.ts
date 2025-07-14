import { setCars, type CarItem } from "../store/AddCarSlice"
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
export const deleteGarage = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:3000/garage/${id}`, {method: "DELETE"})
        if (!response.ok) {
            throw new Error("Failed to delete")
        }
    }catch(error) {
        console.error(error)
    }
}
export const updateGarage = async(car: CarItem) => {
    try{
        const response = await fetch(`http://localhost:3000/garage/${car.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: car.id,
                color: car.color,
                name: car.name
            })
        })
        if (!response.ok) {
            throw new Error("Failed to Update")
        }
    } catch(error) {
        console.error(error)
    }
}

export const createGarage = async (car: CarItem) => {
    try {
        const response = await fetch(`http://localhost:3000/garage`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                color: car.color,
                name: car.name
            })
        })
        if (!response.ok) {
            throw new Error("Failed to Create")
        } 
    } catch(error) {
        console.error(error)
    }
}