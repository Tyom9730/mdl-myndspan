import React, { useEffect, useId, useState } from "react";
import styles from "./Homepage.module.scss";
import HeroSection from "./HeroSection/HeroSection";
import OurService from "./OurService/OurService";
import HowItWorks from "././HowItWorks/HowItWorks";
import WhyBother from "./WhyBother/WhyBother";
import Reviews from "./Reviews/Reviews";
import BookAnAppointment from "./BookAnAppointment/BookAnAppointment";
import Socials from "./Socials/Socials";
import img from "../../assets/images/homepage/hero-bg.png";
import img2 from "../../assets/images/homepage/hero-bg-sm.png";
import ScrollProgressBar from "./../ScrollProgressBar/ScrollProgressBar";
import client1 from "../../assets/images/homepage/client-1.png";
import client2 from "../../assets/images/homepage/client-2.png";
import client3 from "../../assets/images/homepage/client-3.png";
import client4 from "../../assets/images/homepage/client-4.png";

const Homepage = () => {
  const obj = {
    title: "Better <br /> brain health <span>now</span>",
    bgImg: img,
    bgImgSm: img2,
    desc: `Empower yourself with a detailed report of your brain's function,
    consisting of an assessment of your cognitive function and your
    brain connectivity with a quick 45-minute on-site appointment.
    <span aria-hidden="true" class="reports-cta"> See sample report</span>`,
    btn: true,
  };
  const [tabs] = useState([
    "Intro",
    "Our service",
    "How it works",
    "Why bother",
    "Reviews",
    "Socials",
  ]);
  const [clientsData] = useState([
    {
      id: useId(),
      name: "John Doe 1",
      profession: "Military Officer",
      desc: "It’s easy to understand and break down - anyone can get a scan and really start to track their brain health.",
      img: client1,
    },
    {
      id: useId(),
      name: "John Doe 2",
      profession: "Military Officer",
      desc: "It’s easy to understand and break down - anyone can get a scan and really start to track their brain health.",
      img: client2,
    },
    {
      id: useId(),
      name: "John Doe 3",
      profession: "Military Officer",
      desc: "It’s easy to understand and break down - anyone can get a scan and really start to track their brain health.",
      img: client3,
    },
    {
      id: useId(),
      name: "John Doe 4",
      profession: "Military Officer",
      desc: "It’s easy to understand and break down - anyone can get a scan and really start to track their brain health.",
      img: client4,
    },
  ]);
  return (
    <div className={styles["homepage-container"]}>
      <HeroSection obj={obj} />
      <OurService />
      <HowItWorks />
      <WhyBother />
      <Reviews data={clientsData} />
      <BookAnAppointment />
      <Socials />
      <ScrollProgressBar tabs={tabs} />
    </div>
  );
};

export default Homepage;
