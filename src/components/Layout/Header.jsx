import React from "react";
import styles from "./Header.module.css";
import mealsImages from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>FoodieBaba</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={styles["main-image"]}>
        <img src={mealsImages} alt="Collection of delicious foods!" />
      </div>
    </>
  );
};

export default Header;
