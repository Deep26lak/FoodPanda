import React from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";

import Button from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Panda</h1>
        <Button onclick={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} />
      </div>
    </>
  );
};

export default Header;
