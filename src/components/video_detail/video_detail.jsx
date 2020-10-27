import React from "react";
import styles from "./video_detail.module.css";

const Videodetail = ({ video }) => (
  <section className={styles.detail}>
    <iframe
    title="This is title for iFrame"
      className={styles.video}
      type="text/html"
      
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{video.snippet.title}</h2>
    <h2>{video.snippet.channelTitle}</h2>
    <pre className={styles.description}> {video.snippet.description}</pre>
  </section>
);

export default Videodetail;
