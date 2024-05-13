import { useEffect, useState } from 'react';
import styles from './Navigation.module.css'


const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0; 
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div>
      <nav>
        <ul className={ scrolled ? `${styles.navlist} ${styles.scrolled}` :styles.navlist}>
          <li><a href='#home'>Home</a></li>
          <li><a href='#service'>Service</a></li>
          <li><a href='#featured'>Featured Cars</a></li>
          <li><a href='#new'>New Cars</a></li>
          <li><a href='#brands'>Brands</a></li>
          <li><a href='#contacts'>Contacts</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation