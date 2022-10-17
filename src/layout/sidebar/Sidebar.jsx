import React from "react";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
export default function Sidebar() {
  return (
    <section className={cx("sidebar")}>
      <div className={cx("logo")}>
        <img
          src={require("./../../assets/images/Logo-Offical-gadient.png")}
          alt="logo"
        ></img>
        <p>Melody for emotion</p>
      </div>
      <div className={cx("inner")}>
        <ul className={cx("list")}>
          <li className={cx("item")}>
            <Link className={cx("link")}>
              <img
                src={require("./../../assets/images/icon-music.png")}
                alt=""
              />
              <p className={cx("text")}>Music</p>
            </Link>
          </li>
          <li className={cx("item")}>
            <Link className={cx("link")}>
              <img
                src={require("./../../assets/images/icon-sound.png")}
                alt=""
              />
              <p className={cx("text")}>Sound</p>
            </Link>
          </li>
          <li className={cx("item")}>
            <Link className={cx("link")}>
              <img src={require("./../../assets/images/Union.png")} alt="" />
              <p>Favorite</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
