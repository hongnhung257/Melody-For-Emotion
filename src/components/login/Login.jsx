import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./login.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const cx = classNames.bind(styles);

export default function Login() {
  const [formData, setFormData] = useState({});
  const [username, setUsername] = useState(false);
  const navigate = useNavigate();

  const {
    values,
    isValid,
    dirty,
    handleBlur,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please enter your username"),
      password: Yup.string().required("Please enter your passwords!"),
    }),
    onSubmit: (value) => {
      navigate("/");
      console.log(value);
    },
  });

  return (
    <>
      <div className={cx("login")}>
        <div className={cx("main")}>
          {/* Login */}
          <form className={cx("login-form")} onSubmit={handleSubmit}>
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
                id="username"
                name="username"
                placeholder="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cx(
                  `${
                    errors.username && touched.username
                      ? "input-errors"
                      : "form-input"
                  }`
                )}
              />
              {errors.username && touched.username ? (
                <div className={cx("errorMsg")}>{errors.username}</div>
              ) : null}
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className={cx(
                  `${
                    errors.password && touched.password
                      ? "input-errors"
                      : "form-input"
                  }`
                )}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <div className={cx("errorMsg")}>{errors.password}</div>
              ) : null}
              <div className={cx("action")}>
                <button className={cx("btn_login")}>Sign in</button>
                <Link
                  to="/forgotPassword"
                  className={cx("btn_forgot")}
                  type="submit"
                >
                  Forgot Password
                </Link>
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
                <NavLink to="/register">Register for free</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
