import React from "react";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";

const cx = classNames.bind(styles);
export default function Profile() {
  return (
    <div className={cx("profile-container")}>
      <div className={cx("row")}>
        <div className={cx("profile")}>
          <div className={cx("profile-info")}>
            <div className={cx("avatarBox")}>
              <img
                src={require("./../../assets/images/Avatar-am-nhac.jpg")}
                alt=""
                className={cx("image")}
              />
            </div>
            <div className={cx("infoBox")}>
              <div class="row my-2">
                <div class="col-lg-4 col-12 boldd">Name:</div>

                <div class="col-lg-8 col-12 b">Đặng Hồng Nhung</div>
              </div>

              <div class="row my-2">
                <div class="col-lg-4 col-12 boldd">Email:</div>

                <div class="col-lg-8 col-12 b">hongnhung250701@gmail.com</div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-12 boldd">Birthday:</div>

                <div class="col-lg-8 col-12 b">25-07-2001</div>
              </div>
              <div class="row my-2">
                <div class="col-lg-4 col-12 boldd">Hobbies:</div>

                <div class="col-lg-8 col-12 b">walking, play soccer</div>
              </div>
            </div>
          </div>

          <div className={cx("action")}>
            <button
              className={cx(
                "ModifyProfile",
                "profile-card__button",
                "button--blue",
                "js - message - btn"
              )}
            >
              Modify Profile
            </button>
            <button
              className={cx(
                "ChangePass",
                "profile-card__button",
                "button--blue",
                "js - message - btn"
              )}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
