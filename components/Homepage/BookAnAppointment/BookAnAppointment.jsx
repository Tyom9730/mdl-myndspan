import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../../Icons/ArrowRightIcon";
import styles from "./BookAnAppointment.module.scss";

const BookAnAppointment = () => {
  return (
    <div className={styles["book-an-appointment"]}>
      <div className="container">
        <div className={styles["content"]}>
          <div>
            <h3 className={styles["title"]}>Book an appointment</h3>
            <p className={styles["desc"]}>
              Be our early adopter and get the beta program for free!
            </p>
            <Link
              href="https://ugqaihh1sul.typeform.com/to/e74MxpYN"
              target="_blank"
            >
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAnAppointment;
