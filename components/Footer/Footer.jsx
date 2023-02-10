import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import websiteLogo from "../../assets/images/website-logo.png";
import websiteLogoDark from "../../assets/images/website-logo-dark.png";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import NextPage from "./NextPage/NextPage";
import { useRouter } from "next/router";

const Footer = ({ nextPageData }) => {
  const router = useRouter();

  return (
    <div className={styles["footer"]}>
      <div
        id={router.pathname === "/contacts" ? "light-footer" : ""}
        className={`${styles["main-section"]} ${
          router.pathname === "/contacts" ? styles["light"] : ""
        }`}
      >
        <div className={styles["website-logo"]}>
          {router.pathname === "/contacts" ? (
            <Image src={websiteLogoDark} alt="websiteLogo" />
          ) : (
            <Image src={websiteLogo} alt="websiteLogo" />
          )}
          <p className={styles["desc"]}>
            Empowering you with the richest information about your brain and how
            it’s functioning.
          </p>
          <div className={styles["icons"]}>
            {/* <TwitterIcon /> */}
            <Link
              href="https://www.linkedin.com/company/mynd-span"
              target="_blank"
            >
              <LinkedinIcon />
            </Link>
          </div>
        </div>
        <div className={styles["links"]}>
          <div className={styles["links-line"]}>
            <h3 className={styles["title"]}>Quick links</h3>
            <Link href="/">Home </Link>
            <Link href="/our-service">Our service</Link>
            <Link href="/about-us">About us</Link>
            <Link href="/contacts">Contact</Link>
          </div>
          <div className={styles["links-line"]}>
            <h3 className={styles["title"]}>Useful links</h3>
            <Link href="/contacts?#FAQs">FAQ</Link>
            {/* <a href="#">Privacy policy</a>
            <a href="#">Terms & Conditions</a> */}
          </div>
        </div>
        <div className={styles["border-line"]} />
      </div>
      <div className={styles["next-page"]}>
        <NextPage nextPageData={nextPageData} />
      </div>
    </div>
  );
};

export default Footer;
