import Image from "next/image";
import styles from "./communityPage.module.scss";
import React from "react";
import CommunityPage from "@/components/community page/CommunityPage";

export const metadata = {
  title: "Lodestone community",
  description: "Life, care.",
};

const Community = () => {
  return (
    <div className={styles.community}>
      <CommunityPage />
    </div>
  );
};

export default Community;
