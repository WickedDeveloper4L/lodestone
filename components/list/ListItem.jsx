"use client";
import styles from "./listItem.module.scss";
import React from "react";
import { roboto_condensed } from "@/app/layout";
import { roboto_mono } from "@/app/layout";

const ListItem = ({ heading, content, number }) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.heading}>
        <div className={styles.number}>
          <h1>{number}</h1>
        </div>
        <h1 className={roboto_mono.className}>{heading}</h1>
      </div>
      <div className={styles.content}>
        <p className={roboto_condensed.className}>{content}</p>
      </div>
    </div>
  );
};

export default ListItem;
