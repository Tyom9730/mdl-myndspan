import React from "react";
import ScrollProgressBar from "../../ScrollProgressBar/ScrollProgressBar";
import styles from "./HowItWorks.module.scss";
import Tabs from "./Tabs/Tabs";
import shape from "../../../assets/images/homepage/how-shape.png";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className={styles["how-it-works"]}>
      <div className="container">
        <div className={styles["how-it-works-body"]}>
          <div className={styles["content"]}>
            <h1 className={styles["title"]}>
              The <span>process</span>
            </h1>
            <div>
              <Tabs />
            </div>
          </div>
          <Image className={styles["shape"]} src={shape} alt="shape" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
