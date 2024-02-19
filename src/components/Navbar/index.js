import ReactContext from "../../context/ReactContext";
import styles from "./index.module.css";
import { useContext } from "react";

// icons
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { MdOutlineGTranslate } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  const { changeTheme, isThemeLight } = useContext(ReactContext);

  return (
    <nav
      className={
        isThemeLight ? styles.navbar : `${styles.navbar} ${styles.darkNavbar}`
      }>
      <a
        className={
          isThemeLight
            ? styles.navLogo
            : `${styles.navLogo} ${styles.navDarkLogo}`
        }
        href=".">
        MyDashboard
      </a>
      <div className={styles.navBtnContainer}>
        <button className={styles.navBtn} onClick={changeTheme}>
          {isThemeLight ? (
            <IoMoonOutline color="black" size={26} />
          ) : (
            <IoMoonSharp color="white" size={26} />
          )}
        </button>

        <button className={styles.navBtn}>
          <FaRegBell color={isThemeLight ? "black" : "white"} size={26} />
        </button>
        <button className={styles.navBtn}>
          <MdOutlineGTranslate
            color={isThemeLight ? "black" : "white"}
            size={26}
          />
        </button>
        <img
          src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
          alt=""
          height={40}
          className={styles.avatar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
