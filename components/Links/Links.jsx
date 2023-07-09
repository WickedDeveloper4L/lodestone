import React from "react";
import styles from "./links.module.scss";
import Link from "next/link";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
const Links = () => {
  return (
    <div className={styles.main}>
      <div className={styles.navs}>
        <Link href="/" className={styles.sidelink}>
          For patients <span className={styles.arrow}>{">"}</span>
        </Link>
        <Link href="/" className={styles.sidelink}>
          For clinicians <span className={styles.arrow}>{">"}</span>
        </Link>
        <Link href="/" className={styles.sidelink}>
          For referrers <span className={styles.arrow}>{">"}</span>
        </Link>
        <Link href="/" className={styles.sidelink}>
          Find a centre <span className={styles.arrow}>{">"}</span>
        </Link>
        <Link href="/" className={styles.sidelink}>
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
