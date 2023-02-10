import React from "react";
import styles from "./SafeHands.module.scss";
import { LockIcon } from "./../../Icons/LockIcon";

const SafeHands = () => {
  return (
    <div className={styles["safe-hands"]}>
      <div className="container">
        <div className={styles["content"]}>
          <LockIcon />
          <p className={styles["desc"]}>
            Your data is in safe hands. We do not sell your data. It is highly
            secured and only used to provide you with your brain assessments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafeHands;
