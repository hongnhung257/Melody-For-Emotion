import React from "react";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
export default function Home() {
  return (
    <>
      <h1 className={cx("title")}>PlayList</h1>
      <div className={cx("content")}>
        <table className={cx("table")}>
          <thead>
            <tr>
              <td>#</td>
              <td>Title</td>
              <td>Artist</td>
              <td>time</td>
              <td>action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>The sound of a stream flowing</td>
              <td>elaxing River Sounds </td>
              <td>3:00 </td>
              <td className="d-flex">
                <FontAwesomeIcon
                  icon={faPlay}
                  className={cx("icon")}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={cx("icon")}
                ></FontAwesomeIcon>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>The sound of a stream flowing</td>
              <td>elaxing River Sounds </td>
              <td>3:00 </td>
              <td className="d-flex">
                <FontAwesomeIcon
                  icon={faPlay}
                  className={cx("icon")}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={cx("icon")}
                ></FontAwesomeIcon>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>The sound of a stream flowing</td>
              <td>elaxing River Sounds </td>
              <td>3:00 </td>
              <td className="d-flex">
                <FontAwesomeIcon
                  icon={faPlay}
                  className={cx("icon")}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={cx("icon")}
                ></FontAwesomeIcon>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>The sound of a stream flowing</td>
              <td>elaxing River Sounds </td>
              <td>3:00 </td>
              <td className="d-flex">
                <FontAwesomeIcon
                  icon={faPlay}
                  className={cx("icon")}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={cx("icon")}
                ></FontAwesomeIcon>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>The sound of a stream flowing</td>
              <td>elaxing River Sounds </td>
              <td>3:00 </td>
              <td className="d-flex">
                <FontAwesomeIcon
                  icon={faPlay}
                  className={cx("icon")}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={cx("icon")}
                ></FontAwesomeIcon>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>The sound of a stream flowing</td>
              <td>elaxing River Sounds </td>
              <td>3:00 </td>
              <td className="d-flex">
                <FontAwesomeIcon
                  icon={faPlay}
                  className={cx("icon")}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={cx("icon")}
                ></FontAwesomeIcon>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>The sound of a stream flowing</td>
              <td>elaxing River Sounds </td>
              <td>3:00 </td>
              <td className="d-flex">
                <FontAwesomeIcon
                  icon={faPlay}
                  className={cx("icon")}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={cx("icon")}
                ></FontAwesomeIcon>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>The sound of a stream flowing</td>
              <td>elaxing River Sounds </td>
              <td>3:00 </td>
              <td className="d-flex">
                <FontAwesomeIcon
                  icon={faPlay}
                  className={cx("icon")}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={cx("icon")}
                ></FontAwesomeIcon>
              </td>
            </tr>
          </tbody>
        </table>
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
      </div>
    </>
  );
}
