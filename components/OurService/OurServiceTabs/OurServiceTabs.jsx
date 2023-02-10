import React, { useState } from "react";
import styles from "./OurServiceTabs.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import { ButtonBlackArrow } from "./../../Icons/ButtonBlackArrow";
import { BlackSmTriangle } from "../../Icons/BlackSmTriangle";

const OurServiceTabs = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(data[2].id);
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  console.log("open", open);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={styles["our-service-tabs"]}>
      <div className="container">
        <div className={styles["tabs"]}>
          {data?.map((elem) => {
            return (
              <div
                key={elem.id}
                onClick={() => setSelectedTab(elem.id)}
                className={`${styles["tab"]} ${
                  selectedTab === elem.id ? styles["active"] : ""
                }`}
              >
                <h3>{elem.title}</h3>
              </div>
            );
          })}
        </div>
        <div className={styles["tabs-dropdown"]}>
          <div className={styles["dropdown"]} onClick={handleOpen}>
            <div className={styles["dropdown-header"]}>
              <h3>
                {data.map((item) => {
                  return selectedTab === item.id ? item.title : null;
                })}
              </h3>
              <div
                className={`${styles["icon"]} ${
                  open ? styles["opened"] : null
                } `}
              >
                <BlackSmTriangle />
              </div>
            </div>
            <div className={styles["drodown-tabs"]}>
              {open ? (
                data?.map((elem) => {
                  return (
                    <div
                      key={elem.id}
                      onClick={() => setSelectedTab(elem.id)}
                      className={`${styles["tab"]} ${
                        selectedTab === elem.id ? styles["active"] : ""
                      }`}
                    >
                      <h3>{elem.title}</h3>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={styles["tabs-content"]}>
          <div className={styles["tab-info"]}>
            <div className={styles["details-section"]}>
              <div className={styles["pagination"]}>
                {data?.map((elem) => {
                  if (selectedTab === elem.id) {
                    return (
                      <p key={elem.id}>
                        <span> {selectedItem?.id} </span> / {elem?.tabs.length}
                      </p>
                    );
                  }
                })}
              </div>
              <div className={styles["details"]}>
                <h3>{selectedItem?.name}</h3>
                <p>{selectedItem?.desc}</p>
              </div>
            </div>
            <div className={styles["arrows"]}>
              <button
                onClick={() => {
                  const x = document.querySelectorAll(".swiper-button-prev");
                  x.forEach((e) => {
                    e.click();
                  });
                }}
                className={styles["prev-btn"]}
                disabled={selectedItem?.id === 1 ? true : false}
              >
                <ButtonBlackArrow />
              </button>
              <button
                onClick={() => {
                  const x = document.querySelectorAll(".swiper-button-next");
                  x.forEach((e) => {
                    e.click();
                  });
                }}
                className={styles["next-btn"]}
                disabled={selectedItem?.id === 3 ? true : false}
              >
                <ButtonBlackArrow />
              </button>
            </div>
          </div>
          <div className="tabs-content-container">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={26}
              navigation={true}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: "auto",
                  spaceBetween: 26,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1230: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {data?.map((elem) => {
                return (
                  <div key={elem.id}>
                    {selectedTab === elem.id ? (
                      <div>
                        {elem.tabs?.map((item) => {
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
                    ) : null}
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServiceTabs;
