import React, { useEffect, useState } from "react";
import styles from "./ScrollProgressBar.module.scss";
import { useRouter } from "next/router";

const ScrollProgressBar = ({ tabs }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const onScroll = () => {
      var headquarters = document.getElementById("headquarters");
      var footer = document.getElementById("light-footer");
      if (router.pathname === "/contacts") {
        if (
          Number(headquarters.offsetTop) <= Number(window.scrollY + 485) &&
          Number(headquarters.offsetTop) + Number(headquarters.offsetHeight) >=
            Number(window.scrollY + 485)
        ) {
          setDarkMode(true);
        } else if (Number(footer.offsetTop) <= Number(window.scrollY + 485)) {
          setDarkMode(true);
        } else {
          setDarkMode(false);
        }
      }

      if (window.scrollY > 999) {
        let cordinat = String(window.scrollY)[0];
        setScrollTop(+cordinat);
      } else {
        setScrollTop(0);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="progress" className={styles["progress-bar"]}>
      {tabs.map((element, index) => {
        return (
          <div
            key={index}
            className={`${styles["tabs"]}  ${
              scrollTop > tabs.length - 1
                ? `${styles["lineLeft-last"]}`
                : scrollTop >= index
                ? styles["lineLeft"]
                : null
            }  ${darkMode ? styles["dark"] : null}`}
          >
            <h3
              className={`${
                scrollTop == index
                  ? styles["active"]
                  : scrollTop > tabs.length
                  ? null
                  : null
              }`}
            >
              {element}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollProgressBar;
