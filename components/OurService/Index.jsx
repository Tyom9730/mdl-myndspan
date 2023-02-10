import React, { useId, useState } from "react";
import styles from "./OurServicePage.module.scss";
import img from "../../assets/images/our-service/hero-bg.png";
import img2 from "../../assets/images/our-service/hero-bg-sm.png";
import appointment1 from "../../assets/images/our-service/appointment-1.png";
import appointment2 from "../../assets/images/our-service/appointment-2.png";
import appointment3 from "../../assets/images/our-service/appointment-3.png";
import location1 from "../../assets/images/our-service/location-1.png";
import location2 from "../../assets/images/our-service/location-2.png";
import location3 from "../../assets/images/our-service/location-3.png";
import tecnhnology1 from "../../assets/images/our-service/tecnhnology-1.png";
import tecnhnology2 from "../../assets/images/our-service/tecnhnology-2.png";
import tecnhnology3 from "../../assets/images/our-service/tecnhnology-3.png";
import HeroSection from "../Homepage/HeroSection/HeroSection";
import OurServiceTabs from "./OurServiceTabs/OurServiceTabs";
import WhatYouGet from "./WhatYouGet/WhatYouGet";
import BookAnAppointment from "../Homepage/BookAnAppointment/BookAnAppointment";
import SafeHands from "./SafeHands/SafeHands";
import ScrollProgressBar from "../ScrollProgressBar/ScrollProgressBar";

const OurServicePage = () => {
  const obj = {
    title: "Empowering <br /> you to optimise  <br /><span>your brain</span>",
    bgImg: img,
    bgImgSm: img2,
    desc: `Our mission is to improve brain health for everyone. We want to <br /> empower you to manage your brain health with the latest technology.
        <br /><br />
        Led by world renowed scientists, clinicians and technologists.`,
    btn: false,
  };
  const [tabs] = useState(["Intro", "Our service", "What you get"]);

  const [ourServiceTabsData, setOurServiceTabsData] = useState([
    {
      title: "Appointment day",
      id: useId(),
      tabs: [
        {
          name: "Questionnaire",
          desc: "When you visit the location you have chosen, you will be given our ipad and you fill in simple questionnaire that will later help us make the insights even more appropriate. ",
          img: appointment1,
          id: 1,
        },
        {
          name: "Cognitive tests",
          desc: "You will get to play 5 games that will measure different areas of your brain like attention, working memory, visuospatial processing, short-term memory, working memory.",
          img: appointment2,
          id: 2,
        },
        {
          name: "Brain scan",
          desc: "A completely passive 10 min resting state MEG scan which measures brain activity with millisecond and millimetre accuracy giving incredibly accurate brain connectivity maps unique to you.",
          img: appointment3,
          id: 3,
        },
      ],
    },
    {
      title: "Technology",
      id: useId(),
      tabs: [
        {
          name: "Questionnaire",
          desc: "We ask questions like age, or if caffeine has been consumed, things we know change brain activity, so we take these things into account.",
          img: tecnhnology1,
          id: 1,
        },
        {
          name: "Cognitive tests",
          desc: "We have partnered with Cambridge Brain sciences to use Scientifically-validated gamified tasks that are backed by 25+ years of scientific research and more than 300 peer-reviewed studies.",
          img: tecnhnology2,
          id: 2,
        },
        {
          name: "MEG scan",
          desc: "Magnetoencephalography (MEG) scanners map your brain activity with millisecond and millimetre accuracy. This scanner has been used for 30+ years to unravel the mysteries of how the brain works and clinically for presurgical mapping. The scanner is completely passive.",
          img: tecnhnology3,
          id: 3,
        },
      ],
    },
    {
      title: "Locations",
      id: useId(),
      tabs: [
        {
          name: "Birmingham",
          desc: "Birmingham, United Kingdom We have partnered with Aston University to use their state-of-the-art MEG scanner to provide our services to the local area. ",
          img: location1,
          id: 1,
        },
        {
          name: "Toronto, Canada",
          desc: "We have partnered with SickKids Hospital to use their clinical MEG to provide our services to the local area.",
          img: location2,
          id: 2,
        },
        {
          name: "London",
          desc: "Coming soon! MYndspan's first flagship site in London, United Kingdom.",
          img: location3,
          id: 3,
        },
      ],
    },
  ]);

  return (
    <div className={styles["our-service-container"]}>
      <HeroSection obj={obj} />
      <OurServiceTabs data={ourServiceTabsData} />
      <WhatYouGet />
      <BookAnAppointment /> 
      <SafeHands />
      <ScrollProgressBar tabs={tabs} />
    </div>
  );
};

export default OurServicePage;
