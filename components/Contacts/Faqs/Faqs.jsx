import React from "react";
import styles from "./Faqs.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { ContactFaq } from "../content";

const Faqs = () => {
  return (
    <div id="faqs" className={styles["faqs"]}>
      <div className="container-sm">
        <h1 className={styles["title"]} id="FAQs">
          FAQs
        </h1>
        <div className="faqs-accardion-section">
          <Accordion allowZeroExpanded>
            {ContactFaq.map((item) => (
              <AccordionItem key={item.id}>
                <AccordionItemHeading>
                  <AccordionItemButton>{item.title}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="desktop-item">
                    <p>{item.content}</p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
