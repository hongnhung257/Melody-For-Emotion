import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
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
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Please enter your username")
        .min(6, "username must be at least 6 characters."),

      email: Yup.string()
        .required("Please enter your Email!")
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          "Please enter a valid email address !"
        ),
      password: Yup.string()
        .required("Please enter your password")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,25}$/,
          "Password must have at least 8 characters and contain at least one letter, one number and a special character"
        ),
      confirmPassword: Yup.string()
        .required("Please enter your confirm password!")
        .oneOf([Yup.ref("password"), null], "password must match"),
    }),
    onSubmit: (value) => {
      navigate("/login");
    },
  });

  return (
    <>
      <div className={cx("login")}>
        <div className={cx("main")}>
          {/* Register */}
          <form className={cx("register-form")} onSubmit={handleSubmit}>
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
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirm password"
                className={cx(
                  `${
                    errors.confirmPassword && touched.confirmPassword
                      ? "input-errors"
                      : "form-input"
                  }`
                )}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className={cx("errorMsg")}>{errors.confirmPassword}</div>
              ) : null}
              <div className={cx("action")}>
                <button
                  disabled={handleSubmit}
                  type="submit"
                  className={cx("btn_register")}
                  // disabled={!(isValid && dirty)}

                  // onClick={() => setOpenModal(true)}
                >
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
          </form>
        </div>
      </div>
    </>
  );
}
