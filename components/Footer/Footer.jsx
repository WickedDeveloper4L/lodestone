import Image from "next/image";
import styles from "./footer.module.scss";
import React from "react";
import logo from "../../assets/logoo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.credits}>
        <p>© Copyright 2023 Lodestone Patient Care Limited</p>
      </div>
      <div className={styles.logo}>
        <Image width={200} height={200} src={logo} alt="logo" />
      </div>
      <div className={styles.links}>
        <p>Privacy policy</p>
        <p>Cookies policy</p>
        <p>Terms and Conditions</p>
        <p>Modern Slavery Act Statement</p>
      </div>
    </div>
  );
};

export default Footer;
