// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import "./sign-up.styles.css";

// const SignUp = ({ setLogoutUser }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   let history = useHistory();

//   const register = (e) => {
//     console.log("name ", name);
//     e.preventDefault();
//     axios
//       .post("http://192.168.1.108:3000/api/user/register", {
//         name,
//         email,
//         password,
//         confirmPassword,
//       })
//       .then((response) => {
//         console.log("response", response);
//         localStorage.setItem(
//           "login",
//           JSON.stringify({
//             userLogin: true,
//             token: response.data.access_token,
//           })
//         );
//         setError("");
//         setEmail("");
//         setPassword("");
//         // setLogoutUser(false);
//         history.push("/");
//       });
//     // .catch((error) => setError(error.response.data.message));
//   };
//   return (
//     <div className="img">
//       <div className="main">
//         <div className="container11">
//           <div className="signup-content">
//             <form
//               id="signup-form"
//               className="signup-form"
//               noValidate
//               autoComplete="off"
//               onSubmit={register}
//             >
//               <h2>Create an account</h2>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-input signup-input"
//                   name="name"
//                   id="name"
//                   value={name}
//                   placeholder="Your Name"
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   className="form-input signup-input"
//                   name="email"
//                   id="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   className="form-input signup-input"
//                   name="password"
//                   id="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <span
//                   toggle="#password"
//                   className="zmdi zmdi-eye field-icon toggle-password"
//                 ></span>
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   className="form-input signup-input"
//                   name="confirmPassword"
//                   id="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   placeholder="Confirm Password"
//                 />
//                 <span
//                   toggle="#password"
//                   className="zmdi zmdi-eye field-icon toggle-password"
//                 ></span>
//               </div>

//               <div className="form-group">
//                 <input
//                   type="submit"
//                   name="submit"
//                   id="submit"
//                   className="form-submit submit signup-input"
//                   value="Register"
//                 />
//                 <h4 className="alrdy-account">
//                   Already have an account &nbsp;
//                   <Link className="login-redirect" to="/login" variant="body2">
//                     Login
//                   </Link>
//                 </h4>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
