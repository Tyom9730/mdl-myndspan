import React from "react";
import ScrollProgressBar from "../../ScrollProgressBar/ScrollProgressBar";
import styles from "./Socials.module.scss";
import { LinkedinIcon } from "./../../Icons/LinkedinIcon";
import { TwitterIcon } from "./../../Icons/TwitterIcon";
import Image from "next/image";
import slide1 from "../../../assets/images/homepage/slide-1.png";
import slide2 from "../../../assets/images/homepage/slide-2.png";
import slide3 from "../../../assets/images/homepage/slide-3.png";
import slide4 from "../../../assets/images/homepage/slide-4.png";
import slide5 from "../../../assets/images/homepage/slide-5.png";
import Button from "../../Button/Button";
import Link from "next/link";

const Socials = () => {
  return (
    <div className={styles["socials"]}>
      <div className="container">
        <div className={styles["socials-header"]}>
          <div className={styles["content"]}>
            <div className={styles["icons"]}>
              <div className={styles["icon"]}>
                <Link
                  href="https://www.linkedin.com/company/mynd-span"
                  target="_blank"
                >
                  <LinkedinIcon />
                </Link>
              </div>
              {/* <div className={styles["icon"]}>
                <TwitterIcon />
              </div> */}
            </div>
            <h1 className={styles["title"]}>
              Linked<span>in</span>
            </h1>
          </div>
        </div>
      </div>
      <div className={styles["slider"]}>
        <div className="marquee-block homepage">
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
                <Image src={slide5} alt="slide" />
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
                <Image src={slide5} alt="slide" />
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
                <Image src={slide5} alt="slide" />
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
                <Image src={slide5} alt="slide" />
              </div>
              <div className="marquee-item">
                <Image src={slide1} alt="slide" />
              </div>
            </span>
          </div>
        </div>
        <div className={styles["visit-btn"]}>
          <Button variant={"secondary"} size="medium">
            VISIT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Socials;
