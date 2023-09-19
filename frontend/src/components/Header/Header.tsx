import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>Logo Here</Link>
      <nav className={styles.nav}>
        <ul className={styles.nav}>
          <li>
            <button className={styles.link}>
              <span>Cart 🛒</span>
              <div className={styles.cart}>10</div>
            </button>
          </li>
          <li>
            <Link href='/orders' className={styles.logoutBtn}>
              Orders
            </Link>
            <button className={styles.logoutBtn}>Logout</button>
            <button className={styles.logoutBtn}>Sign Up</button>
            <button className={styles.logoutBtn}>Sign in with Google</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
