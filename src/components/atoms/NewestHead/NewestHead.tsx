import styles from './NewestHead.module.css'
interface HeadProps{
  paragraph:string;
  header:string
}
const NewestHead:React.FC<HeadProps> = ({paragraph, header}) => {
  return (
    <div className={styles.head}>
            <p>{paragraph}</p>
            <h2>{header}</h2>
            <div className={styles.line}></div>
    </div>
  )
}

export default NewestHead