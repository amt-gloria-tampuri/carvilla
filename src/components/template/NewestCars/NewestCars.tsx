// import { useState, useEffect } from "react";
// import NewestHead from "../../atoms/NewestHead/NewestHead";
// import SliderOne from "../SliderOne/SliderOne";
// import SliderThree from "../SliderThree/SliderThree";
// import SliderTwo from "../SliderTwo/SliderTwo";
// import styles from "./NewestCars.module.css";

// const NewestCars = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={styles.newest}>
//       <NewestHead />
//       <div className={styles.cars}>
//         {currentSlide === 0 && <SliderOne />}
//         {currentSlide === 1 && <SliderTwo />}
//         {currentSlide === 2 && <SliderThree />}
//       </div>
//     </div>
//   );
// };

// export default NewestCars;



import { useState, useEffect } from 'react';
import NewestHead from '../../atoms/NewestHead/NewestHead';
import SliderOne from '../SliderOne/SliderOne';
import SliderTwo from '../SliderTwo/SliderTwo';
import SliderThree from '../SliderThree/SliderThree';
import styles from './NewestCars.module.css';

const NewestCars = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [prevSlider, setPrevSlider] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlider(currentSlider);
      setCurrentSlider(prevSlider => (prevSlider + 1) % 3); // Assuming there are 3 sliders
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlider, prevSlider]);

  return (
    <div className={styles.newest}>
      <NewestHead paragraph='Checkout the latest cars' header='Newest Cars'/>
      <div className={styles.cars}>
        <div className={styles.sliderContainer}>
          {currentSlider === 0 && <SliderOne />}
          {currentSlider === 1 && <SliderTwo />}
          {currentSlider === 2 && <SliderThree />}
          {(currentSlider !== prevSlider) && (
            <div className={styles.fadeOutOverlay}></div>
          )}
        </div>
        <div className={styles.navigationDots}>
          <span className={currentSlider === 0 ? styles.active : ''}></span>
          <span className={currentSlider === 1 ? styles.active : ''}></span>
          <span className={currentSlider === 2 ? styles.active : ''}></span>
        </div>
      </div>
    </div>
  );
};

export default NewestCars;
