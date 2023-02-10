import React from "react";
import styles from "./ContactsHeroSection.module.scss";
import stamp from "../../../assets/images/contacts/stamp.png";
import brain from "../../../assets/images/contacts/brain.png";
import Image from "next/image";
import Button from "../../Button/Button";
import { useWindowSize } from "./../../../hooks/UseWindowSize";

const ContactsHeroSection = () => {
  const width = useWindowSize();
  return (
    <div className={styles["hero-section"]}>
      <div className="container">
        <h1 className={styles["title"]}>Contact us</h1>
        <div className={styles["form-section"]}>
          <div className={styles["header"]}>
            <div>
              <h3 className={styles["name"]}>MYndspan LTD</h3>
              <p className={styles["adress"]}>
                24 Old Queen Street London SW1H 9HP United Kingdom
              </p>
            </div>
            <div className={styles["stamp"]}>
              <Image src={stamp} alt="stamp" />
            </div>
          </div>
          <div className={styles["form"]}>
            <div className={styles["inputs-area"]}>
              <input type={"text"} placeholder="Full Name" />
              <input type={"text"} placeholder="Email" />
              <input
                type={"text"}
                placeholder="Message"
                className={styles["message"]}
              />
            </div>
            <div className={styles["checking-area"]}>
              <div className={styles["connect-reason"]}>
                <h3 className={styles["subtitle"]}>
                  Why are you contacting us?
                </h3>
                <div className={styles["reasons"]}>
                  <span className={styles["reason"]}>Appointment</span>
                  <span className={styles["reason"]}>Partnership</span>
                  <span className={styles["reason"]}>Other</span>
                </div>
              </div>
              <input
                type={"text"}
                placeholder="Message"
                className={styles["message-mobile"]}
              />
              <div className={styles["actions"]}>
                <div className={styles["radio"]}>
                  <label>
                    <input type="radio" />
                    {width > 576 ? (
                      <span>
                        Accept <span> Privacy</span>
                      </span>
                    ) : (
                      <span>
                        By ticking this box to consent to sharing your
                        information with us. Visit our{" "}
                        <span>Privacy Policy</span> for more details.
                      </span>
                    )}
                  </label>
                </div>
                <div className={styles["send-btn"]}>
                  <Button variant={"primary"} size="large">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={brain} alt="brain" />
    </div>
  );
};

export default ContactsHeroSection;
