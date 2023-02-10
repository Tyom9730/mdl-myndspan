import React, { useId, useState } from "react";
import styles from "./OurTeam.module.scss";
import PeopleBehind from "./../PeopleBehind/PeopleBehind";
import ScientificAdvisory from "./../ScientificAdvisory/ScientificAdvisory";
import Image from "next/image";
import brainImg from "../../../assets/images/about-us/brain.png";
import member1 from "../../../assets/images/about-us/member-1.png";
import member2 from "../../../assets/images/about-us/member-2.png";
import member3 from "../../../assets/images/about-us/member-3.png";
import member4 from "../../../assets/images/about-us/member-4.png";
const OurTeam = () => {
  const [membersData] = useState([
    {
      id: useId(),
      name: "Dr Alan Pierce 1",
      profession: "Neuroscientist Director, NeuroSports Labs",
      desc1: `Associate Professor Alan Pearce is the pre-eminent concussion
      researcher in Australia and internationally recognised for his work
      into mild brain injury in sport.`,
      desc2: `Dr. Pearce has a PhD in neurophysiology from the Department of
      Medicine at University of Western Australia and has since published
      over 200 publications. Dr. Pearce leads the Victoria based
      NeuroSports Labs which was established to support individuals,
      sporting teams, sporting bodies, and others impacted by mild brain
      injury/concussion, and is also an adjunct associate professor at La
      Trobe University.`,
      img: member1,
    },
    {
      id: useId(),
      name: "Dr Alan Pierce 2",
      profession: "Neuroscientist Director, NeuroSports Labs",
      desc1: `Associate Professor Alan Pearce is the pre-eminent concussion
      researcher in Australia and internationally recognised for his work
      into mild brain injury in sport.`,
      desc2: `Dr. Pearce has a PhD in neurophysiology from the Department of
      Medicine at University of Western Australia and has since published
      over 200 publications. Dr. Pearce leads the Victoria based
      NeuroSports Labs which was established to support individuals,
      sporting teams, sporting bodies, and others impacted by mild brain
      injury/concussion, and is also an adjunct associate professor at La
      Trobe University.`,
      img: member2,
    },
    {
      id: useId(),
      name: "Dr Alan Pierce 3",
      profession: "Neuroscientist Director, NeuroSports Labs",
      desc1: `Associate Professor Alan Pearce is the pre-eminent concussion
      researcher in Australia and internationally recognised for his work
      into mild brain injury in sport.`,
      desc2: `Dr. Pearce has a PhD in neurophysiology from the Department of
      Medicine at University of Western Australia and has since published
      over 200 publications. Dr. Pearce leads the Victoria based
      NeuroSports Labs which was established to support individuals,
      sporting teams, sporting bodies, and others impacted by mild brain
      injury/concussion, and is also an adjunct associate professor at La
      Trobe University.`,
      img: member3,
    },
    {
      id: useId(),
      name: "Dr Alan Pierce 4",
      profession: "Neuroscientist Director, NeuroSports Labs",
      desc1: `Associate Professor Alan Pearce is the pre-eminent concussion
      researcher in Australia and internationally recognised for his work
      into mild brain injury in sport.`,
      desc2: `Dr. Pearce has a PhD in neurophysiology from the Department of
      Medicine at University of Western Australia and has since published
      over 200 publications. Dr. Pearce leads the Victoria based
      NeuroSports Labs which was established to support individuals,
      sporting teams, sporting bodies, and others impacted by mild brain
      injury/concussion, and is also an adjunct associate professor at La
      Trobe University.`,
      img: member4,
    },
  ]);
  return (
    <div className={styles["our-team"]}>
      <Image src={brainImg} alt="brain" />
      <div className="container">
        <PeopleBehind />
        <ScientificAdvisory data={membersData} />
      </div>
    </div>
  );
};

export default OurTeam;
