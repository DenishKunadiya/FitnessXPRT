import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sign-up.styles.css";
import userEvent from "@testing-library/user-event";
const SignUp = () => {
  // const [registerUser, setRegisterUser] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setRegisterUser({
  //     ...registerUser,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(registerUser),
  // };
  // console.log("reguser", registerUser);
  // const sendRegister = () =>
  //   fetch("http://192.168.1.103:3000/api/user/register", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // const sendRegister = async () => {
  //   axios
  //     .post("http://192.168.1.103:3000/api/user/register", registerUser)
  //     .then(function (response) {
  //       console.log("response", response);
  //     })
  //     .catch(function (error) {
  //       console.log("err", error);
  //     });
  // };

  // useEffect(() => {
  //   sendRegister();
  // }, [sendRegister]);

  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function submit(e) {
    e.preventDefault();

    axios
      .post("http://192.168.1.103:3000/api/user/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      })
      .then((resp) => {
        console.log("resp.data", resp.data);
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log("newdata", newdata);
  }

  // const { name, email, password } = registerUser;
  return (
    <div className="img">
      <div className="main">
        <div className="container11">
          <div className="signup-content">
            <form
              id="signup-form"
              className="signup-form"
              onSubmit={(e) => submit(e)}
            >
              <h2>Create an account</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input signup-input"
                  name="name"
                  id="name"
                  value={data.name}
                  placeholder="Your Name"
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input signup-input"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={data.email}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-input signup-input"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={(e) => handle(e)}
                />
                <span
                  toggle="#password"
                  className="zmdi zmdi-eye field-icon toggle-password"
                ></span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-input signup-input"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={data.confirmPassword}
                  onChange={(e) => handle(e)}
                  placeholder="Confirm Password"
                />
                <span
                  toggle="#password"
                  className="zmdi zmdi-eye field-icon toggle-password"
                ></span>
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  className="form-submit submit signup-input"
                  value="Register"
                />
                <h4 className="alrdy-account">
                  Already have an account &nbsp;
                  <Link className="login-redirect" to="/signin" variant="body2">
                    Login
                  </Link>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
