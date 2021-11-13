import React from "react";
import styles from "./Bio.module.scss";

const Bio = ({ img, name, tagline, role }) => {
  return (
    <div className={styles.bio}>
      <div className={styles.bioImage}>
        <img src={img} alt={`Image of ${name}`} />
      </div>
      <div className={styles.bioContent}>
        <p className={styles.bioContentName}>{name}</p>
        <p className={styles.bioContentTagline}>{tagline}</p>
        <p className={styles.bioContentRole}>{role}</p>
      </div>
    </div>
  );
};

export default Bio;
