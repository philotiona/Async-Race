import { useState, type FormEvent, type ReactNode } from "react";
import styles from "./InputForm.module.css"
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addCar } from "../../store/AddCarSlice";
import type { RootState } from "../../store/store";
interface PropTypes {
    textButton: string
}

export default function InputForm({textButton}: PropTypes): ReactNode {
    const dispatch = useDispatch();
    const [car, setCar] = useState<string>("")
    const [color, setColor] = useState<string>("")
    const carSelector = useSelector((state: RootState) => state.addCar.cars)
    const maxId = Math.max(...carSelector.map(item => item.id),0) + 1
    const handleSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addCar({
            name: car,
            color: color,
            id: maxId
        }))
        
    }
    const handleSubmitUpdate =(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();}
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