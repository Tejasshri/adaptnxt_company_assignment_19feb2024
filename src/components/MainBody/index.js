import React, { useContext } from "react";

// CSS Module
import styles from "./index.module.css";

// Components
import OrdersTabSection from "../OrdersTabSection";
import OrdersTableSection from "../OrdersTableSection";

// Icons
import { IoIosClose } from "react-icons/io";

// Context
import ReactContext from "../../context/ReactContext";

const MainBody = () => {
  const { sidebarSelection, isThemeLight } = useContext(ReactContext);
  
  return (
    <div
      className={
        isThemeLight
          ? styles.mainBody
          : `${styles.mainBody} ${styles.mainBodyDark}`
      }>
      <div
        className={`${styles.badge} ${isThemeLight ? null : styles.badgeDark}`}>
        <p>{sidebarSelection}</p>
        <IoIosClose
          className={styles.icon}
          size={20}
          color={isThemeLight ? "black" : "white"}
        />
      </div>
      {sidebarSelection === "orders" && (
        <>
          <OrdersTabSection />
          <OrdersTableSection />
        </>
      )}
    </div>
  );
};

export default MainBody;
