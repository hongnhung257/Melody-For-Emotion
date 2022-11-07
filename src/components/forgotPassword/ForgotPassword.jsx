import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ForgotPassword.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const cx = classNames.bind(styles);

export default function Login() {
  const [formData, setFormData] = useState({});
  const [username, setUsername] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    if (!username) {
      console.log("fail");
    } else {
      console.log("success");
      navigate("/");
    }
  };

  const {
    values,
    isValid,
    dirty,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Please enter your Email!")
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          "Please enter a valid email address !"
        ),
    }),
    onSubmit: (value) => {
      navigate("/changePassword");
    },
  });

  return (
    <>
      <div className={cx("login")}>
        <div className={cx("main")}>
          {/* Forgot password */}
          <form className={cx("forgotPassword-form")} onSubmit={handleSubmit}>
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
                id="email"
                name="email"
                placeholder="email"
                className={cx(
                  `${
                    errors.email && touched.email
                      ? "input-errors"
                      : "form-input"
                  }`
                )}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <div className={cx("errorMsg")}>{errors.email}</div>
              ) : null}
              <div className={cx("action")}>
                <button className={cx("btn_send")} type="submit">
                  Send
                </button>
              </div>
            </div>
            <div className={cx("social")}>
              <p className={cx("question")}>
                or back to <Link to="/login">Sign in</Link>
              </p>
              <p className={cx("question")}>
                Don't have an account yet?{" "}
                <Link to="/register">Register for free</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
