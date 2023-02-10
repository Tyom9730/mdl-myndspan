import React from "react";
import { useState } from "react";
import { ArrowRightIcon } from "../../../Icons/ArrowRightIcon";
import { BrainIcon } from "../../../Icons/BrainIcon";
import { MapIcon } from "../../../Icons/MapIcon";
import { OfficeIcon } from "../../../Icons/OfficeIcon";
import styles from "./Tabs.module.scss";
import { BlackSmArrow } from "./../../../Icons/BlackSmArrow";
import { useWindowSize } from "./../../../../hooks/UseWindowSize";
const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const width = useWindowSize();

  return (
    <div className={styles["tabs-section"]}>
      <div className={styles["tabs"]}>
        <div
          onClick={() => setSelectedTab(1)}
          className={`${styles["tab"]} ${
            selectedTab === 1 ? styles["active"] : ""
          }`}
        >
          <MapIcon />
          <p>1. Visit Our Site</p>
          <BlackSmArrow />
        </div>
        {width <= 768 && selectedTab === 1 ? (
          <div className={`${styles["step-1"]} ${styles["step"]}`}>
            <h3 className={styles["title"]}>
              Book an appointment and choose one of our sites
            </h3>
            <p className={styles["desc"]}>
              Currently, we are scanning beta users in Birmingham and Toronto
              for free. Sign up for a chance to be a beta user at one of our
              sites below.
            </p>
            <div className={styles["cities"]}>
              <div>
                <p>Birmingham</p>
                <ArrowRightIcon />
              </div>
              <div>
                <p>Toronto</p>
                <ArrowRightIcon />
              </div>
              <div>
                <p>London</p>
                <div className={styles["badge"]}>Coming soon</div>
              </div>
            </div>
          </div>
        ) : null}
        <div
          onClick={() => setSelectedTab(2)}
          className={`${styles["tab"]} ${
            selectedTab === 2 ? styles["active"] : ""
          }`}
        >
          <BrainIcon />
          <p>2. Brain Assessment</p>
          <BlackSmArrow />
        </div>
        {width <= 768 && selectedTab === 2 ? (
          <div className={`${styles["step-2"]} ${styles["step"]}`}>
            <h3 className={styles["title"]}>
              Assessment consists of two parts
            </h3>
            <div>
              <h3 className={styles["subtitle"]}>Cognitive assessment</h3>
              <p className={styles["desc"]}>
                You will simply fill in the questionaire to give us some context
                for understanding your brain and it’s connectivity, and play few
                games on our ipad app which will assess cognitive functions like
                short term memory and visuospatial skills.
              </p>
            </div>
            <div>
              <h3 className={styles["subtitle"]}>Brain scan</h3>
              <p className={styles["desc"]}>
                You will sit for a 10 minute MEG scan, completely passive, no
                messy EEG fell, painless, noiseless and the hardest part is not
                falling asleep!
              </p>
            </div>
          </div>
        ) : null}
        <div
          onClick={() => setSelectedTab(3)}
          className={`${styles["tab"]} ${
            selectedTab === 3 ? styles["active"] : ""
          }`}
        >
          <OfficeIcon />
          <p>3. Brain Function Report</p>
          <BlackSmArrow />
        </div>
        {width <= 768 && selectedTab === 3 ? (
          <div className={`${styles["step-3"]} ${styles["step"]}`}>
            <h3 className={styles["title"]}>
              Your results will arrive within a day
            </h3>
            <p className={styles["desc"]}>
              We combine the analysis into an easy to read and understand report
              about your brain. We email you within 24 hours that your report is
              available and ready for download in your client portal.
            </p>
            <div className={styles["cities"]}>
              <div>
                <p>Cognitive function analysis</p>
                <ArrowRightIcon />
              </div>
              <div>
                <p>Brain Wave and Connectivity analysis</p>
                <ArrowRightIcon />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className={styles["tabs-content"]}>
        {width > 567 ? (
          selectedTab === 1 ? (
            <div className={styles["step-1"]}>
              <h3 className={styles["title"]}>
                Book an appointment and choose one of our sites
              </h3>
              <p className={styles["desc"]}>
                Currently, we are scanning beta users in Birmingham and Toronto
                for free. Sign up for a chance to be a beta user at one of our
                sites below.
              </p>
              <div className={styles["cities"]}>
                <div>
                  <p>Birmingham</p>
                  <ArrowRightIcon />
                </div>
                <div>
                  <p>Toronto</p>
                  <ArrowRightIcon />
                </div>
                <div>
                  <p>London</p>
                  <div className={styles["badge"]}>Coming soon</div>
                </div>
              </div>
            </div>
          ) : selectedTab === 2 ? (
            <div className={styles["step-2"]}>
              <h3 className={styles["title"]}>
                Assessment consists of two parts
              </h3>
              <div>
                <h3 className={styles["subtitle"]}>Cognitive assessment</h3>
                <p className={styles["desc"]}>
                  You will simply fill in the questionaire to give us some
                  context for understanding your brain and it’s connectivity,
                  and play few games on our ipad app which will assess cognitive
                  functions like short term memory and visuospatial skills.
                </p>
              </div>
              <div>
                <h3 className={styles["subtitle"]}>Brain scan</h3>
                <p className={styles["desc"]}>
                  You will sit for a 10 minute MEG scan, completely passive, no
                  messy EEG fell, painless, noiseless and the hardest part is
                  not falling asleep!
                </p>
              </div>
            </div>
          ) : (
            <div className={styles["step-3"]}>
              <h3 className={styles["title"]}>
                Your results will arrive within a day
              </h3>
              <p className={styles["desc"]}>
                We combine the analysis into an easy to read and understand
                report about your brain. We email you within 24 hours that your
                report is available and ready for download in your client
                portal.
              </p>
              <div className={styles["cities"]}>
                <div>
                  <p>Cognitive function analysis</p>
                  <ArrowRightIcon />
                </div>
                <div>
                  <p>Brain Wave and Connectivity analysis</p>
                  <ArrowRightIcon />
                </div>
              </div>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Tabs;
