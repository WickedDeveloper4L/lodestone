"use client";
import styles from "./findCenter.module.scss";
import React from "react";
import { roboto_mono } from "@/app/layout";
import { roboto_condensed } from "@/app/layout";
import Image from "next/image";
import map from "../../app/assets/61799fbdc420d747e355df0f_uk-map-1 (1).png";
import Link from "next/link";

const FindCenter = () => {
  return (
    <div className={styles.findCenter}>
      <div className={styles.text}>
        <div className={styles.heading}>
          <h1 className={roboto_mono.className}>Find a centre</h1>
        </div>
        <div className={styles.desc}>
          <p className={roboto_condensed.className}>
            Locate your nearest scan centre providing the imaging service you
            require.
          </p>
        </div>
        <div className={styles.button}>
          <Link href={"/contact-us"}>
            <button className={roboto_mono.className}>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className={styles.image}>
        <Image src={map} alt="map" />
      </div>
    </div>
  );
};

export default FindCenter;
