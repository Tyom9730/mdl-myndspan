import React from "react";
import styles from "./OurService.module.scss";
import Button from "../../Button/Button";
import Image from "next/image";
import sportsman from "../../../assets/images/homepage/sportsman.png";
import shape from "../../../assets/images/homepage/our-shape.png";
import { useWindowSize } from "../../../hooks/UseWindowSize";
import Link from "next/link";
const OurService = () => {
  const width = useWindowSize();

  return (
    <div id="section-2" className={styles["our-service"]}>
      <div className="container">
        <div className={styles["our-service-body"]}>
          <div className={styles["content"]}>
            <div className={styles["learn-more"]}>
              <h3 className={styles["title"]}>Our Service</h3>
              <p className={styles["desc"]}>
                Everything we do is backed by science and uses the latest
                cutting-edge technology to give you the most accurate
                information about how your brain is functioning.
              </p>
              <Link href="/our-service">
                <Button
                  variant={"secondary"}
                  size={width > 768 ? "large" : "mobile"}
                >
                  Learn more
                </Button>
              </Link>
            </div>
            <div className={styles["image"]}>
              <Image src={sportsman} alt="sportsman" />
              <div className={styles["info-mobile"]}>
                <p>
                  We use scientifically validated measures of cognition &
                  cutting-edge non-invasive brain scan technology.
                </p>
              </div>
            </div>
            <div className={styles["info"]}>
              <p>
                We use scientifically validated measures of cognition &
                cutting-edge non-invasive brain scan technology.
              </p>
            </div>
          </div>
        </div>
        <Image className={styles["shape"]} src={shape} alt="shape" />
      </div>
    </div>
  );
};

export default OurService;
