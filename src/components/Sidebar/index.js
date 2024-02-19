import { useContext } from "react";

// Icons
import { AiOutlineDashboard } from "react-icons/ai";
import { GoListUnordered } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineLocalShipping, MdOutlineInventory2 } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";

// Context
import ReactContext from "../../context/ReactContext";

// CSS Module
import styles from "./index.module.css";

// Main Sidebar Component
const Sidebar = () => {
  const {
    isThemeLight,
    sidebarSelection,
    setSidebarSelection,
    isSidebarOpened,
    setIsSidebarOpened,
  } = useContext(ReactContext);
  return (
    <aside
      className={`${
        isThemeLight
          ? styles.sidebar
          : `${styles.sidebar} ${styles.darkSidebar}`
      } ${isSidebarOpened ? null : styles.sidebarClosed}`}>
      <button
        onClick={() => setIsSidebarOpened((n) => !n)}
        className={`${styles.openNavbarBtn} ${
          isSidebarOpened ? null : styles.isClosed
        }`}>
        <MdMenuOpen color={isThemeLight ? "black" : "white"} />
      </button>
      <ul className={styles.sidebarElementList}>
        <li
          className={`${
            sidebarSelection === "dashboard" ? styles.selected : null
          } ${
            isThemeLight
              ? styles.sidebarListItem
              : `${styles.sidebarListItem} ${styles.sidebarDarkListItem}`
          }`}>
          <button
            onClick={() => setSidebarSelection("dashboard")}
            className={`${styles.sidebarBtn}`}>
            <AiOutlineDashboard
              className={styles.sidebarIcon}
              color={isThemeLight ? "black" : "white"}
              size={24}
            />
            <p>Dashboard</p>
          </button>
        </li>
        <li
          className={`${
            sidebarSelection === "inventory" ? styles.selected : null
          } ${
            isThemeLight
              ? styles.sidebarListItem
              : `${styles.sidebarListItem} ${styles.sidebarDarkListItem}`
          }`}>
          <button
            onClick={() => setSidebarSelection("inventory")}
            className={styles.sidebarBtn}>
            <MdOutlineInventory2
              className={styles.sidebarIcon}
              color={isThemeLight ? "black" : "white"}
              size={24}
            />
            <p>Inventory</p>
          </button>
        </li>
        <li
          className={`${
            sidebarSelection === "orders" ? styles.selected : null
          } ${
            isThemeLight
              ? styles.sidebarListItem
              : `${styles.sidebarListItem} ${styles.sidebarDarkListItem}`
          }`}>
          <button
            onClick={() => setSidebarSelection("orders")}
            className={styles.sidebarBtn}>
            <GoListUnordered
              className={styles.sidebarIcon}
              color={isThemeLight ? "black" : "white"}
              size={24}
            />
            <p>Orders</p>
          </button>
        </li>
        <li
          className={`${
            sidebarSelection === "shipping" ? styles.selected : null
          } ${
            isThemeLight
              ? styles.sidebarListItem
              : `${styles.sidebarListItem} ${styles.sidebarDarkListItem}`
          }`}>
          <button
            onClick={() => setSidebarSelection("shipping")}
            className={styles.sidebarBtn}>
            <MdOutlineLocalShipping
              className={styles.sidebarIcon}
              color={isThemeLight ? "black" : "white"}
              size={24}
            />
            <p>Shipping</p>
          </button>
        </li>
        <li
          className={`${
            sidebarSelection === "channal" ? styles.selected : null
          } ${
            isThemeLight
              ? styles.sidebarListItem
              : `${styles.sidebarListItem} ${styles.sidebarDarkListItem}`
          }`}>
          <button
            onClick={() => setSidebarSelection("channal")}
            className={styles.sidebarBtn}>
            <CiShare2
              className={styles.sidebarIcon}
              color={isThemeLight ? "black" : "white"}
              size={24}
            />
            <p>Channal</p>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
