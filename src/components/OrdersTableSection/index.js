import React, { useContext, useEffect, useState } from "react";

// Icons
import { LuArrowLeftSquare } from "react-icons/lu";
import { IoPrintOutline } from "react-icons/io5";
import { AiOutlineSend } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { RiRefreshLine } from "react-icons/ri";
import { RiExpandUpDownFill } from "react-icons/ri";
import { TiFilter } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { MdArrowBackIos, MdErrorOutline } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

// CSS Module
import styles from "./index.module.css";

// Context
import ReactContext from "../../context/ReactContext";

import { v4 } from "uuid";
import { TailSpin } from "react-loader-spinner";

const OrdersTableSection = () => {
  const { isThemeLight } = useContext(ReactContext);
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const { seletedOrderStatusListItem } = useContext(ReactContext);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getLoadingView = () => {
    return (
      <div className={styles.loadingView}>
        <TailSpin
          visible={true}
          height="60"
          width="60"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <h2>We are fetching Data from backend It may take some time</h2>
      </div>
    );
  };

  const getNoItemView = () => {
    return (
      <div className={styles.loadingView}>
        <MdErrorOutline color="red" size={60} />
        <h3 style={{ all: "unset !important" }}>
          There is nothing to show you at this moment
        </h3>
      </div>
    );
  };
  const getFailureView = () => {
    return (
      <div className={styles.loadingView}>
        <MdErrorOutline color="red" size={60} />
        <h2 style={{ all: "unset !important" }}>Oops! Something went wrong</h2>
        <p>{err}</p>
      </div>
    );
  };

  const getData = async () => {
    try {
      setErr("");
      setIsLoading(true);
      const response = await fetch(
        `https://dashboard-backend-for-adapnxt.onrender.com/dashboard/userdata?page_no=${pageNo}&order_status=${seletedOrderStatusListItem}`
      );
      const responseData = await response.json();
      setData(responseData.data);
      setPages(responseData.pages);
    } catch (error) {
      setErr(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [pageNo, seletedOrderStatusListItem]);

  const getRows = () => {
    if (isLoading) {
      return;
    }
    return isLoading
      ? getLoadingView()
      : data.map((each) => (
          <div
            key={v4()}
            className={`${styles.tableRow} ${
              isThemeLight ? null : styles.tableRowDark
            }`}>
            <div className={`${styles.item} ${styles.item1}`}>
              <FaPlus size={16} color={isThemeLight ? "black" : "white"} />
              <input type="checkbox" checked={each.checked} name="" id="" />
            </div>
            <div className={`${styles.item} ${styles.item2}`}>
              <p className={styles.itemPara} style={{ marginRight: "auto" }}>
                <img
                  height={30}
                  src="https://oddeveninfotech.com/images/serv_icons/shopify-services.png"
                  alt=""
                />
              </p>
            </div>
            <div className={`${styles.item} ${styles.item3}`}>
              <p className={styles.itemPara} style={{ marginRight: "auto" }}>
                {each.orderNo}
              </p>{" "}
            </div>
            <div className={`${styles.item} ${styles.item3}`}>
              <p className={styles.itemPara} style={{ marginRight: "auto" }}>
                {each.orderDate}
              </p>
            </div>
            <div className={`${styles.item} ${styles.item4}`}>
              <p className={styles.itemPara} style={{ marginRight: "auto" }}>
                {each.city}
              </p>
            </div>
            <div className={`${styles.item} ${styles.item5}`}>
              <p className={styles.itemPara} style={{ marginRight: "auto" }}>
                {each.name}
              </p>
            </div>
            <div className={`${styles.item} ${styles.item6}`}>
              <p className={styles.itemPara} style={{ marginRight: "auto" }}>
                {each.orderValue}
              </p>
            </div>
            <div className={`${styles.item} ${styles.item7}`}>
              <p className={styles.itemPara} style={{ marginRight: "auto" }}>
                {each.status}
              </p>
            </div>
            <div className={`${styles.item} ${styles.item8}`}>
              <select name="" id="" className={styles.itemSelect}>
                <option value="">Actions</option>
              </select>
            </div>
          </div>
        ));
  };

  const getView = () => {
    if (isLoading) return getLoadingView();
    else if (err !== "") return getFailureView();
    else if (data.length === 0) return getNoItemView();
    else return getRows();
  };

  const setAllIsChecked = () => {
    setData(data.map((each) => ({ ...each, checked: !each.checked })));
  };

  const onIncrementPageNo = () => {
    if (pages > pageNo) {
      return setPageNo((n) => n + 1);
    }
    alert("No More Pages Avaialabe");
  };

  const onDecrementPageNo = () => {
    if (pageNo > 1) {
      setPageNo((n) => n - 1);
    }
  };

  const getChangePageButtons = () => {
    return (
      <div className={styles.pageChangebtns}>
        <button onClick={onDecrementPageNo} className={styles.changePageBtn}>
          <MdArrowBackIos
            disabled={pageNo === 1}
            size={20}
            color={isThemeLight ? "black" : "white"}
          />
        </button>
        <div className={styles.changeNo}>{pageNo}</div>
        <button onClick={onIncrementPageNo} className={styles.changePageBtn}>
          <MdArrowForwardIos
            size={20}
            color={isThemeLight ? "black" : "white"}
          />
        </button>
        <div className={styles.pageCount}>{pages}/Page</div>
      </div>
    );
  };

  return (
    <div
      className={`${styles.orderDetailsSection} ${
        isThemeLight ? null : styles.orderDetailsSectionDark
      }`}>
      <div className={styles.sectionBtns}>
        <button className={styles.orderCmdBtn}>
          <LuArrowLeftSquare
            className={styles.icon}
            color={isThemeLight ? "black" : "white"}
          />
          <p style={{ all: "unset", color: isThemeLight ? "black" : "white" }}>
            Import Orders
          </p>
        </button>
        <button className={styles.orderCmdBtn}>
          <AiOutlineSend
            className={styles.icon}
            color={isThemeLight ? "black" : "white"}
          />
          <p style={{ all: "unset", color: isThemeLight ? "black" : "white" }}>
            Accept
          </p>
        </button>
        <button className={styles.orderCmdBtn}>
          <IoPrintOutline
            className={styles.icon}
            color={isThemeLight ? "black" : "white"}
          />
          <p style={{ all: "unset", color: isThemeLight ? "black" : "white" }}>
            Print
          </p>
          <IoIosArrowDown
            size={20}
            color={isThemeLight ? "black" : "white"}
            style={{ marginLeft: "6px" }}
          />
        </button>
        <button
          onClick={() => getData()}
          className={styles.refreshBtn + " " + styles.orderCmdBtn}>
          <RiRefreshLine size={20} />
          <p
            style={{
              all: "unset",
              marginLeft: "4px",
              color: "white",
            }}>
            Refresh
          </p>
        </button>
      </div>
      <div className={styles.tableContainer}>
        <div
          className={`${styles.tableHeader} ${
            isThemeLight ? null : styles.tableHeaderDark
          }`}>
          <div className={`${styles.item} ${styles.item1}`}>
            <input
              type="checkbox"
              name=""
              id=""
              onClick={() => setAllIsChecked()}
            />
          </div>
          <div className={`${styles.item} ${styles.item2}`}>
            <p className={styles.itemPara} style={{ marginRight: "auto" }}>
              Channal
            </p>
            <RiExpandUpDownFill
              size={16}
              color={isThemeLight ? "black" : "white"}
            />
            <TiFilter size={16} color={isThemeLight ? "black" : "white"} />
          </div>
          <div className={`${styles.item} ${styles.item3}`}>
            <p className={styles.itemPara} style={{ marginRight: "auto" }}>
              Order No
            </p>
            <RiExpandUpDownFill
              size={16}
              color={isThemeLight ? "black" : "white"}
            />
            <IoIosSearch size={16} color={isThemeLight ? "black" : "white"} />
          </div>
          <div className={`${styles.item} ${styles.item3}`}>
            <p className={styles.itemPara} style={{ marginRight: "auto" }}>
              Order Date
            </p>
            <RiExpandUpDownFill
              size={16}
              color={isThemeLight ? "black" : "white"}
            />
            <IoIosSearch size={16} color={isThemeLight ? "black" : "white"} />
          </div>
          <div className={`${styles.item} ${styles.item4}`}>
            <p className={styles.itemPara} style={{ marginRight: "auto" }}>
              City
            </p>
            <RiExpandUpDownFill
              size={16}
              color={isThemeLight ? "black" : "white"}
            />{" "}
          </div>
          <div className={`${styles.item} ${styles.item5}`}>
            <p className={styles.itemPara} style={{ marginRight: "auto" }}>
              Customer Name
            </p>
            <IoIosSearch size={16} color={isThemeLight ? "black" : "white"} />{" "}
          </div>
          <div className={`${styles.item} ${styles.item6}`}>
            <p className={styles.itemPara} style={{ marginRight: "auto" }}>
              Order Value
            </p>
            <RiExpandUpDownFill
              size={16}
              color={isThemeLight ? "black" : "white"}
            />{" "}
          </div>
          <div className={`${styles.item} ${styles.item7}`}>
            <p className={styles.itemPara} style={{ marginRight: "auto" }}>
              Status
            </p>
            <RiExpandUpDownFill
              size={16}
              color={isThemeLight ? "black" : "white"}
            />{" "}
          </div>
          <div className={`${styles.item} ${styles.item8}`}>
            <p className={styles.itemPara} style={{ marginRight: "auto" }}>
              Operation
            </p>
            <RiExpandUpDownFill
              size={16}
              color={isThemeLight ? "black" : "white"}
            />{" "}
          </div>
        </div>
        {getView()}
      </div>
      {getChangePageButtons()}
    </div>
  );
};

export default OrdersTableSection;
