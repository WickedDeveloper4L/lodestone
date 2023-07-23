"use client";
import styles from "./community.module.scss";
import React from "react";
import { roboto_mono } from "@/app/layout";
import { roboto_condensed } from "@/app/layout";
import Image from "next/image";
import patient from "../../app/assets/pexels-yunus-tuğ-14580770.jpg";
import scan from "../../app/assets/pexels-gustavo-fring-3985299.jpg";
import Link from "next/link";

const CommunityPage = () => {
  return (
    <div className={styles.communityPage}>
      <div className={styles.hero}>
        <div className={styles.heroImage}>
          <Image src={patient} alt="patient care" />
          <div className={styles.heroText}>
            <div>
              <h1 className={roboto_mono.className}>
                Bringing Community Diagnostic Centres to life
              </h1>
              <p className={roboto_condensed.className}>
                Your diagnostics partner for every step of the CDC journey
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.text}>
          <div className={styles.heading}>
            <h1 className={roboto_mono.className}>
              YOUR TRUSTED PARTNER FOR COMMUNITY DIAGNOSTIC CENTRES
            </h1>
          </div>
          <div className={styles.topic}>
            <p className={roboto_condensed.className}>
              As the front-runner in CDC provision we created the UK’s first
              community diagnostic centre. We now operate 8 multimodality CDCs
              across the UK; and 35 CDCs in Italy.
            </p>
          </div>
          <div className={styles.msg}>
            <p className={roboto_condensed.className}>
              Our trusted expertise, across 6 key themes, successfully meets
              today’s diagnostic challenges - whether that's small-scale spokes
              or large, multimodality sites.
            </p>
          </div>
          <div className={styles.list}>
            <div className={styles.listTopic}>
              <p className={roboto_condensed.className}>Our vision is clear:</p>
            </div>
            <ul className={roboto_condensed.className}>
              <li>To bring healthcare closer to the patient</li>
              <li>mprove patient outcomes</li>
              <li>Allow easier, more straight-forward referrals and triage</li>
              <li>
                Turn Community Diagnostic Centres into a reality for you and
                your patients.
              </li>
            </ul>
          </div>
          <div className={styles.buttons}>
            <Link href={"/contact-us"}>
              <button className={roboto_mono.className}>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={scan} alt="scan" />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
