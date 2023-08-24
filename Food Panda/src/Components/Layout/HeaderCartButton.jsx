import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/Cart-context";
const Button = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfcart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onclick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}>{numberOfcart}</span>
      {/* {props.children}  */}
    </button>
  );
};

export default Button;
