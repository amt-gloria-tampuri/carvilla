import styles from "./Benefits.module.css";
import CarSVG from "../../SVGS/Insurance";

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <CarSVG />
        </div>
        <h2>largest Dealership of Cars</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          den fugit sed quia.
        </p>
        <div className={styles.line}></div>
      </div>

      <div className={styles.card}>
      <div className={styles.icon}>
          <CarSVG />
        </div>
        <h2>Unlimited repair warranty</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          den fugit sed quia.
        </p>
        <div className={styles.line}></div>
      </div>

      <div className={styles.card}>
      <div className={styles.icon}>
          <CarSVG />
        </div>

        <h2>insurance Support</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          den fugit sed quia.
        </p>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Benefits;
