import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import websiteLogo from "../../assets/images/website-logo.png";
import websiteLogoCircle from "../../assets/images/website-logo-circle.png";
import Image from "next/image";
import Button from "../Button/Button";
import NavBarBotton from "./navBarButton/NavBarBotton";
import Menu from "./menu/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import { useWindowSize } from "./../../hooks/UseWindowSize";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const router = useRouter();
  const width = useWindowSize();

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
    if (sidebarOpen) {
      document
        .querySelector(".sidebar-root")
        .classList.remove("sidbar-container");
      document.querySelector("html").classList.remove("fixed");
    } else {
      document.querySelector(".sidebar-root").classList.add("sidbar-container");
      document.querySelector("html").classList.add("fixed");
    }
  };

  useEffect(() => {
    if (!menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuIsOpen]);

  return (
    <div className={styles["website-header"]}>
      <Menu menuIsOpen={menuIsOpen} />
      <div className="container">
        <div className={styles["header-container"]}>
          <div className={styles["website-logo"]}>
            <Link href="/">
              <Image src={websiteLogo} alt="website-logo" />
            </Link>
            <Image src={websiteLogoCircle} alt="websiteLogoCircle" />
          </div>
          <div className={styles["header-navigation"]}>
            <div className={styles["header-menu"]}>
              {menuIsOpen ? <h3>Menu</h3> : <h3>Close</h3>}
              <NavBarBotton
                toggle={() => setMenuIsOpen(!menuIsOpen)}
                menuIsOpen={menuIsOpen}
              />
            </div>
            <div className={styles["header-btn"]}>
              <Link
                href="https://ugqaihh1sul.typeform.com/to/e74MxpYN"
                target="_blank"
              >
                <Button
                  variant={"primary"}
                  size={width > 768 ? "large" : "mobile"}
                >
                  BOOK APPOINTMENT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
