import styles from './Devloon.module.css'

const Devloon = () => {
  return (
    <div className={styles.devloon}>
        <h2>About Devloon</h2>
        <div className={styles.list}>
            <p>About us</p>
            <p>Career</p>
            <p>Terms of service</p>
            <p>Privacy Policies</p>
        </div>
    </div>
  )
}

export default Devloon