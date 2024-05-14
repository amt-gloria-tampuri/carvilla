import { Logo } from "../../atoms/Logo/Logo"
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.wrapper}>
        <Logo/>
        <p className={styles.words}>Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut enim ad minim veniam.</p>
        <p className={styles.contact}>name@domain.com</p>
        <p className={styles.contact}>+1 (222) 1234567890</p>
    </div>
  )
}

export default About