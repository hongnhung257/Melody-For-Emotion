import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import Search from "../search/Search";

const cx = classNames.bind(styles);
export default function Header() {
  const [isLogin, setIsLogin] = useState();
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

        <button className={cx("timer")}>
          <img
            src={require("./../../assets/images/icons8-clock 1.png")}
            alt=""
            className={cx("lock")}
          />
        </button>
        {!isLogin ? (
          <div className={cx("authen")}>
            <Link to="/login" className={cx("btn-login")}>
              Login
            </Link>
          </div>
        ) : (
          <div className={cx("user")}>username</div>
        )}
      </header>
    </>
  );
}
