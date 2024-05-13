import styles from './MobileNav.module.css'
const MobileNav = () => {
  return (
    <div>
          <nav>
        <ul className={styles.navlist}>
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

export default MobileNav