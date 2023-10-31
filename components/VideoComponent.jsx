// components/VideoComponent.js
import React from "react";
import styles from "../styles/VideoComponent.module.css";

const VideoComponent = () => {
  return (
    <div className={styles.backgroundVideo}>
      <video autoPlay loop muted>
        <source src="/pexels-roman-odintsov-5318768 (2160p).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.statement}>
        <h2>Pura tentación</h2>
      </div>
    </div>
  );
};

export default VideoComponent;
