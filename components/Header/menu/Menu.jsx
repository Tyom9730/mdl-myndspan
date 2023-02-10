import React, { useState } from "react";
import styles from "./Menu.module.scss";
import vector from "../../../assets/images/homepage/Vector.png";
import Image from "next/image";
import MenuList from "./menuList/MenuList";
import Link from "next/link";

const Menu = ({ menuIsOpen }) => {
  const [securityVariables] = useState([
    { name: "FAQ", path: "/contacts#FAQs" },
  ]);
  return (
    <nav className={styles["nav"]}>
      <div
        className={`${
          menuIsOpen ? styles["left-section"] : styles["left-section-hide"]
        }`}
      >
        <div>
          <Image className={styles["face"]} src={vector} alt="website-logo" />
        </div>
      </div>
      <div
        className={`${
          menuIsOpen ? styles["right-section"] : styles["right-section-hide"]
        }`}
      >
        <MenuList />
        <ul className={styles["security-variables"]}>
          {securityVariables.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
