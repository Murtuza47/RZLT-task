import styles from './Navbar.module.scss';
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className={styles.navbar} >
      <div />
      <ul className={styles.navLink}>
        <li onClick={() => navigate('/')} className={location.pathname === '/' ? styles.bold : styles.normal}>Home</li>
        <li onClick={() => navigate('/search')} className={location.pathname === '/search' ? styles.bold : styles.normal}>Search</li>
        <li onClick={() => navigate('/history')} className={location.pathname === '/history' ? styles.bold : styles.normal}>History</li>
      </ul>
    </div >
  )
}