import styles from './ClientCard.module.css'
interface CardProps{
    picture:string;
    words:string;
    name:string;
    location:string
}
const ClientCard:React.FC<CardProps> = ({picture,words,name,location}) => {
  return (
    <div className={styles.card}>
        <div className={styles.img}>
            <img src={picture} alt={name}/>
        </div>
        <p className={styles.words}>{words}</p>
        <h4>{name}</h4>
        <h4>{location}</h4>
    </div>
  )
}

export default ClientCard