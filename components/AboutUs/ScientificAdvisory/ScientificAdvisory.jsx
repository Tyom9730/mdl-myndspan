import Image from "next/image";
import React, { useState } from "react";
import styles from "./ScientificAdvisory.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import shape from "../../../assets/images/about-us/shape-5.png";
import { ButtonBlackArrow } from "./../../Icons/ButtonBlackArrow";

const ScientificAdvisory = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className={styles["scientific-advisory"]}>
      <Image src={shape} alt="shape" />
      <h3 className={styles["title"]}>Scientific advisory board</h3>
      <div className={styles["members"]}>
        <div className={styles["members-imgs"]}>
          <div className="members-content-container scientific">
            <Swiper
              slidesPerView={"auto"}
              dir="rtl"
              spaceBetween={20}
              navigation={true}
              loopFillGroupWithBlank={true}
              loop={true}
              centeredSlides={false}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              <div>
                {data.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      {({ isActive }) => (
                        <div>
                          {isActive ? setSelectedItem(item) : null}
                          <Image src={item.img} alt="slider-img" />
                        </div>
                      )}
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
            {/* <div className={styles["arrows"]}>
              <button
                // onClick={() => {
                //   const x = document.querySelectorAll(".swiper-button-prev");
                //   x.forEach((e) => {
                //     e.click();
                //   });
                // }}
                className={styles["prev-btn"]}
              >
                <ButtonBlackArrow />
              </button>
              <button
                // onClick={() => {
                //   const x = document.querySelectorAll(".swiper-button-next");
                //   x.forEach((e) => {
                //     e.click();
                //   });
                // }}
                className={styles["next-btn"]}
              >
                <ButtonBlackArrow />
              </button>
            </div> */}
          </div>
        </div>
        <div className={styles["members-info"]}>
          <h3 className={styles["name"]}>{selectedItem?.name}</h3>
          <p className={styles["profession"]}>{selectedItem?.profession}</p>
          <p className={styles["desc"]}>{selectedItem?.desc1}</p>
          <p className={styles["desc"]}>{selectedItem?.desc2}</p>
          {/* <p className={styles["read-more"]}>Read more</p> */}
        </div>
      </div>
    </div>
  );
};

export default ScientificAdvisory;
