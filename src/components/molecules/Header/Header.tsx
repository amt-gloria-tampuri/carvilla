import { useState, useEffect } from 'react';
import { Logo } from "../../atoms/Logo/Logo";
import Menu from "../../atoms/Menu/Menu";
import Navigation from "../../atoms/Navigation/Navigation";
import styles from './Header.module.css';

const Header = () => {
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
    <div className={scrolled ? `${styles.Header} ${styles.scrolled}` : styles.Header}>
      <Menu />
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
