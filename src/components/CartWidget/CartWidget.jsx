import React, { useContext } from "react";
import Icon from "../Icons/Icons";
import styles from "./CartWidget.module.scss";
import { CartContext } from "../../contexts/CartContext";
const CartWidget = () => {
  const { totalItems, setCartItems } = useContext(CartContext);
  return (
    <div onClick={()=>{setCartItems([])}} className="position-relative">
      <Icon
        name="cart"
        color="#C92071"
        size="18px"
        attributes={{
          stroke: "#C92071",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
        }}
      />
      {totalItems>0 && (
        <div
          className={`d-flex bg-error rounded-circle justify-content-center  ${styles.badge}`}
        >
          <span className={` fw-bold ${styles.badgeNumber}`} style={{}}>{totalItems}</span>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
