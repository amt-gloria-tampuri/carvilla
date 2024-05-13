import  { useState, useEffect } from 'react';
import NewestHead from '../../atoms/NewestHead/NewestHead';
import SliderOne from '../SliderOne/SliderOne';
import SliderThree from '../SliderThree/SliderThree';
import SliderTwo from '../SliderTwo/SliderTwo';
import styles from './NewestCars.module.css';

const NewestCars = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <SliderOne />;
      case 1:
        return <SliderTwo />;
      case 2:
        return <SliderThree />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.newest}>
      <NewestHead />
      <div className={styles.cars}>{renderSlide()}</div>
    </div>
  );
};

export default NewestCars;