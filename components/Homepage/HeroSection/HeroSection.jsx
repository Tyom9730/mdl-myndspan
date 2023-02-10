import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./HeroSection.module.scss";
import Button from "../../Button/Button";
import shape from "../../../assets/images/homepage/hero-shape.png";
import shapeSm from "../../../assets/images/homepage/hero-shape-sm.png";
import shape1 from "../../../assets/images/about-us/shape.png";
import shape1Sm from "../../../assets/images/about-us/shape-1-sm.png";
import Image from "next/image";
import { useRouter } from "next/router";
import ReportsPopup from "../../Popups/ReportsPopup/ReportsPopup";
import { useWindowSize } from "../../../hooks/UseWindowSize";

const HeroSection = ({ obj }) => {
  const router = useRouter();
  const [popupOpen, setPopupOpen] = useState(false);
  const width = useWindowSize();
  useEffect(() => {
    if (router.pathname === "/" || router.pathname === "/our-service") {
      const elements = document.querySelectorAll(".reports-cta");
      if (elements.length > 0) {
        console.log("Bind");
        elements.forEach((element) => {
          element.addEventListener("click", function () {
            setPopupOpen(true);
            document.body.classList.add("fixed");
          });
        });
      }
    }
    return () => {
      const elements = document.querySelectorAll(".reports-cta");
      if (elements.length > 0) {
        elements.forEach((element) => {
          element.removeEventListener("click", function () {
            setPopupOpen(true);
            document.body.classList.add("fixed");
          });
        });
      }
    };
  }, [router.pathname]);

  return (
    <>
      <div
        className={`${styles["hero-section"]}  ${
          router.pathname === "/about-us" ? styles["about-us-hero"] : ""
        }`}
        style={{
          backgroundImage:
            width > 576
              ? `url('${obj.bgImg?.src}')`
              : `url('${obj.bgImgSm?.src}')`,
        }}
      >
        {router.pathname === "/about-us" ? (
          <Image
            src={width > 768 ? obj.bgImg?.src : obj.bgImgSm?.src}
            alt="bg"
            className={styles["about-bg"]}
            layout={"fill"}
          />
        ) : null}
        <div className="container">
          <div className={styles["hero-section-body"]}>
            <div
              className={`${styles["content"]}  ${
                router.pathname === "/our-service"
                  ? styles["our-service-content"]
                  : router.pathname === "/news"
                  ? styles["news-content"]
                  : ""
              }`}
            >
              <div className={styles["info"]}>
                {router.pathname === "/news" ? (
                  <p className={styles["date"]}>{obj?.date}</p>
                ) : (
                  <></>
                )}
                <h3
                  className={styles["title"]}
                  dangerouslySetInnerHTML={{ __html: obj.title }}
                ></h3>
                <div
                  className={`${styles["desc-area"]} ${
                    router.pathname === "/our-service"
                      ? styles["our-service-desc"]
                      : ""
                  }`}
                >
                  <p
                    className={styles["desc"]}
                    dangerouslySetInnerHTML={{ __html: obj.desc }}
                  ></p>
                </div>
                {obj?.btn && (
                  <div className={styles["actions"]}>
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
                    <Link href="contacts">
                      <Button
                        variant={"secondary"}
                        size={width > 768 ? "large" : "mobile"}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles["background-shadow"]} />
        {router.pathname === "/about-us" ? (
          <Image
            className={styles["shape-about-us"]}
            src={width > 768 ? shape1 : shape1Sm}
            alt="shape"
          />
        ) : (
          <Image
            className={styles["shape"]}
            src={width > 768 ? shape : shapeSm}
            alt="shape"
          />
        )}
      </div>
      {popupOpen ? (
        <ReportsPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      ) : null}
    </>
  );
};

export default HeroSection;
