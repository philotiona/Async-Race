import type { ReactNode } from 'react';
import styles from './ButtonList.module.css';
import Button from '../../common/Button/Button';
import InputForm from '../../common/InputForm/InputForm';
import { generateCars, carGenerator } from '../../services/carGenrator';
import { useDispatch, useSelector } from 'react-redux';
import { setCars } from '../../store/AddCarSlice';
import type { RootState } from '../../store/store';

export default function ButtonList(): ReactNode {
  const dispatch = useDispatch();
  const currentCars = useSelector((state: RootState) => state.addCar.cars);

  const handleGenerate = async () => {
    try {
      const carsToGenerate = generateCars();
      dispatch(setCars([...currentCars, ...carsToGenerate]));
      await carGenerator(carsToGenerate);
    } catch (error) {
      console.error('Error generating cars:', error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.startReset}>
        <Button text="start" classname="start" />
        <Button text="reset" classname="reset" />
      </div>
      <div className={styles.inputs}>
        <InputForm textButton="Create" />
        <InputForm textButton="Update" />
      </div>
      <Button text="Generate Cars" classname="generate" onclick={handleGenerate} />
    </div>
  );
}
