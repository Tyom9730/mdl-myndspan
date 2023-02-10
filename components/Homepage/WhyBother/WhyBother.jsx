import React from "react";
import styles from "./WhyBother.module.scss";
import WhyBotherTabs from "./WhyBotherTabs/WhyBotherTabs";
import shape from "../../../assets/images/homepage/why-shape.png";
import brain from "../../../assets/images/homepage/brain.png";
import Image from "next/image";
import WhoBetherMobileSlider from "./WhoBetherMobileSlider/WhoBetherMobileSlider";
import { useWindowSize } from "./../../../hooks/UseWindowSize";
const WhyBother = () => {
  const width = useWindowSize();

  return (
    <div className={styles["why-bother"]}>
      <div className="container">
        <div className={styles["why-bother-body"]}>
          <div className={styles["content"]}>
            <h1 className={styles["title"]}>
              Why <span>should I?</span>
            </h1>
            <h3 className={styles["subtitle-1"]}>
              The brain is the body’s most important organ
            </h3>
            <h3 className={styles["subtitle-2"]}>Let’s treat it that way!</h3>
             <WhyBotherTabs />
             <WhoBetherMobileSlider />
          </div>
          <Image className={styles["shape"]} src={shape} alt="shape" />
          <Image className={styles["brain"]} src={brain} alt="brain" />
        </div>
      </div>
    </div>
  );
};

export default WhyBother;
