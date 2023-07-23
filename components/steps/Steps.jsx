import React from "react";
import styles from "./steps.module.scss";
const Steps = () => {
  return (
    <div className={styles.main}>
      <span className={styles.title}>THE RACE TO REDUCE PRESSURE</span>

      <div className={styles.sections}>
        <div className={styles.section}>
          <div className={styles.first}>
            <span className={styles.numero}>01</span>
            <span className={styles.heading}>Overstretched services</span>
          </div>
          <div className={styles.second}>
            A rising need for diagnostic services, longer waiting lists and few
            healthcare providers close to patients' homes - has stretched us
            beyond capacity.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.first}>
            <span className={styles.numero}>02</span>
            <span className={styles.heading}>Under-resourced workforce</span>
          </div>
          <div className={styles.second}>
            The driving force behind all health-care services, an incredible
            team of people who deliver high quality care and support daily - now
            they themselves need more support.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.first}>
            <span className={styles.numero}>03</span>
            <span className={styles.heading}>
              Growing demaind for diagnostics
            </span>
          </div>
          <div className={styles.second}>
            Our ageing population, covid delays and an increased awareness of
            diagnostics means a rapidly growing demand on our already stretched
            services.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
