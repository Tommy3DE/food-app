import React from "react";
import mealsImage from "../../assets/meals.jpg";
import ReturnBtn from "../UI/ReturnBtn";
import classes from "./Header.module.css";
import HeaderCartButtton from "./HeaderCartButtton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Pyszniejsze</h1>
        <ReturnBtn/>
        <HeaderCartButtton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food Pic" />
      </div>
    </>
  );
};

export default Header;
