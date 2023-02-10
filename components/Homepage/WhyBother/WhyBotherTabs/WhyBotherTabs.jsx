import React from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "./WhyBotherTabs.module.scss";
import sport1 from "../../../../assets/images/homepage/why-tab-img1.png";
import sport2 from "../../../../assets/images/homepage/why-tab-img2.png";
import sport3 from "../../../../assets/images/homepage/why-tab-img3.png";
import sport4 from "../../../../assets/images/homepage/why-tab-img4.png";
import { ArrowRightIcon } from "./../../../Icons/ArrowRightIcon";

const WhyBotherTabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className={styles["tabs-section"]}>
      <div className={styles["tabs"]}>
        <div
          onClick={() => setSelectedTab(1)}
          className={`${styles["tab"]} ${
            selectedTab === 1 ? styles["active"] : ""
          }`}
        >
          <p>
            {" "}
            <span>01</span> Protection for the future
          </p>
          <ArrowRightIcon />
        </div>
        <div
          onClick={() => setSelectedTab(2)}
          className={`${styles["tab"]} ${
            selectedTab === 2 ? styles["active"] : ""
          }`}
        >
          <p>
            <span>02</span> Health Optimisation
          </p>
          <ArrowRightIcon />
        </div>

        <div
          onClick={() => setSelectedTab(3)}
          className={`${styles["tab"]} ${
            selectedTab === 3 ? styles["active"] : ""
          }`}
        >
          <p>
            <span>03</span> Identify changes before symptoms
          </p>
          <ArrowRightIcon />
        </div>
        <div
          onClick={() => setSelectedTab(4)}
          className={`${styles["tab"]} ${
            selectedTab === 4 ? styles["active"] : ""
          }`}
        >
          <p>
            <span>04</span> Outcome prediction
          </p>
          <ArrowRightIcon />
        </div>
      </div>
      <div className={styles["tabs-content"]}>
        {selectedTab === 1 ? (
          <div className={styles["step-1"]}>
            <div className={styles["tab-image"]}>
              <Image src={sport1} alt="sport1" />
            </div>
            <p className={styles["desc"]}>
              By having a Baseline if something were to happen, and you had a
              hit to the head, you objectively know what damage was likely due
              to the hit. <br /> <br /> Whether that be for insurance, legal
              reference or therapeutic input.
            </p>
          </div>
        ) : selectedTab === 2 ? (
          <div className={styles["step-2"]}>
            <div className={styles["tab-image"]}>
              <Image src={sport2} alt="sport2" />
            </div>
            <p className={styles["desc"]}>
              You can now measure the impact that exercise, diet, mindfulness
              has on your brain. <br /> <br />
              By measuring its impact you can find out what works for you to be
              the most mentally peak you can be. Noone likes feeling foggy, you
              now have the power and infomation to help change it.
            </p>
          </div>
        ) : selectedTab === 3 ? (
          <div className={styles["step-3"]}>
            <div className={styles["tab-image"]}>
              <Image src={sport3} alt="sport3" />
            </div>
            <p className={styles["desc"]}>
              By getting an assessment routinely you know your healthy variation
              in brain connectivity & when that changes from normal, you can
              look into why. <br /> <br /> We already know that brain activity
              changes even before symptoms emerge from things like dementia or
              even depression.
            </p>
          </div>
        ) : (
          <div className={styles["step-4"]}>
            <div className={styles["tab-image"]}>
              <Image src={sport4} alt="sport4" />
            </div>
            <p className={styles["desc"]}>
              By having multiple assessments, if you experience a brain health
              event like concussion, depression, PTSD; we&apos;ll be able to
              provide more accurate recovery timelines for you & your specific
              injury.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyBotherTabs;
