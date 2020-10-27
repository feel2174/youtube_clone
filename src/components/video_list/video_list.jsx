import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";


const VideoList = ({ videos, onVideoClick, display }) => {
  const displayType = display === 'list' ?  <p className={styles.text}>다음 동영상</p> : null
  return (
    <div>
      <div>{displayType}</div>
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
    </div>
  );
};


export default VideoList;
