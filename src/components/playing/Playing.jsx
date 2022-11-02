import React from "react";
import classNames from "classnames/bind";
import styles from "./playing.module.scss";
const cx = classNames.bind(styles);
export default function Playing() {
  return (
    <div className={cx("playing-song")}>
      <div className={cx("player-box")}>
        <div className={cx("player-media")}>
          <img
            src={require("./../../assets/images/image.png")}
            alt=""
            className={cx("player-image")}
          />
        </div>
        <h3 className={cx("song-title")}>End of time</h3>
        <h3 className={cx("song-desc")}>K-391, Alan Walker & Ahrix</h3>
        <p className={cx("song-lyric")}>No, lyric</p>
        <div className={cx("progress")}>
          <input
            type="range"
            id="progress-bar"
            min="0"
            max=""
            value="0"
            className={cx("bar")}
          />
          <audio src="./files/holo.mp3" id="song"></audio>
        </div>
        <div className={cx("player-number")}>
          <span className={cx("player-remaining")}>0:00</span>
          <span className={cx("player-duration")}>0:00</span>
        </div>
      </div>
      <div className={cx("player-tool")}></div>
    </div>
  );
}
