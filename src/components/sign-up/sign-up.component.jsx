import React, { Component } from "react";

import "./sign-up.styles.css";
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="signup-content">
            <form method="POST" id="signup-form" className="signup-form">
              <h2>Create an account</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <span
                  toggle="#password"
                  className="zmdi zmdi-eye field-icon toggle-password"
                ></span>
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="agree-term"
                  id="agree-term"
                  className="agree-term"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  className="form-submit submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
