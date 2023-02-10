import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import sport1 from "../../../../assets/images/homepage/why-tab-img1.png";
import sport2 from "../../../../assets/images/homepage/why-tab-img2.png";
import sport3 from "../../../../assets/images/homepage/why-tab-img3.png";
import sport4 from "../../../../assets/images/homepage/why-tab-img4.png";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
const WhoBetherMobileSlider = () => {
  return (
    <div className="who-beter-slider">
      <Swiper
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h3 className="title">Protection for the future</h3>
          <Image src={sport1} alt="sport" />
          <p className="desc">
            By having a Baseline if something were to happen, and you had a hit
            to the head, you objectively know what damage was likely due to the
            hit. <br /> <br /> Whether that be for insurance, legal reference or
            therapeutic input.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="title">Health Optimisation</h3>
          <Image src={sport2} alt="sport" />
          <p className="desc">
            You can now measure the impact that exercise, diet, mindfulness has
            on your brain. <br /> <br />
            By measuring its impact you can find out what works for you to be
            the most mentally peak you can be. Noone likes feeling foggy, you
            now have the power and infomation to help change it.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="title">Identify changes before symptoms</h3>
          <Image src={sport3} alt="sport" />
          <p className="desc">
            By getting an assessment routinely you know your healthy variation
            in brain connectivity & when that changes from normal, you can look
            into why. <br /> <br /> We already know that brain activity changes
            even before symptoms emerge from things like dementia or even
            depression.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="title">Outcome prediction</h3>
          <Image src={sport4} alt="sport" />
          <p className="desc">
            By having multiple assessments, if you experience a brain health
            event like concussion, depression, PTSD; we&apos;ll be able to
            provide more accurate recovery timelines for you & your specific
            injury.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WhoBetherMobileSlider;
