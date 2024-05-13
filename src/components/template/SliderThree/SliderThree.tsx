import NewestCarText from "../../molecules/NewestCarText/NewestCarText";
import styles from "./SliderThree.module.css";
const SliderThree = () => {
  return (
    <div className={styles.sliderThree}>
      <div className={styles.image}>
        <img
          //   src="https://www.free-css.com/assets/files/free-css-templates/preview/page296/carvilla/assets/images/ncm1.png"
          src="/src/assets/ncm3.png"
          alt="chevrolet camoron"
        />
      </div>
      <div className={styles.text}>
        <NewestCarText text="Ferrari 488 Superfast" />
      </div>
    </div>
  );
};

export default SliderThree;
