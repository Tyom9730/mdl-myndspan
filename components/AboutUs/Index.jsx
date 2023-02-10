import React, { useState } from "react";
import styles from "./AboutUsPage.module.scss";
import img from "../../assets/images/about-us/hero-bg.png";
import imgSm from "../../assets/images/about-us/brain-sm.png";
import OurStory from "./OurStory/OurStory";
import OurTeam from "./OurTeam/OurTeam";
import Partners from "./Partners/Partners";
import ScrollProgressBar from "../ScrollProgressBar/ScrollProgressBar";
import HeroSection from "../Homepage/HeroSection/HeroSection";

const AboutUsPage = () => {
  const obj = {
    title:
      "Science-led company, <br />on a mission to  <br /><span>improve brain health.</span>",
    bgImg: img,
    bgImgSm: imgSm,
    desc: "",
    btn: false,
  };

  const [tabs] = useState(["Intro", "Our story", "Our Team", "Partners"]);

  return (
    <div className={styles["about-us-container"]}>
      <HeroSection obj={obj} />
      <OurStory />
      <OurTeam />
      <Partners />
      <ScrollProgressBar tabs={tabs} />
    </div>
  );
};

export default AboutUsPage;
