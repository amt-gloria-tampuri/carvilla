import styles from './TopBrands.module.css'

const TopBrands = () => {
  return (
    <div className={styles.devloon}>
    <h2>Top Brands</h2>
    <div className={styles.flex}>
    <div className={styles.list}>
        <p>BMW</p>
        <p>Lamborghini</p>
        <p>Camaro</p>
        <p>Audi</p>
        <p>Infiniti</p>
        <p>Nissan</p>
    </div>
    <div className={styles.list}>
        <p>Ferrari</p>
        <p>Porche</p>
        <p>Land Rover</p>
        <p>Aston Martin </p>
        <p>Mersedes</p>
        <p>Opel</p>
    </div>
    </div>
</div>  )
}

export default TopBrands