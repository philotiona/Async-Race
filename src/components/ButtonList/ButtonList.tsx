import type { ReactNode } from "react";
import styles from "./ButtonList.module.css"
import Button from "../../common/Button/Button";
import InputForm from "../../common/InputForm/InputForm";

export default function ButtonList(): ReactNode {
    return(
        <div className={styles.wrapper}>
            <div className={styles.startReset}>
                <Button text="start" classname="start"/>
                <Button text="reset" classname="reset"/>
            </div>
            <div className={styles.inputs}>
                <InputForm textButton = "Create"/>
                <InputForm textButton="Update"/>
            </div>
            <Button text="Generate Cars" classname="generate"/>
        </div>
    )
}