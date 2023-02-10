import React from "react";
import styles from "./PartnersScaning.module.scss";
import city1 from "../../../assets/images/contacts/city-1.png";
import city2 from "../../../assets/images/contacts/city-2.png";
import city3 from "../../../assets/images/contacts/city-3.png";
import Image from "next/image";
import Button from "../../Button/Button";
import Link from "next/link";
import { useWindowSize } from "./../../../hooks/UseWindowSize";

const PartnersScaning = () => {
  const width = useWindowSize();
  return (
    <div className={styles["partners-scaning"]}>
      <div className="container-sm">
        <div className={styles["content"]}>
          <h3 className={styles["title"]}>Partner’s scanning sites</h3>
          <div className={styles["cities"]}>
            <div className={styles["city"]}>
              <div className={styles["city-img"]}>
                <Image src={city1} alt="city" />
              </div>
              <div className={styles["details"]}>
                <h3 className={styles["name"]}>Birmingham</h3>
                {width > 576 ? (
                  <p className={styles["adress"]}>
                    IHN Building (formerly Aston <br /> Brain Centre) <br />
                    Birmingham <br /> B7 4BL, United Kingdom
                  </p>
                ) : (
                  <p className={styles["adress"]}>
                    24 Old Queen Street Birmingham SW1H 9HP United Kingdom
                  </p>
                )}
                <div className={styles["see-btn"]}>
                  <Link
                    href="https://goo.gl/maps/xK9Ep9ePYjauZ7G4A"
                    target="_blank"
                  >
                    <Button variant={"secondary"} size={"sm"}>
                      See map
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles["city"]}>
              <div className={styles["city-img"]}>
                <Image src={city2} alt="city" />
              </div>
              <div className={styles["details"]}>
                <h3 className={styles["name"]}>Toronto</h3>
                {width > 576 ? (
                  <p className={styles["adress"]}>
                    IHN Building (formerly Aston <br /> Brain Centre) <br />
                    Birmi
                  </p>
                ) : (
                  <p className={styles["adress"]}>
                    24 Old Queen Street London SW1H 9HP Canada
                  </p>
                )}
                <div className={styles["see-btn"]}>
                  <Link
                    href="https://goo.gl/maps/h4jJ55SVcqqxeaMV8"
                    target="_blank"
                  >
                    <Button variant={"secondary"} size={"sm"}>
                      See map
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles["city"]}>
              <div className={styles["city-img"]}>
                <Image src={city3} alt="city" />
              </div>
              <div className={styles["details"]}>
                <h3 className={styles["name"]}>London</h3>
                <p className={styles["comeing-soon"]}>Coming soon </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersScaning;
