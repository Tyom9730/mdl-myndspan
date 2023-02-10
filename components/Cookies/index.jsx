import React, { useEffect, useState } from "react";
import styles from "./Cookies.module.scss";
import Button from "../Button/Button";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const Cookies = () => {
  const [isActive, setActive] = useState(false);

  const handleAccept = () => {
    setActive(!isActive);
    setCookie("myndGDPR", "true", 90);
  };

  useEffect(() => {
    const myndCookie = getCookie("myndGDPR");
    if (myndCookie !== "true") {
      setActive(true);
    }
  }, []);

  return (
    isActive && (
      <div className={styles["cookies-wrap"]}>
        <div className={styles["cookies"]}>
          <h3 className={styles["cookies-desc"]}>
            This website is using cookies. <a href="#"> Learn More</a>
          </h3>
          <div>
            <Button
              variant={"primary"}
              size="sm"
              onClick={() => handleAccept()}
            >
              ACCEPT
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default Cookies;
