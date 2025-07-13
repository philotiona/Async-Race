import type { ReactNode } from "react";
import styles from "./Header.module.css"
import Button from "../../common/Button/Button";

export default function Header(): ReactNode {
    return(
        <div className={styles.wrapper}>
           <h1>Async Race</h1>
           <div className={styles.buttons}>
                <Button classname="garage" text="Garage"/>
                <Button classname="winners" text="Winners"/>
            </div>  
        </div>
    )
}