import React from "react";
import styles from "./video_detail.module.css";

const Videodetail = ({ video }) => {
  return (
    <div>
      <section className={styles.detail}>
        <iframe
          title="This is title for iFrame"
          className={styles.video}
          type="text/html"
          width="100%"
          height="512px"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <h2>{video.snippet.title}</h2>
        <h2>{video.snippet.channelTitle}</h2>
        <hr />
        <pre className={styles.description}> {video.snippet.description}</pre>
      </section>
    </div>
  );
};

export default Videodetail;
