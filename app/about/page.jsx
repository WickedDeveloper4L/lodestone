import styles from "./aboutPage.module.scss";
import React from "react";
import { roboto_mono } from "../layout";
import photo from "../assets/pexels-mart-production-7089392.jpg";
import Image from "next/image";

export const metadata = {
  title: "About us - Affinity Hospitals Limited",
  description: "Life, care.",
};
const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.header}>
        <div className={styles.spans}>
          <span className={styles.btn}>About Us</span>
          <span className={styles.slash}>/</span>
          <span className={styles.grey}>Our Mission, Our Why</span>
        </div>
        <div className={styles.heading}>
          <h1>Our mission, our why</h1>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.text}>
          <div className={styles.why}>
            <div className={styles.topic}>
              <p>Our why</p>
            </div>
            <div className={styles.desc}>
              <p>
                To support people and partners through the healthcare pathway to
                enable them to seize life’s opportunities and to improve life
                expectancy.
              </p>
            </div>
          </div>
          <div className={styles.why}>
            <div className={styles.topic}>
              <p>Our future</p>
            </div>
            <div className={styles.desc}>
              <p>
                <span className={styles.subTopic}>Innovation:</span> To be at
                the forefront of development of services as the healthcare
                provider of choice for patients, referrers and employees.
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                <span className={styles.subTopic}>Sustainability:</span> Through
                using integrated systems, efficiencies and expertise to achieve
                sustainable partnerships and growth.
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                <span className={styles.subTopic}>Integration:</span> To deliver
                long-term sustainable partnerships through excellence in
                clinical practice, learning and investment.
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                <span className={styles.subTopic}>Standards:</span> We will not
                compromise on quality, safety, or transparency in all that we
                do.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.photo}>
            <Image width={200} height={200} src={photo} alt="MRI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
