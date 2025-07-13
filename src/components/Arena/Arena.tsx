import { useSelector, useDispatch } from "react-redux"
import styles from "./Arena.module.css"
import { type ReactNode, useState } from "react"
import type { RootState } from "../../store/store"
import { removeCar, setSelectedCar, type CarItem } from "../../store/AddCarSlice"
import Button from "../../common/Button/Button"


export default function Arena(): ReactNode {
    const dispatch = useDispatch()
    const carsArray = useSelector((state: RootState) => state.addCar.cars)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const startIndex = (currentPage - 1) * 5
    const endIndex = startIndex + 5
    const carsToDisplay = carsArray.slice(startIndex, endIndex)
    console.log(carsArray)
    const pagesCount  = Math.ceil(carsArray.length / 5)

    const handlePrevious= () => {
        setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
    };
    const handleNext = () => {
        setCurrentPage(currentPage < pagesCount ? currentPage + 1 : currentPage)
    }
    const handleRemove = (id: number) => {
        dispatch(removeCar(id))

    }
    return(
         <div className={styles.wrapper}>
                <div className={styles.road}>
                    {carsToDisplay?.map((item: CarItem) => (
                        <div className={styles.car} key={item.id}>
                            <div className={styles.carPark}>
                                <div className={styles.controls}>
                                    <Button text="Select" classname="select" onclick={() => {dispatch(setSelectedCar(item.id))}}/>
                                    <Button text="A" classname="push"/>
                                    <Button text="Remove" classname="select" onclick={()=> handleRemove(item.id)}/>
                                    <Button text="B" classname="stop"/>
                                </div>
                                <div className={styles.carSvg}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 845 307">
    <path d="M 279.565 21.315 L 279.565 26.815 L 274.065 26.815 L 268.565 26.815 L 268.565 32.315 L 268.565 37.815 L 252.065 37.815 L 235.565 37.815 L 235.565 43.315 L 235.565 48.815 L 224.565 48.815 L 213.565 48.815 L 213.565 54.315 L 213.565 59.815 L 202.565 59.815 L 191.565 59.815 L 191.565 65.315 L 191.565 70.815 L 186.065 70.815 L 180.565 70.815 L 180.565 153.315 L 180.565 235.815 L 186.065 235.815 L 191.565 235.815 L 191.565 241.315 L 191.565 246.815 L 202.565 246.815 L 213.565 246.815 L 213.565 252.315 L 213.565 257.815 L 224.565 257.815 L 235.565 257.815 L 235.565 263.315 L 235.565 268.815 L 252.065 268.815 L 268.565 268.815 L 268.565 274.315 L 268.565 279.815 L 274.065 279.815 L 279.565 279.815 L 279.565 285.315 L 279.565 290.815 L 323.565 290.815 L 367.565 290.815 L 367.565 285.315 L 367.565 279.815 L 373.065 279.815 L 378.565 279.815 L 378.565 274.315 L 378.565 268.815 L 494.065 268.815 L 609.565 268.815 L 609.565 274.315 L 609.565 279.815 L 615.065 279.815 L 620.565 279.815 L 620.565 285.315 L 620.565 290.815 L 664.565 290.815 L 708.565 290.815 L 708.565 285.315 L 708.565 279.815 L 714.065 279.815 L 719.565 279.815 L 719.565 274.315 L 719.565 268.815 L 752.565 268.815 L 785.565 268.815 L 785.565 257.815 L 785.565 246.815 L 796.565 246.815 L 807.565 246.815 L 807.565 241.315 L 807.565 235.815 L 813.065 235.815 L 818.565 235.815 L 818.565 230.315 L 818.565 224.815 L 824.065 224.815 L 829.565 224.815 L 829.565 153.315 L 829.565 81.815 L 824.065 81.815 L 818.565 81.815 L 818.565 76.315 L 818.565 70.815 L 807.565 70.815 L 796.565 70.815 L 796.565 65.315 L 796.565 59.815 L 791.065 59.815 L 785.565 59.815 L 785.565 48.815 L 785.565 37.815 L 752.565 37.815 L 719.565 37.815 L 719.565 32.315 L 719.565 26.815 L 714.065 26.815 L 708.565 26.815 L 708.565 21.315 L 708.565 15.815 L 664.565 15.815 L 620.565 15.815 L 620.565 21.315 L 620.565 26.815 L 615.065 26.815 L 609.565 26.815 L 609.565 32.315 L 609.565 37.815 L 494.065 37.815 L 378.565 37.815 L 378.565 32.315 L 378.565 26.815 L 373.065 26.815 L 367.565 26.815 L 367.565 21.315 L 367.565 15.815 L 323.565 15.815 L 279.565 15.815 L 279.565 21.315 Z M 763.565 70.815 L 763.565 81.815 L 769.065 81.815 L 774.565 81.815 L 774.565 87.315 L 774.565 92.815 L 780.065 92.815 L 785.565 92.815 L 785.565 98.315 L 785.565 103.815 L 774.565 103.815 L 763.565 103.815 L 763.565 98.315 L 763.565 92.815 L 758.065 92.815 L 752.565 92.815 L 752.565 87.315 L 752.565 81.815 L 747.065 81.815 L 741.565 81.815 L 741.565 70.815 L 741.565 59.815 L 752.565 59.815 L 763.565 59.815 L 763.565 70.815 Z M 378.565 153.315 L 378.565 224.815 L 373.065 224.815 L 367.565 224.815 L 367.565 219.315 L 367.565 213.815 L 356.565 213.815 L 345.565 213.815 L 345.565 208.315 L 345.565 202.815 L 340.065 202.815 L 334.565 202.815 L 334.565 197.315 L 334.565 191.815 L 329.065 191.815 L 323.565 191.815 L 323.565 147.815 L 323.565 103.815 L 329.065 103.815 L 334.565 103.815 L 334.565 98.315 L 334.565 92.815 L 345.565 92.815 L 356.565 92.815 L 356.565 87.315 L 356.565 81.815 L 367.565 81.815 L 378.565 81.815 L 378.565 153.315 Z M 598.565 87.315 L 598.565 92.815 L 620.565 92.815 L 642.565 92.815 L 642.565 98.315 L 642.565 103.815 L 648.065 103.815 L 653.565 103.815 L 653.565 153.315 L 653.565 202.815 L 648.065 202.815 L 642.565 202.815 L 642.565 208.315 L 642.565 213.815 L 620.565 213.815 L 598.565 213.815 L 598.565 219.315 L 598.565 224.815 L 587.565 224.815 L 576.565 224.815 L 576.565 153.315 L 576.565 81.815 L 587.565 81.815 L 598.565 81.815 L 598.565 87.315 Z M 785.565 208.315 L 785.565 213.815 L 780.065 213.815 L 774.565 213.815 L 774.565 219.315 L 774.565 224.815 L 769.065 224.815 L 763.565 224.815 L 763.565 235.815 L 763.565 246.815 L 752.565 246.815 L 741.565 246.815 L 741.565 235.815 L 741.565 224.815 L 747.065 224.815 L 752.565 224.815 L 752.565 219.315 L 752.565 213.815 L 758.065 213.815 L 763.565 213.815 L 763.565 208.315 L 763.565 202.815 L 774.565 202.815 L 785.565 202.815 L 785.565 208.315 Z" 
            fill={item.color} 
            stroke="none"/>
    </svg>
                                </div>
                            </div>
                            <div className={styles.carLine}>
                                <p className={styles.ptag}>{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.pagination}>
                    <Button text="Previous" classname="previous" onclick={handlePrevious}/>
                    <span className={styles.span}>
                    {currentPage}/{pagesCount}
                    </span>
                    <Button text="Next" classname="next" onclick={handleNext}/>
                </div>
            </div>
    )
}