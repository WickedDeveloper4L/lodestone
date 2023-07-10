import React from "react";
import styles from "./contact.module.scss";
import { roboto_condensed } from "../layout";
const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <span className={styles.title}>Contact us</span>
        <div className={styles.container}>
          <div className={styles.first}>
            <div className={styles.top}>
              <span className={styles.bold}>Central support office</span>
              <span className={styles.medium}>Alliance Medical Limited</span>
              <span className={styles.medium}>The Woods</span>
              <span className={styles.medium}>Opus 40 Business Park</span>
              <span className={styles.medium}>Warwick</span>
              <span className={styles.medium}>CV34 5AH</span>
            </div>
            <div className={styles.mid}>
              <span className={styles.bold}>
                For general enquiries, call: 01926 482000
              </span>
              <span className={styles.bold}>
                For patient bookings, please call the central booking office:
                0808 1786864
              </span>
              <span className={styles.bold}>
                naccountsadmin@alliance.co.uk - all patient enquiries
              </span>
              <span className={styles.bold}>Contacting your local centre</span>
              <span className={styles.medium}>
                Please get in touch with your local diagnostic imaging centre
                directly.
              </span>
              <span className={styles.bold}>
                Contact our customer care team
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
              The Alliance Medical UK & Ireland press office line can be
              contacted on 0203 451 9126 or alliancemedical@fleishman.com.
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
