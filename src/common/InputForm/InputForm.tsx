import { useState, type FormEvent, type ReactNode } from "react";
import styles from "./InputForm.module.css"
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addCar, updateCar } from "../../store/AddCarSlice";
import type { RootState } from "../../store/store";
import { createGarage, updateGarage } from "../../api/garageThunk";
interface PropTypes {
    textButton: string
}

export default function InputForm({textButton}: PropTypes): ReactNode {
    const dispatch = useDispatch();
    const [car, setCar] = useState<string>("")
    const [newColor, setColor] = useState<string>("")
    const carSelector = useSelector((state: RootState) => state.addCar.cars)
    const maxId = Math.max(...carSelector.map(item => item.id ?? 0), 0) + 1

    const carId = useSelector((state: RootState) => state.addCar.selectedCarId)

    const handleSubmitCreate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addCar({
            name: car,
            color: newColor,
            id: null
        }))
        await createGarage({id: maxId, color: newColor, name: car})
        
    }
    const handleSubmitUpdate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(carId) {
            dispatch(updateCar({id: carId, color: newColor, name: car}))
        }
        await updateGarage({id: carId, color: newColor, name: car})
    }
    return(
        <div className={styles.wrapper}>
            <form className={styles.wrapper} action="submit" onSubmit={textButton === "Create" ? handleSubmitCreate : handleSubmitUpdate}>
                <input type="text" onChange={(e) => {setCar(e.target.value)}} placeholder="Car name..."/> 
                <input type="color" onChange={(e) => {setColor(e.target.value)}}/>
                <Button text={textButton} classname="input" type="submit"/>
            </form>
        </div>
    )
}