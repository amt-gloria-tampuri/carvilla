import { useEffect, useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleSetActiveSection = () => {
      const sections = ['home', 'service', 'featured', 'new', 'brands', 'contacts'];
      const scrollPosition = window.scrollY + 200;
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSetActiveSection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSetActiveSection);
    };
  }, [scrolled]);

  return (
    <div>
      <nav>
        <ul className={scrolled ? `${styles.navlist} ${styles.scrolled}` : styles.navlist}>
          <li><a href='#home' className={activeSection === 'home' ? styles.active : ''}>Home</a></li>
          <li><a href='#service' className={activeSection === 'service' ? styles.active : ''}>Service</a></li>
          <li><a href='#featured' className={activeSection === 'featured' ? styles.active : ''}>Featured Cars</a></li>
          <li><a href='#new' className={activeSection === 'new' ? styles.active : ''}>New Cars</a></li>
          <li><a href='#brands' className={activeSection === 'brands' ? styles.active : ''}>Brands</a></li>
          <li><a href='#contacts' className={activeSection === 'contacts' ? styles.active : ''}>Contacts</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
