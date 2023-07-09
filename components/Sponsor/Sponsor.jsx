import React from "react";
import styles from "./sponsor.module.scss";
import Image from "next/image";
import Sponsor1 from "../../assets/sponsor1.jpg";
import Sponsor2 from "../../assets/sponsor2.png";
import Sponsor3 from "../../assets/sponsor3.png";
import Sponsor4 from "../../assets/sponsor4.png";
import Sponsor5 from "../../assets/sponsor5.png";
import Sponsor6 from "../../assets/sponsor6.png";
const Sponsor = () => {
  return (
    <div className={styles.main}>
      <div className={styles.boxes}>
        <Image
          width={120}
          className={styles.img}
          src={Sponsor1}
          alt="sponsor"
        />
      </div>
      <div className={styles.boxes}>
        <Image
          width={120}
          className={styles.img}
          src={Sponsor2}
          alt="sponsor"
        />
      </div>
      <div className={styles.boxes}>
        <Image
          width={120}
          className={styles.img}
          src={Sponsor3}
          alt="sponsor"
        />
      </div>
      <div className={styles.boxes}>
        <Image
          width={120}
          className={styles.img}
          src={Sponsor4}
          alt="sponsor"
        />
      </div>
      <div className={styles.boxes}>
        <Image
          width={120}
          className={styles.img}
          src={Sponsor5}
          alt="sponsor"
        />
      </div>
      <div className={styles.boxes}>
        <Image
          width={120}
          className={styles.img}
          src={Sponsor6}
          alt="sponsor"
        />
      </div>
    </div>
  );
};

export default Sponsor;
