import Link from "next/link";
import React, { useState } from "react";
import styles from "./MenuList.module.scss";

const MenuList = () => {
  const [list] = useState([
    { name: "Home", path: "/" },
    { name: "Our Service", path: "/our-service" },
    { name: "About us", path: "/about-us" },
    { name: "Contact us", path: "/contacts" },
  ]);
  return (
    <ul className={styles["menu-list"]}>
      {list?.map((item, index) => {
        return (
          <li className={styles["menu-list-item"]} key={index}>
            <Link href={item?.path}>{item?.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
