import React from "react";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/modal/Modal";
const cx = classNames.bind(styles);
export default function Home() {
  return (
    <>
      {/* <Modal></Modal> */}
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
      </div>
    </>
  );
}
