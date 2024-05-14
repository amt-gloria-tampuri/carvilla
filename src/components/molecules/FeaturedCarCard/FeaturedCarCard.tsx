import styles from './FeaturedCarCard.module.css'

interface CardProps{
    imageSource:string;
    model:string;
    mi:string;
    hp:string;
    type:string;
    name:string;
    price:string;
    description:string
}

const FeaturedCarCard:React.FC<CardProps> = ({imageSource,model,mi,hp,type,name,description,price}) => {
  return (
   <div className={styles.cardwrapper}>
     <div className={styles.card}>
        <div className={styles.img}>
            <img src={imageSource} alt="" />
        </div>

        <div className={styles.modelInfo}>
            <p>Model:{model}</p>
            <p>{mi} Mi</p>
            <p>{hp} HP</p>
            <p>{type}</p>
        </div>
    </div>
    <div className={styles.description}>
        <h2>{name}</h2>
        <p className={styles.price}>{price}</p>
        <p>{description}</p>
    </div>
   </div>
  )
}

export default FeaturedCarCard