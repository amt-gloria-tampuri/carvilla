import styles from './MobileNav.module.css';

interface MobileNavProps {
  onItemClick: () => void; 
}

const MobileNav: React.FC<MobileNavProps> = ({ onItemClick }) => {
  return (
    <div>
      <nav>
        <ul className={styles.navlist}>
          <li><a href='#home' onClick={onItemClick}>Home</a></li>
          <li><a href='#service' onClick={onItemClick}>Service</a></li>
          <li><a href='#featured' onClick={onItemClick}>Featured Cars</a></li>
          <li><a href='#new' onClick={onItemClick}>New Cars</a></li>
          <li><a href='#brands' onClick={onItemClick}>Brands</a></li>
          <li><a href='#contacts' onClick={onItemClick}>Contacts</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
