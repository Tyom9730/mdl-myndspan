import React, { useState, useEffect } from "react";
import styles from "./Reviews.module.scss";
import Image from "next/image";
import { ButtonBlackArrow } from "../../Icons/ButtonBlackArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Reviews = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  // useEffect(() => {
  //   if (width < 768) {
  //     const active = document.querySelector(".swiper-slide-active");
  //     const activeAtr = active.getAttribute("data-swiper-slide-index");

  //     active.classList.remove("swiper-slide-active");
  //     if (activeAtr == 3) {
  //       const activeTrue = document.querySelectorAll(
  //         "[data-swiper-slide-index='1']"
  //       );
  //       activeTrue.forEach((item) => {
  //         item.classList.add("swiper-slide-active");
  //       });
  //     } else if (activeAtr == 2) {
  //       const activeTrue = document.querySelectorAll(
  //         "[data-swiper-slide-index='0']"
  //       );
  //       activeTrue.forEach((item) => {
  //         item.classList.add("swiper-slide-active");
  //       });
  //     } else if (activeAtr == 1) {
  //       const activeTrue = document.querySelectorAll(
  //         "[data-swiper-slide-index='3']"
  //       );
  //       activeTrue.forEach((item) => {
  //         item.classList.add("swiper-slide-active");
  //       });
  //     } else if (activeAtr == 0) {
  //       const activeTrue = document.querySelectorAll(
  //         "[data-swiper-slide-index='2']"
  //       );
  //       activeTrue.forEach((item) => {
  //         item.classList.add("swiper-slide-active");
  //       });
  //     }
  //   }
  // });
  return (
    <div className={styles["reviews"]}>
      <div className="container">
        <div className={styles["reviews-body"]}>
          <div className={styles["content"]}>
            <h1 className={styles["title"]}>
              Our clients <br />
              <span>
                <span>and</span> what they have to say
              </span>
            </h1>
            <div className={styles["clients"]}>
              <div className="members-content-container">
                <Swiper
                  slidesPerView={"auto"}
                  dir="rtl"
                  spaceBetween={10}
                  navigation={true}
                  loopFillGroupWithBlank={true}
                  loop={true}
                  centeredSlides={false}
                  modules={[Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    320: {
                      slidesPerView: "auto",
                      spaceBetween: 10,
                      navigation: {
                        nextEl:
                          ".swiper-slide-duplicate-next" ||
                          ".swiper-slide-next",
                      },
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
              </div>
              <div className={styles["info"]}>
                <p className={styles["desc"]}>{selectedItem?.desc}</p>
                <div>
                  <p className={styles["name"]}>{selectedItem?.name}</p>
                  <p className={styles["work"]}>{selectedItem?.profession}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
