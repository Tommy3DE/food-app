import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButtton from "./HeaderCartButtton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Apka do Szamki</h1>
        <HeaderCartButtton onClick = {props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Food Pic" />
      </div>
    </>
  );
};

export default Header;
