import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import Login from "../login/Login";

const cx = classNames.bind(styles);
export default function Header() {
  const [isLogin, setIsLogin] = useState(true);
  
  const handleChangeInput = (e) => {
    const iconClose = document.querySelector(`.${cx("icon-close")}`);
    iconClose.classList.add(`${cx("active")}`);
  };
  const handleCloseInput = (e) => {
    const iconClose = document.querySelector(`.${cx("icon-close")}`);
    const inputText = document.querySelector(`.${cx("input-search")}`);

    inputText.value = "";
    iconClose.classList.remove(`${cx("active")}`);
  };
  return (
    <>
      <header className={cx("header")}>
        <Search></Search>
        <Link className={cx("timer")} to="/timer">
          <img
            src={require("./../../assets/images/icons8-clock 1.png")}
            alt=""
            className={cx("lock")}
          />
        </Link>
        {!isLogin ? (
          <div className={cx("authen")}>
            <Link to="/login" className={cx("btn-login")}>
              Login
            </Link>
          </div>
        ) : (
          <div className={cx("user")}>{Login.useState}</div>
        )}
      </header>
    </>
  );
}
