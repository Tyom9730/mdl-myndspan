import React, { useState } from "react";
import styles from "./ContactsPage.module.scss";
import ContactsHeroSection from "./ContactsHeroSection/ContactsHeroSection";
import Headquarters from "./Headquarters/Headquarters";
import Faqs from "./Faqs/Faqs";
import ScrollProgressBar from "../ScrollProgressBar/ScrollProgressBar";

const ContactsPage = () => {
  const [tabs] = useState([
    "Contact us",
    "Headquarters",
    "Partner’s sites",
    "FAQ",
  ]);
  return (
    <div className={styles["contacts-page"]}>
      <ContactsHeroSection />
      <Headquarters />
      <Faqs />
      <ScrollProgressBar tabs={tabs} />
    </div>
  );
};

export default ContactsPage;
