import { useContext } from "react";

// Icons
import { AiOutlineDashboard } from "react-icons/ai";
import { GoListUnordered } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineLocalShipping, MdOutlineInventory2 } from "react-icons/md";

// Context
import ReactContext from "../../context/ReactContext";

// CSS Module
import styles from "./index.module.css";


// Main Sidebar Component
const Sidebar = () => {
  const { isThemeLight, sidebarSelection, setSidebarSelection } =
    useContext(ReactContext);
  return (
    <aside
      className={
        isThemeLight
          ? styles.sidebar
          : `${styles.sidebar} ${styles.darkSidebar}`
      }>
      <ul className={styles.sidebarElementList}>
        <li
          className={`${
            sidebarSelection === "dashboard" ? styles.selected : null
          } ${
            isThemeLight
              ? styles.sidebarListItem
              : `${styles.sidebarListItem} ${styles.sidebarDarkListItem}`
          }`}>
          <AiOutlineDashboard
            color={isThemeLight ? "black" : "white"}
            size={24}
          />
          <button
            onClick={() => setSidebarSelection("dashboard")}
            className={styles.sidebarBtn}>
            Dashboard
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
          <MdOutlineInventory2
            color={isThemeLight ? "black" : "white"}
            size={24}
          />
          <button
            onClick={() => setSidebarSelection("inventory")}
            className={styles.sidebarBtn}>
            Inventory
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
          <GoListUnordered color={isThemeLight ? "black" : "white"} size={24} />
          <button
            onClick={() => setSidebarSelection("orders")}
            className={styles.sidebarBtn}>
            Orders
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
          <MdOutlineLocalShipping
            color={isThemeLight ? "black" : "white"}
            size={24}
          />
          <button
            onClick={() => setSidebarSelection("shipping")}
            className={styles.sidebarBtn}>
            Shipping
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
          <CiShare2 color={isThemeLight ? "black" : "white"} size={24} />
          <button
            onClick={() => setSidebarSelection("channal")}
            className={styles.sidebarBtn}>
            Channal
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
