import styles from './Brands.module.css'


const Brands = () => {
    const data=[
        {picture:"/src/assets/br1.png"},
        {picture:"/src/assets/br2.png"},
        {picture:"/src/assets/br3.png"},
        {picture:"/src/assets/br4.png"},
        {picture:"/src/assets/br5.png"},
        {picture:"/src/assets/br6.png"}
    ]
  return (
    <div className={styles.brand}>
        <div className={styles.gridContainer}>
            {data.map((brand)=><img src={brand.picture} alt='Brand Logo'/>)}
        </div>
    </div>
  )
}

export default Brands