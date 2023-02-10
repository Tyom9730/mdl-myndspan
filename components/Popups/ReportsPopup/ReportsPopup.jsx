import React, { useState } from "react";
import Button from "../../Button/Button";
import styles from "./ReportsPopup.module.scss";
import { CloseIcon } from "./../../Icons/CloseIcon";
import { PdfIcon } from "./../../Icons/PdfIcon";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import report1 from "../../../assets/images/homepage/report-1.png";
import report2 from "../../../assets/images/homepage/report-2.png";
import shape1 from "../../../assets/images/homepage/report-shape-1.png";
import shape2 from "../../../assets/images/homepage/report-shape-2.png";
import Image from "next/image";
import { WhiteArrow } from "../../Icons/WhiteArrow";

const ReportsPopup = ({ popupOpen, setPopupOpen }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const closePopup = () => {
    document.body.classList.remove("fixed");
    setPopupOpen(false);
  };

  return (
    <div className={styles["popop-overlay"]}>
      <div className="container-sm">
        <div className={styles["popup-body"]}>
          <div className={styles["popup-content"]}>
            <div className={styles["close-btn"]}>
              <Button variant={"no-line"} onClick={() => closePopup()}>
                <CloseIcon />
              </Button>
            </div>
            <h1 className={styles["title"]}>Sample report</h1>
            <div className={styles["tabs"]}>
              <div>
                <div
                  onClick={() => setSelectedTab(1)}
                  className={`${styles["tab"]} ${
                    selectedTab === 1 ? styles["active"] : ""
                  }`}
                >
                  <PdfIcon />
                  <span>Cognitive Health Analysis</span>
                </div>
                <div
                  onClick={() => setSelectedTab(2)}
                  className={`${styles["tab"]} ${
                    selectedTab === 2 ? styles["active"] : ""
                  }`}
                >
                  <PdfIcon />
                  <span>Brain Power Analysis</span>
                </div>
              </div>
            </div>
            <div className={styles["tabs-content"]}>
              {selectedTab === 1 ? (
                <div className="tab-slider">
                  <Swiper
                    slidesPerView={1}
                    pagination={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="tab-slider"
                    breakpoints={{
                      320: {
                        slidesPerView: "auto",
                        spaceBetween: 20,
                      },
                      768: {
                        pagination: {
                          type: "fraction",
                        },
                      },
                    }}
                  >
                    <SwiperSlide>
                      <Image src={report1} alt="report1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={report1} alt="report1" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              ) : (
                <div className="tab-slider">
                  <Swiper
                    slidesPerView={1}
                    pagination={{
                      type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="tab-slider"
                  >
                    <SwiperSlide>
                      <Image src={report2} alt="report1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={report2} alt="report1" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              )}
              <div className={styles["arrows"]}>
                <button
                  onClick={() => {
                    const x = document.querySelectorAll(".swiper-button-prev");
                    x.forEach((e) => {
                      e.click();
                    });
                  }}
                  className={styles["prev-btn"]}
                >
                  <WhiteArrow />
                </button>
                <button
                  onClick={() => {
                    const x = document.querySelectorAll(".swiper-button-next");
                    x.forEach((e) => {
                      e.click();
                    });
                  }}
                  className={styles["next-btn"]}
                >
                  <WhiteArrow />
                </button>
              </div>
            </div>
          </div>
          <Image src={shape1} alt="shape" className={styles["shape-1"]} />
          <Image src={shape2} alt="shape" className={styles["shape-2"]} />
        </div>
      </div>
    </div>
  );
};

export default ReportsPopup;
