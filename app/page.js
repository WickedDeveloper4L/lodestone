import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import React from "react";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
};

export default Home;
