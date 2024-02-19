import React, { useContext } from "react";

// CSS Module
import styles from "./index.module.css";

// Components
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import MainBody from "../MainBody";

// Context
import ReactContext from "../../context/ReactContext";


const MyDashboard = () => {
  const { isThemeLight } = useContext(ReactContext);
  return (
    <div className={isThemeLight ? styles.myDashboard : styles.myDarkDashboard}>
      <Navbar />
      <div className={styles.MiddleBody}>
        <Sidebar />
        <MainBody />
      </div>
    </div>
  );
};

export default MyDashboard;
