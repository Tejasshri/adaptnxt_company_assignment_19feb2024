import React, { useContext } from "react";

// Unique Id Generator
import { v4 } from "uuid";

// Context
import ReactContext from "../../context/ReactContext";

// CSS Module
import styles from "./index.module.css";

const OrderStatusSection = () => {
  const { orderStatusList, changeOrderStatus, seletedOrderStatusListItem } =
    useContext(ReactContext);
  return (
    <div className={styles.orderStatusSection}>
      {orderStatusList.map((each) => (
        <button
          key={v4()}
          onClick={() => changeOrderStatus(each.id)}
          className={`${
            seletedOrderStatusListItem === each.id ? styles.selected : null
          } ${styles.orderStatusListItem}`}>
          {each.text}
        </button>
      ))}
    </div>
  );
};

export default OrderStatusSection;
