import { useState } from 'react';
import styles from './Menu.module.css'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import MobileNav from '../MobileNav/MobileNav';

const Menu = () => {
const[openMenu, setOpenMenu]=useState(false)

const handleMenuToggle=()=>{
setOpenMenu(!openMenu)
}
  return (
   <div className={styles.menuContainer}>
     <div className={styles.menu}>
       { openMenu ? <IoCloseSharp className={styles.icon} onClick={handleMenuToggle}/>:<IoMenu onClick={handleMenuToggle} className={styles.icon}/>}
    </div>
   { openMenu && <MobileNav/>}
   </div>
  )
}

export default Menu