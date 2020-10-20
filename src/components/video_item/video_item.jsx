import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {

  return (
    <li className={styles.container}>
      <div className={styles.video}>
          
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
        <p className={styles.channel}>{snippet.channelTitle}</p>
          <p className={styles.title}>{snippet.title}</p>
        
        </div>
      </div>
    </li>
  );
};
export default VideoItem;
