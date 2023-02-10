import React from "react";
import styles from "./WhatYouGet.module.scss";
import Button from "../../Button/Button";
import cogAnalysis from "../../../assets/images/our-service/cognetive-analysis.png";
import brainAnalysis from "../../../assets/images/our-service/brain-analysis.png";
import analysis1 from "../../../assets/images/our-service/analysis-img-1.png";
import analysis2 from "../../../assets/images/our-service/analysis-img-2.png";
import analysis3 from "../../../assets/images/our-service/analysis-img-3.png";
import shape1 from "../../../assets/images/our-service/shape-1.png";
import shape2 from "../../../assets/images/our-service/shape-2.png";
import shape3 from "../../../assets/images/our-service/shape-3.png";
import shapeSm3 from "../../../assets/images/our-service/shape-3-sm.png";
import Image from "next/image";
import { HtmlIcon } from "../../Icons/HtmlIcon";
import { PdfIcon } from "../../Icons/PdfIcon";

const WhatYouGet = () => {
  return (
    <div className={styles["what-you-get"]}>
      <div className={styles["section-1"]}>
        <div className="container">
          <h1 className={styles["title"]}>
            What <span> you get</span>
          </h1>
          <div className={styles["report-types"]}>
            <div className={styles["report-card"]}>
              <h3 className={styles["card-title"]}>Baseline report</h3>
              <div className={styles["card-content"]}>
                <h3 className={styles["name"]}>Cognitive health analysis</h3>
                <div className={styles["card-img"]}>
                  <Image src={cogAnalysis} alt="cogAnalysis" />
                </div>
                <div className={styles["pagination"]}>
                  <p className={styles["adress"]}>
                    MYndspan LTD, 24 Old queen street, london, SW1H 9HP
                  </p>
                  <p className={styles["page"]}>Page4</p>
                </div>
              </div>
              <div className={styles["border-line"]} />
              <div className={styles["actions"]}>
                <div className={styles["export-icons"]}>
                  <PdfIcon />
                  <HtmlIcon />
                </div>
                <div className={styles["btn"]}>
                  <Button
                    variant={"primary"}
                    size={"sm"}
                    className="reports-cta"
                  >
                    See sample
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles["report-card"]}>
              <h3 className={styles["card-title"]}>Baseline report</h3>
              <div className={styles["card-content"]}>
                <h3 className={styles["name"]}>Brain wave analysis</h3>
                <div className={styles["card-img"]}>
                  <Image src={brainAnalysis} alt="brainAnalysis" />
                </div>
                <div className={styles["pagination"]}>
                  <p className={styles["adress"]}>
                    MYndspan LTD, 24 Old queen street, london, SW1H 9HP
                  </p>
                  <p className={styles["page"]}>Page4</p>
                </div>
              </div>
              <div className={styles["border-line"]} />
              <div className={styles["actions"]}>
                <div className={styles["export-icons"]}>
                  <PdfIcon />
                  <HtmlIcon />
                </div>
                <div className={styles["btn"]}>
                  <Button
                    variant={"primary"}
                    size={"sm"}
                    className="reports-cta"
                  >
                    See sample
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles["card-information"]}>
              <h3 className={styles["info-title"]}>
                Cognitive health analysis
              </h3>
              <p className={styles["info-desc"]}>
                In the cognitive function analysis we break down your results
                from each gamified task you played on the iPad and how they
                relate to functions like short term memory, attention and
                visuospatial skills.
              </p>
            </div>
            <div className={styles["card-information"]}>
              <h3 className={styles["info-title"]}>Brain wave analysis</h3>
              <p className={styles["info-desc"]}>
                {`In the brain wave analysis we take the data acquired during your
                brain scan and assess your brain waves and where in the brain
                they're present. We also measure the activity in your core
                neural networks like the Default Mode Network and Central
                Executive Networks.`}
              </p>
            </div>
          </div>
          <div className={styles["first-image-section"]}>
            <Image src={analysis1} alt="analysis1" />
            <Image src={shape1} alt="shape1" className={styles["shape"]} />
          </div>
          <div className={styles["insights"]}>
            <h3 className={styles["insights-title"]}>Insights that matter</h3>
            <p className={styles["insights-desc"]}>
              {`Find out what is hapenning inside your brain, and understand it's complex neural functioning in an easy to understand way.`}
            </p>
            <div className={styles["ai2"]}>
              <Image src={analysis2} alt="analysis2" />
            </div>
            <Image src={shape2} alt="shape2" className={styles["shape"]} />
          </div>
          <div className={styles["track-section"]}>
            <div className={styles["ai3"]}>
              <Image src={analysis3} alt="analysis3" />
            </div>
            <div className={styles["track"]}>
              <h3 className={styles["track-title"]}>
                Track your results over time
              </h3>
              <p className={styles["track-desc"]}>
                {`Track how your brain's activity changes over time to identify meaningful changes and be empowered to act on and improve your brain health.`}
              </p>
              <Image src={shape3} alt="shape3" className={styles["shape"]} />
              <Image
                src={shapeSm3}
                alt="shape3"
                className={styles["shape-sm"]}
              />
            </div>
          </div>
          <div className={styles["future"]}>
            <h3 className={styles["future-title"]}>The future</h3>
            <p className={styles["future-desc"]}>
              Discover the best evidence-based ways to improve your brain
              health, based on your unique brain activity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
