import Image from "next/image";
import React from "react";
import Button from "../../Button/Button";
import styles from "./Partners.module.scss";
import slide1 from "../../../assets/images/about-us/partner-1.png";
import slide2 from "../../../assets/images/about-us/partner-2.png";
import slide3 from "../../../assets/images/about-us/partner-3.png";
import slide4 from "../../../assets/images/about-us/partner-4.png";
import Link from "next/link";
const Partners = () => {
  return (
    <div className={styles["partners"]}>
      <div className="container">
        <div className={styles["main-content"]}>
          <h3 className={styles["title"]}>Our Partners</h3>
          <div className={styles["details"]}>
            <p className={styles["desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
              faucibus nunc aliquam venenatis, tellus sit mauris sapien sit.
            </p>
            <p className={styles["desc"]}>
              If you want to know more about our partner programs please get in
              touch, we’d love to hear from you.
            </p>
            <Link href="/contacts">
              <Button variant={"primary"} size={"large"}>
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles["sliders"]}>
        <div className={styles["slider"]}>
          <div className="marquee-block partners">
            <div className="marquee-inner to-left">
              <span>
                <div className="marquee-item">
                  <Image src={slide1} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide3} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide4} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide1} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide3} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide4} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide1} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
              </span>
              <span>
                <div className="marquee-item">
                  <Image src={slide1} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide3} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide4} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide1} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide3} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide4} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide1} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className={styles["slider"]}>
          <div className="marquee-block partners">
            <div className="marquee-inner to-right">
              <span>
                <div className={"marquee-item"}>
                  <Image src={slide1} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide3} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide4} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide1} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide3} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide4} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
              </span>
              <span>
                <div className="marquee-item">
                  <Image src={slide1} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide3} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide4} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide1} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide4} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide2} alt="slide" />
                </div>
                <div className="marquee-item">
                  <Image src={slide1} alt="slide" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
