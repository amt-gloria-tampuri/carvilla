import Header from "../../molecules/Header/Header"
import Hero from "../../molecules/Hero/Hero"
import styles from './HeaderHero.module.css'

const HeaderHero = () => {
  return (
    <div className={styles.HeaderHero}>
        <Header/>
        <Hero/>
    </div>
  )
}

export default HeaderHero