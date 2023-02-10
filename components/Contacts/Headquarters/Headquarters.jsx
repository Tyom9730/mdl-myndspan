import React from "react";
import Link from "next/link";
import Button from "../../Button/Button";
import styles from "./Headquarters.module.scss";
import { TwitterIcon } from "./../../Icons/TwitterIcon";
import { LinkedinIcon } from "./../../Icons/LinkedinIcon";
import Image from "next/image";
import london from "../../../assets/images/contacts/london.png";
import PartnersScaning from "./../PartnersScaning/PartnersScaning";

const Headquarters = () => {
  return (
    <div id="headquarters" className={styles["headquarters"]}>
      <div className="container-sm">
        <h1 className={styles["title"]}>Headquarters</h1>
        <div className={styles["content"]}>
          <div className={styles["details"]}>
            <div className={styles["info"]}>
              <p className={styles["name"]}>London</p>
              <p className={styles["adress"]}>
                24 Old Queen Street London SW1H 9HP United Kingdom
              </p>
              <div className={styles["see-map-btn"]}>
                <Link
                  href="https://goo.gl/maps/uPgHGsbkWsLt68U16"
                  target="_blank"
                >
                  <Button variant={"secondary"} size="sm">
                    See map
                  </Button>
                </Link>
              </div>
              <p className={styles["mail"]}>
                <a href="mailto:info@myndspan.com">info@myndspan.com</a>
              </p>
            </div>
            <div className={styles["socials"]}>
              {/* <div>
                <TwitterIcon />
                <span>Twitter</span>
              </div> */}
              <Link
                href="https://www.linkedin.com/company/mynd-span"
                target="_blank"
              >
                <LinkedinIcon />
                <span>Linkedin</span>
              </Link>
            </div>
          </div>
          <div className={styles["city-img"]}>
            <Image src={london} alt={"london"} />
          </div>
        </div>
      </div>
      <PartnersScaning />
    </div>
  );
};

export default Headquarters;
