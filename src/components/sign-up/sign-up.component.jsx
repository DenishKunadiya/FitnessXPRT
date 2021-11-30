import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sign-up.styles.css";
import userEvent from "@testing-library/user-event";
const SignUp = () => {
  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setRegisterUser({
      ...registerUser,
      [e.target.name]: e.target.value,
    });
  };

  const sendRegister = async () => {
    axios
      .post("http://192.168.1.103:3000/api/user/register", {
        registerUser,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    sendRegister();
  }, []);

  const { name, email, password } = registerUser;
  return (
    <div className="img">
      <div className="main">
        <div className="container11">
          <div className="signup-content">
            <form id="signup-form" className="signup-form">
              <h2>Create an account</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  id="name"
                  value={name}
                  placeholder="Your Name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-input"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <span
                  toggle="#password"
                  className="zmdi zmdi-eye field-icon toggle-password"
                ></span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-input"
                  name="confirmPassword"
                  id="password"
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
                  className="form-submit submit"
                  value="Register"
                  onClick={sendRegister}
                />
                <h6>
                  Already have an account{" "}
                  <Link className="login-redirect" to="/signin" variant="body2">
                    Login
                  </Link>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
