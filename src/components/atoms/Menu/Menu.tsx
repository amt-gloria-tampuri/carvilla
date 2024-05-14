// Menu.jsx
import { useState } from 'react';
import styles from './Menu.module.css';
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import MobileNav from '../MobileNav/MobileNav';

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  const handleMenuItemClick = () => {
    setOpenMenu(false); // Close the menu when a menu item is clicked
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        {openMenu ? <IoCloseSharp className={styles.icon} onClick={handleMenuToggle} /> : <IoMenu onClick={handleMenuToggle} className={styles.icon} />}
      </div>
      {openMenu && <MobileNav onItemClick={handleMenuItemClick} />} {/* Pass onItemClick handler */}
    </div>
  );
};

export default Menu;
