import Button from "../../atoms/Button/Button";
import React from "react";
import styles from './NewestCarText.module.css'

interface TextProps{
    text:string
}

const NewestCarText: React.FC<TextProps> = ({text}) => {
  return (
    <div className={styles.cover}>
      <h2>{text}</h2>
      <p className={styles.secondP}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p >
        Sed ut pers unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium.
      </p>

      <Button>View Details</Button>
    </div>
  );
};

export default NewestCarText;
