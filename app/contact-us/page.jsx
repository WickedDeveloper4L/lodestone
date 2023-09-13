import React from "react";
import styles from "./contact.module.scss";
import { roboto_condensed } from "../layout";

export const metadata = {
  title: "Reach us - Affinity Hospitals Limited",
  description: "Life, care.",
};
const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <span className={styles.title}>Contact us</span>
        <div className={styles.container}>
          <div className={styles.first}>
            <div className={styles.top}>
              <span className={styles.bold}>Central support office</span>
              <span className={styles.medium}>Affinity Hospitals Limited.</span>
              <span className={styles.medium}>Fifth floor</span>
              <span className={styles.medium}>80 hammersmith road</span>
              <span className={styles.medium}>London</span>
              <span className={styles.medium}>W14 8UD</span>
            </div>
            <div className={styles.mid}>
              <span className={styles.bold}>
                For general enquiries, call: +44 7452 117852
              </span>
              <span className={styles.bold}>
                For patient bookings, please call the central booking office:
                +44 7452 117852
              </span>
              <span className={styles.bold}>
                info@affinityhospitals.com - all patient enquiries
              </span>
              <span className={styles.bold}>
                Contact our customer care team for enquiries.
              </span>
              <span className={styles.medium}>
                Please let us know if you have any concerns with your patient
                experience. Your patient care is of the utmost importance to us.
              </span>
            </div>
          </div>{" "}
          <div className={styles.second}>
            <span className={styles.bold}>Press office</span>
            <span className={styles.medium}>
              The Affinity Hospitals Limited office line can be contacted on +44
              7452 117852 or info@affinityhospitals.com.
            </span>
            <span className={styles.medium}>
              Please note the phone line is manned 9am-5.30pm Monday to Friday
              so for urgent out of hours enquiries (including evenings, weekends
              and bank holidays).
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
