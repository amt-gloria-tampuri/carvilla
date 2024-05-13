import NewestCarText from "../../molecules/NewestCarText/NewestCarText";
import styles from "./SliderOne.module.css";
const SliderOne = () => {
  return (
    <div className={styles.sliderOne}>
      <div className={styles.image}>
        <img
          //   src="https://www.free-css.com/assets/files/free-css-templates/preview/page296/carvilla/assets/images/ncm1.png"
          src="/src/assets/ncm1.png"
          alt="chevrolet camoron"
        />
      </div>
      <div className={styles.text}>
        <NewestCarText text="Chevrolet Camaro ZA100" />
      </div>
    </div>
  );
};

export default SliderOne;
