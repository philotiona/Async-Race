import type { ReactNode } from "react";
import styles from "./Garage.module.css"
import ButtonList from "../../components/ButtonList/ButtonList";
import Arena from "../../components/Arena/Arena";

export default function Garage(): ReactNode {
    return (
        <div className={styles.wrapper}>
            <ButtonList/>
            <Arena/>
        </div>
    )
}