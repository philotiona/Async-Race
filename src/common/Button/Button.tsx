import type { ReactNode } from "react";
import styles from "./Button.module.css"
interface PropTypes {
    text: string,
    classname: string,
    onclick?: () => void
}

export default function Button({text, classname, onclick}: PropTypes): ReactNode {
    return(
        <button className={` ${styles.button} ${styles[classname]}`} onClick={onclick}>
            {text}
        </button>
    )
}