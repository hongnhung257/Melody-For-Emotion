import React, {useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./login.module.scss";
import axios from 'axios'
import jwt_decode from "jwt-decode"
import { useScript } from "../hooks/useScript";


const cx = classNames.bind(styles);

export default function Login() {

  //login
  const uname_login_Ref = useRef();
  const pass_login_Ref = useRef();
  const [dataLogin, setDataLogin] = useState([]);

  //register
  const uname_regis_Ref = useRef();
  const email_regis_Ref = useRef();
  const pass_regis_Ref = useRef();
  const cfpass_regis_Ref = useRef();
  const [acc, setAcc] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();
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

  
  useEffect(()=>{
    //login // get data from node
    axios.get("http://localhost:9000/login").then((res)=>{
      setDataLogin(res.data)
      //console.log(res.data)
    });
  }, [])

  const handleOpenRegister = () => {
    handleTransform("login-form", "register-form");
  };
  //register
  const handleRegister = () => {
    if(uname_regis_Ref.current.value.trim() == ""
    || email_regis_Ref.current.value.trim() == ""
    || pass_regis_Ref.current.value.trim() == "" 
    || cfpass_regis_Ref.current.value.trim() == ""){
      alert("Registration failed");
      return;
    }
    if(pass_regis_Ref.current.value != cfpass_regis_Ref.current.value){
      alert("Confirm failed");
      return;
    }
    acc.username = uname_regis_Ref.current.value
    acc.email = email_regis_Ref.current.value
    acc.password = pass_regis_Ref.current.value
    axios.post("http://localhost:9000/regis", acc)
    .then(res => console.log(res))
    .catch(err => console.log(err))

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

  //Login function

  const handleLogin = (e) => {
    try{
      dataLogin.forEach((item)=>{
        console.log("item:", item.username)
        if(item.username == uname_login_Ref.current.value
          && item.password == pass_login_Ref.current.value){
          alert("Login successful")
          navigate("/");
          throw '';
        }
        else{
          alert("Login fail!")
        }
      })
    }catch(err){
      console.log(err)
    }
  };

  //login with google account
  const googlebuttonref = useRef();
  const [user, setuser] = useState(false);
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_decode(userCred);
    console.log(payload);
    setuser(payload);
  };
  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: "451860819558-kd3ojmcb940jfls3n4fnop1peukdg02t.apps.googleusercontent.com", // here's your Google ID
      callback: onGoogleSignIn,
      auto_select: false ,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    });
    console.log(user.name)
    this.props.parentCallback(user.name);
    
  });

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
                ref={uname_login_Ref}
              />
              <input
                type="password"
                placeholder="password"
                className={cx("form-input")}
                ref={pass_login_Ref}
              />
              <div className={cx("action")}>
                <button className={cx("btn_login")} onClick={handleLogin}>
                  Sign in
                </button>
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
              <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //  height: "150px",
              }}
              >
                {!user && <div ref={googlebuttonref}
                ></div>}
                {user && (
                  navigate("/")
                )}
              </div>
              {/* <button>
                <img
                  src={require("./../../assets/images/flat-color-icons_google.png")}
                  alt=""
                />
              </button> */}
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
                ref={uname_regis_Ref}
              />
              <input
                type="email"
                placeholder="email"
                className={cx("form-input")}
                ref={email_regis_Ref}
              />
              <input
                type="password"
                placeholder="password"
                className={cx("form-input")}
                ref={pass_regis_Ref}
              />
              <input
                type="password"
                placeholder="retype password"
                className={cx("form-input")}
                ref={cfpass_regis_Ref}
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
                or back to <button onClick={handleChangePass}>Sign in</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
