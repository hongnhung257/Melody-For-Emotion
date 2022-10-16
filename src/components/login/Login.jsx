import React from "react";
import classNames from "classnames/bind";
import styles from "./login.module.scss";

const cx = classNames.bind(styles);

export default function Login() {
  const handleTransform = (par1, par2) => {
    const form1 = document.querySelector(`.${cx(`${par1}`)}`);
    const form2 = document.querySelector(`.${cx(`${par2}`)}`);
    form1.style = `
    transform:translateX(100%);
    z-index: 999;
    `;

    form2.style = `
    transform:translateX(0);
    z-index: 9999;
    `;
  };
  const handleOpenRegister = () => {
    handleTransform("login-form", "register-form");
  };
  const handleRegister = () => {
    handleTransform("register-form", "login-form");
  };

  const handleForgotPassword = () => {
    handleTransform("login-form", "forgotPassword-form");
  };

  const handleSendEmail = () => {
    handleTransform("forgotPassword-form", "newPassword-form");
  };

  const handleChangePass = () => {
    handleTransform("newPassword-form", "login-form");
  };

  return (
    <>
      <div className={cx("login")}>
        <div className={cx("main")}>
          {/* Login */}
          <div className={cx("login-form")}>
            <div className={cx("logo")}>
              <img
                src={require("./../../assets/images/Logo-Offical-gadient.png")}
                alt="logo"
              />
            </div>
            <h3 className={cx("title")}>Melody For Emotion</h3>
            <p className={cx("text")}>LOGIN</p>
            <div className={cx("form")}>
              <input
                type="text"
                placeholder="username"
                className={cx("form-input")}
              />
              <input
                type="password"
                placeholder="password"
                className={cx("form-input")}
              />
              <div className={cx("action")}>
                <button className={cx("btn_login")}>Sign in</button>
                <button
                  className={cx("btn_forgot")}
                  onClick={handleForgotPassword}
                >
                  Forgot Password
                </button>
              </div>
            </div>
            <div className={cx("social")}>
              <p>or continue with</p>
              <button>
                <img
                  src={require("./../../assets/images/flat-color-icons_google.png")}
                  alt=""
                />
              </button>
              <p className={cx("question")}>
                Don't have an account yet?{" "}
                <button onClick={handleOpenRegister}>Register for free</button>
              </p>
            </div>
          </div>

          {/* Register */}
          <div className={cx("register-form")}>
            <div className={cx("logo")}>
              <img
                src={require("./../../assets/images/Logo-Offical-gadient.png")}
                alt="logo"
              />
            </div>
            <h3 className={cx("title")}>Melody For Emotion</h3>
            <p className={cx("text")}>Register</p>
            <div className={cx("form")}>
              <input
                type="text"
                placeholder="username"
                className={cx("form-input")}
              />
              <input
                type="email"
                placeholder="email"
                className={cx("form-input")}
              />
              <input
                type="password"
                placeholder="password"
                className={cx("form-input")}
              />
              <input
                type="password"
                placeholder="retype password"
                className={cx("form-input")}
              />
              <div className={cx("action")}>
                <button className={cx("btn_register")} onClick={handleRegister}>
                  Register
                </button>
              </div>
            </div>
            <div className={cx("social")}>
              <p>or continue with</p>
              <button>
                <img
                  src={require("./../../assets/images/flat-color-icons_google.png")}
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className={cx("forgotPassword-form")}>
            <div className={cx("logo")}>
              <img
                src={require("./../../assets/images/Logo-Offical-gadient.png")}
                alt="logo"
              />
            </div>
            <h3 className={cx("title")}>Melody For Emotion</h3>
            <p className={cx("text")}>Forgot Password</p>
            <div className={cx("form")}>
              <input
                type="email"
                placeholder="new password"
                className={cx("form-input")}
              />

              <div className={cx("action")}>
                <button className={cx("btn_send")} onClick={handleSendEmail}>
                  Send
                </button>
              </div>
            </div>
            <div className={cx("social")}>
              <p className={cx("question")}>
                or back to <button>Sign in</button>
              </p>
              <p className={cx("question")}>
                Don't have an account yet? <button>Register for free</button>
              </p>
            </div>
          </div>

          {/* New password */}
          <div className={cx("newPassword-form")}>
            <div className={cx("logo")}>
              <img
                src={require("./../../assets/images/Logo-Offical-gadient.png")}
                alt="logo"
              />
            </div>
            <h3 className={cx("title")}>Melody For Emotion</h3>
            <p className={cx("text")}>Forgot Password</p>
            <div className={cx("form")}>
              <input
                type="password"
                placeholder="new password"
                className={cx("form-input")}
              />

              <input
                type="password"
                placeholder="retype new password"
                className={cx("form-input")}
              />

              <div className={cx("action")}>
                <button
                  className={cx("btn_change-Password")}
                  onClick={handleChangePass}
                >
                  Change Password
                </button>
              </div>
            </div>
            <div className={cx("social")}>
              <p className={cx("question")}>
                or back to <button>Sign in</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
