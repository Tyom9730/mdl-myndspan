import Image from "next/image";
import React from "react";
import Button from "../../Button/Button";
import { ArrowRightIcon } from "../../Icons/ArrowRightIcon";
import styles from "./NextPage.module.scss";
import shape from "../../../assets/images/homepage/next-shape.png";
import { useRouter } from "next/router";

const NextPage = ({ nextPageData }) => {
  const router = useRouter();
  const handleNextClick = () => {
    router.push(nextPageData.link);
  };
  return (
    <div className={styles["next-page"]}>
      <div className={styles["content"]}>
        {/* <Image
          className={`${styles["shape"]}  ${
            router.pathname === "/our-service" ||
            router.pathname === "/about-us"
              ? styles["right-side"]
              : null
          }`}
          src={shape}
          alt="shape"
        /> */}
        <Image
          className={`${styles["bg"]}  ${
            router.pathname === "/our-service" ? styles["mode"] : null
          }`}
          src={nextPageData.bgImg}
          alt="bg"
        />
        <h1 className={styles["title"]}>{nextPageData.title}</h1>

        <div className={styles["bg-shadow"]} />
        <div className={styles["next-btn"]}>
          <Button variant="primary" size="small" onClick={handleNextClick}>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NextPage;
