import styles from './Socials.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";

const Socials = () => (
    <div className={styles.socials}>
        <p>© copyright. designed and developed by Themesin</p>

        <div className={styles.social}>
        <FaFacebookF/><FaInstagram/><FaLinkedinIn/><FaPinterestP/><FaBehance/>
        </div>
    </div>
)

export default Socials