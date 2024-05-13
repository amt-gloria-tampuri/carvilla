import styles from './NewestHead.module.css'

const NewestHead = () => {
  return (
    <div className={styles.head}>
            <p>Checkout the latest cars</p>
            <h2>Newest cars</h2>
            <div className={styles.line}></div>
    </div>
  )
}

export default NewestHead