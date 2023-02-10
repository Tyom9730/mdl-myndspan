import React from "react";
import styles from "./OurStory.module.scss";
import Image from "next/image";
import story1 from "../../../assets/images/about-us/story-1.png";
import story2 from "../../../assets/images/about-us/story-2.png";
import story3 from "../../../assets/images/about-us/story-3.png";
import story4 from "../../../assets/images/about-us/story-4.png";
import shape from "../../../assets/images/about-us/shape-2.png";
import shape2 from "../../../assets/images/about-us/shape-3.png";
import shape3 from "../../../assets/images/about-us/shape-4.png";

const OurStory = () => {
  return (
    <div className={styles["our-story"]}>
      <div className="container">
        <div className={styles["section-1"]}>
          <div className={styles["details"]}>
            <h3 className={styles["title"]}>
              We started in the MEG manufacturing world where we knew of 30+
              years of research to say
            </h3>
            <p className={styles["desc"]}>
              MEG technology <br />
              has the power <br />
              to identify issues <br />
              before symptoms <br />
              even emerge.
            </p>
          </div>
          <div className={styles["detail-img"]}>
            <Image src={story1} alt="story" />
          </div>
        </div>
        <div className={styles["section-2"]}>
          <div className={styles["detail-img"]}>
            <Image src={story2} alt="story" />
          </div>
          <div className={styles["details"]}>
            <h3 className={styles["title"]}>
              {" Used by the world's elite scientists and neurosurgeons,"}
              <br />
              we wanted to help individuals get access to this
            </h3>
            <p className={styles["desc"]}>
              powerful technology, and empower them with information
              <br />
              about their own brain
            </p>
          </div>
          <Image src={shape} alt="shape" />
        </div>
        <div className={styles["section-3"]}>
          <div className={styles["details"]}>
            <p className={styles["desc"]}>
              We launched our first baseline brain health report <br />
              in 2022{" "}
              <span className={styles["title"]}>
                and grew into a team of five amazing people...
              </span>
            </p>
          </div>
          <div className={styles["detail-img"]}>
            <Image src={story3} alt="story" />
          </div>
          <Image src={shape2} alt="shape" />
        </div>
        <div className={styles["section-4"]}>
          <div className={styles["detail-img"]}>
            <Image src={story4} alt="story" />
          </div>
          <div className={styles["details"]}>
            <p className={styles["desc"]}>
              <span className={styles["title"]}>
                We use MEG, powerful technology that can reveal
              </span>
              amazing
              <br />
              things within the brain and inform the therapeutic pathway.
            </p>
          </div>
          <Image src={shape3} alt="shape" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
