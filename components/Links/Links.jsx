import React from "react";
import styles from "./links.module.scss";
import Link from "next/link";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
const Links = () => {
  return (
    <div className={styles.main}>
      <div className={styles.navs}>
        <Link href="/community" className={styles.sidelink}>
          Community Diagnostic Center{" "}
          <span className={styles.arrow}>{">"}</span>
        </Link>
        <Link href="/services" className={styles.sidelink}>
          Our Services<span className={styles.arrow}>{">"}</span>
        </Link>
        <Link href="/private-patients" className={styles.sidelink}>
          Private Patients <span className={styles.arrow}>{">"}</span>
        </Link>
        <Link href="/patients" className={styles.sidelink}>
          For Patients <span className={styles.arrow}>{">"}</span>
        </Link>
        <Link href="/contact-us" className={styles.sidelink}>
          Contact us <span className={styles.arrow}>{">"}</span>
        </Link>
        <Link href="/about" className={styles.sidelink}>
          About us <span className={styles.arrow}>{">"}</span>
        </Link>
      </div>

      <div className={styles.socials}>
        <span className={styles.icon}>
          <BsFacebook />
        </span>
        <span className={styles.icon}>
          <BsTwitter />
        </span>
        <span className={styles.icon}>
          <BsLinkedin />
        </span>
      </div>
    </div>
  );
};

export default Links;
