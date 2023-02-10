import React from "react";
import styles from "./PeopleBehind.module.scss";
import Image from "next/image";
import { LinkedinIcon } from "../../Icons/LinkedinIcon";
import imageCeo from "../../../assets/images/about-us/ceo.png";
import imageCfo from "../../../assets/images/about-us/cfo.png";
import imageCso from "../../../assets/images/about-us/cso.png";
import imageMegScientist from "../../../assets/images/about-us/meg_scientist.png";
import imageCom from "../../../assets/images/about-us/com.png";
import imageDataScientist from "../../../assets/images/about-us/data_scientist.png";

const PeopleBehind = () => {
  return (
    <div className={styles["people-behind"]}>
      <h1 className={styles["title"]}>People behind MYndspan</h1>
      <div className={styles["peoples"]}>
        <div className={styles["people"]}>
          <Image src={imageCeo} alt="Janne Huhtala" />
          <p className={styles["name"]}>Janne Huhtala</p>
          <div className={styles["work"]}>
            <p>CEO</p>
            <LinkedinIcon />
          </div>
        </div>
        <div className={styles["people"]}>
          <Image src={imageCfo} alt="Caitlin Baltzer" />
          <p className={styles["name"]}>Caitlin Baltzer</p>
          <div className={styles["work"]}>
            <p>CFO</p>
            <LinkedinIcon />
          </div>
        </div>
        <div className={styles["people"]}>
          <Image src={imageCso} alt="Dr. Ben Dunkley" />
          <p className={styles["name"]}>Dr. Ben Dunkley</p>
          <div className={styles["work"]}>
            <p>CSO</p>
            <LinkedinIcon />
          </div>
        </div>
        <div className={styles["people"]}>
          <Image src={imageMegScientist} alt="Dr. Gillian Roberts" />
          <p className={styles["name"]}>Dr. Gillian Roberts</p>
          <div className={styles["work"]}>
            <p>MEG Scientist</p>
            <LinkedinIcon />
          </div>
        </div>

        <div className={styles["people"]}>
          <Image src={imageCom} alt="Matthew Ventresca" />
          <p className={styles["name"]}>Matthew Ventresca</p>
          <div className={styles["work"]}>
            <p>COM</p>
            <LinkedinIcon />
          </div>
        </div>
        <div className={styles["people"]}>
          <Image src={imageDataScientist} alt="Samuel Hardy" />
          <p className={styles["name"]}>Samuel Hardy</p>
          <div className={styles["work"]}>
            <p>Data Scientist</p>
            <LinkedinIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleBehind;
