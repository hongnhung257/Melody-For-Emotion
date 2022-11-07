// import React, {useState, useEffect, useRef} from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import classNames from "classnames/bind";
// import styles from "./login.module.scss";
// import axios from 'axios'
// import jwt_decode from "jwt-decode"
// import { useScript } from "../hooks/useScript";

// import { useFormik } from "formik";
// import * as Yup from "yup";

// const cx = classNames.bind(styles);

// export default function Login() {
//   const [formData, setFormData] = useState({});
//   const [username, setUsername] = useState(false);
//   const navigate = useNavigate();
//   const uname_login_Ref = useRef();
//   const pass_login_Ref = useRef();
//   const [dataLogin, setDataLogin] = useState(null);

//   useEffect(()=>{
//     //login // get data from node
//     axios.get("http://localhost:9000/login").then((res)=>{
//       setDataLogin(res.data)
//       //console.log(res.data)
//     });
//   }, []);

//   // const {
//   //   values,
//   //   isValid,
//   //   dirty,
//   //   handleBlur,
//   //   touched,
//   //   errors,
//   //   handleChange,
//   //   handleSubmit,
//   // } = useFormik({
//   //   initialValues: {
//   //     username: "",
//   //     password: "",
//   //   },
//   //   validationSchema: Yup.object({
//   //     username: Yup.string().required("Please enter your username"),
//   //     password: Yup.string().required("Please enter your passwords!"),
//   //   }),
//   //   onSubmit: (value) => {
//   //     // try{
//   //     //   dataLogin.forEach((item)=>{
//   //     //     console.log("item:", item.username)
//   //     //     if(item.username == uname_login_Ref.current.value
//   //     //       && item.password == pass_login_Ref.current.value){
//   //     //       alert("Login successful")
              
//   //     //       throw '';
//   //     //     }
//   //     //     else{
//   //     //       alert("Login fail!")
//   //     //     }
//   //     //   })
//   //     // }catch(err){
//   //     //   console.log(err)
//   //     // }
//   //     navigate("/");
//   //     console.log(value);
//   //   },
//   // });

  

  
//     //register
  
//     // if(uname_regis_Ref.current.value.trim() == ""
//     // || email_regis_Ref.current.value.trim() == ""
//     // || pass_regis_Ref.current.value.trim() == "" 
//     // || cfpass_regis_Ref.current.value.trim() == ""){
//     //   alert("Registration failed");
//     //   return;
//     // }
//     // if(pass_regis_Ref.current.value != cfpass_regis_Ref.current.value){
//     //   alert("Confirm failed");
//     //   return;
//     // }
//     // acc.username = uname_regis_Ref.current.value
//     // acc.email = email_regis_Ref.current.value
//     // acc.password = pass_regis_Ref.current.value
//     // axios.post("http://localhost:9000/regis", acc)
//     // .then(res => console.log(res))
//     // .catch(err => console.log(err))



//   //Login function


// //login with google account
//   const googlebuttonref = useRef();
//   const [user, setuser] = useState(false);
//   const onGoogleSignIn = (user) => {
//     let userCred = user.credential;
//     let payload = jwt_decode(userCred);
//     console.log(payload);
//     setuser(payload);
      
//   useScript("https://accounts.google.com/gsi/client", () => {
//     window.google.accounts.id.initialize({
//       client_id: "451860819558-kd3ojmcb940jfls3n4fnop1peukdg02t.apps.googleusercontent.com", // here's your Google ID
//       callback: onGoogleSignIn,
//       auto_select: false ,
//     });

//     window.google.accounts.id.renderButton(googlebuttonref.current, {
//       size: "medium",
//     });
//     console.log(user.name)
//     this.props.parentCallback(user.name);
//   });

//   return (
//     <>
//       <div className={cx("login")}>
//         <div className={cx("main")}>
//           {/* Login */}
//           <form className={cx("login-form")} onSubmit={handleSubmit}>
//             <div className={cx("logo")}>
//               <img
//                 src={require("./../../assets/images/Logo-Offical-gadient.png")}
//                 alt="logo"
//               />
//             </div>
//             <h3 className={cx("title")}>Melody For Emotion</h3>
//             <p className={cx("text")}>LOGIN</p>
//             <div className={cx("form")}>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 placeholder="username"
//                 value={values.username}
//                 ref={uname_login_Ref}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={cx(
//                   `${
//                     errors.username && touched.username
//                       ? "input-errors"
//                       : "form-input"
//                   }`
//                 )}
//               />
//               {errors.username && touched.username ? (
//                 <div className={cx("errorMsg")}>{errors.username}</div>
//               ) : null}
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="password"
//                 ref={pass_login_Ref}
//                 className={cx(
//                   `${
//                     errors.password && touched.password
//                       ? "input-errors"
//                       : "form-input"
//                   }`
//                 )}
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.password && touched.password ? (
//                 <div className={cx("errorMsg")}>{errors.password}</div>
//               ) : null}
//               <div className={cx("action")}>
//                 <button className={cx("btn_login")}>Sign in</button>
//                 <Link
//                   to="/forgotPassword"
//                   className={cx("btn_forgot")}
//                   type="submit"
//                 >
//                   Forgot Password
//                 </Link>
//               </div>
//             </div>
//             <div className={cx("social")}>
//               <p>or continue with</p>
//               <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 //  height: "150px",
//               }}
//               >
//                 {!user && <div ref={googlebuttonref}
//                 ></div>}
//                 {user && (
//                   navigate("/")
//                 )}
//               </div>
//               {/* <button>
//                 <img
//                   src={require("./../../assets/images/flat-color-icons_google.png")}
//                   alt=""
//                 />
//               </button> */}
//               <p className={cx("question")}>
//                 Don't have an account yet?{" "}
//                 <NavLink to="/register">Register for free</NavLink>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
