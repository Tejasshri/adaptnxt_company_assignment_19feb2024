import { useState } from "react";
import MyDashboard from "./components/MyDashboard";
import ReactContext from "./context/ReactContext";

const orderStatusList = [
  {
    id: "PENDING",
    text: "Pending",
  },
  {
    id: "ACCEPT",
    text: "Accept",
  },
  {
    id: "AWB_CREATED",
    text: "AWB Created",
  },
  {
    id: "READY_TO_SHIP",
    text: "Ready to Ship",
  },
  {
    id: "SHIPPED",
    text: "Shipped",
  },
  {
    id: "COMPLETED",
    text: "Completed",
  },
  {
    id: "CANCELLED",
    text: "Cancelled",
  },
];

function App() {
  const [isThemeLight, setIsThemeLight] = useState(false);
  const [sidebarSelection, setSidebarSelection] = useState("orders");
  const [seletedOrderStatusListItem, setSelectedOrderStatusListItem] = useState(
    orderStatusList[0].id
  );

  const changeOrderStatus = (oStatusId) => {
    setSelectedOrderStatusListItem(oStatusId);
  };

  return (
    <ReactContext.Provider
      value={{
        isThemeLight,
        changeTheme: () => setIsThemeLight(!isThemeLight),
        sidebarSelection,
        setSidebarSelection,
        seletedOrderStatusListItem,
        changeOrderStatus,
        orderStatusList,
      }}>
      <MyDashboard />
    </ReactContext.Provider>
  );
}

export default App;
