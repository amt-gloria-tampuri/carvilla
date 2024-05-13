import NewestCarText from "../../molecules/NewestCarText/NewestCarText";
import styles from "./SliderTwo.module.css";
const SliderTwo = () => {
  return (
    <div className={styles.sliderTwo}>
      <div className={styles.image}>
        <img
          //   src="https://www.free-css.com/assets/files/free-css-templates/preview/page296/carvilla/assets/images/ncm1.png"
          src="/src/assets/ncm2.png"
          alt="chevrolet camoron"
        />
      </div>
      <div className={styles.text}>
        <NewestCarText text="BMW Series-3 Wagon" />
      </div>
    </div>
  );
};

export default SliderTwo;
