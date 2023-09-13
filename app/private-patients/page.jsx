import React from "react";
import styles from "./private.module.scss";
import { FaFileMedicalAlt } from "react-icons/fa";
import { BsCalendar2Check, BsClockHistory, BsPinMap } from "react-icons/bs";
import Image from "next/image";
import SMALL from "../../assets/small_image.jpeg";
import Link from "next/link";
import Steps from "@/components/steps/Steps";

export const metadata = {
  title: "Private Patients",
  description: "Life, care.",
};
const page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.title}>
          <span className={styles.first}>Private Patient Scans</span>
          <span className={styles.line}></span>
          <span className={styles.second}>On-demand</span>
        </div>
      </div>
      <span className={styles.servicetitle}>Our Service:</span>
      <div className={styles.services}>
        <div className={styles.service}>
          <span className={styles.icon}>
            <BsPinMap />
          </span>
          <span className={styles.define}>20+ UK locations</span>
        </div>
        <div className={styles.service}>
          <span className={styles.icon}>
            <BsCalendar2Check />
          </span>
          <span className={styles.define}>Next day appointments</span>
        </div>

        <div className={styles.service}>
          <span className={styles.icon}>
            <FaFileMedicalAlt />
          </span>
          <span className={styles.define}>MRI, PET-CT and CT</span>
        </div>
        <div className={styles.service}>
          <span className={styles.icon}>
            <BsClockHistory />
          </span>
          <span className={styles.define}>20+ UK locations</span>
        </div>
      </div>

      <div className={styles.section2}>
        <div className={styles.two}>
          <span className={styles.twotitle}>
            Private Patient Scans On-demand
          </span>
          <span className={styles.twoline}></span>
          <span className={styles.text}>
            Get the scans you need, when you need them, at a price that suits.
          </span>
          <span className={styles.text}>
            We offer fast, high quality, reliable scans, with dedicated
            appointment slots everyday, and reports back in 24-48 hours.
          </span>
          <span className={styles.text}>
            From self-pay CT and MRI to PET-CT and private medical insurance
            pathways - our expert radiologists are always on hand as a
            designated point of contact.
          </span>
          <Link href="/contact-us" className={styles.link}>
            CONTACT US
          </Link>
          <span className={styles.text}>
            Email us at:{" "}
            <Link
              className={styles.textlink}
              target="_blank"
              href="mailto:info@affinityhospitals.com?subject=Private%20patient%20scan%20request"
            >
              info@affinityhospitals.com
            </Link>
          </span>
        </div>
        <Image
          width={200}
          height={200}
          src={SMALL}
          alt="photo rep"
          className={styles.image}
        />
      </div>
      <Steps />
    </div>
  );
};

export default page;
