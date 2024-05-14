import About from '../../molecules/About/About'
import Devloon from '../../molecules/Devloon/Devloon'
import NewsLetter from '../../molecules/NewsLetter/NewsLetter'
import Socials from '../../molecules/Socials/Socials'
import TopBrands from '../../molecules/TopBrands/TopBrands'
import styles from './Contacts.module.css'
const Contacts = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contacts}>
      <About/>
      <Devloon/>
      <TopBrands/>
      <NewsLetter/>   
    </div>
    <Socials/>
    </div>
  )
}

export default Contacts