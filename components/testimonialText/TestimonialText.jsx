import styles from "./testimonialText.module.scss";
import React from "react";
import quotes from "../../app/assets/icons8-double-quotes-100.png";
import Image from "next/image";

const TestimonialText = () => {
  return (
    <div className={styles.testimonialText}>
      <div className={styles.speech}>
        <div className={styles.quotes}>
          <Image src={quotes} alt="quotes" />
        </div>
        <p>
          Wonderful, clean, spacious building. Helpful, friendly, professional
          staff. I was looked after very well.
        </p>
      </div>
      <div className={styles.person}>
        <div className={styles.name}>
          <p>C. Hudson</p>
        </div>
        <div className={styles.title}>
          <p>MRI patient</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialText;
