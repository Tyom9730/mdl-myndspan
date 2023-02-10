import React, { useState } from "react";
import styles from "./NavBarBotton.module.scss";

const NavBarBotton = ({ toggle, menuIsOpen }) => {
  return (
    <div className={styles["menu-button"]} onClick={toggle}>
      <div
        className={`${
          menuIsOpen ? styles["line-top"] : styles["transform-top"]
        }`}
      ></div>
      <div
        className={`${
          menuIsOpen ? styles["line-bootom"] : styles["transform-buttom"]
        }`}
      ></div>
    </div>
  );
};

export default NavBarBotton;
