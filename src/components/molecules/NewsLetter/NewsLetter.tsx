import styles from './NewsLetter.module.css'
import { GrFormNextLink } from "react-icons/gr";
const NewsLetter = () => {
  return (
    <div className={styles.newsletter}>
        <h2>NEWS LETTER</h2>
        <p>Subscribe to get latest news update and information</p>
        
        <div className={styles.email}>
            <input type='email' placeholder='Add Email'/>
            <GrFormNextLink/>
        </div>
    </div>
  )
}

export default NewsLetter