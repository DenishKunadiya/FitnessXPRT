import React, { Component } from "react";
import "./sign-in.styles.css";
import { Link } from "react-router-dom";
class SignIn extends Component {
  render() {
    return (
      <div className="img">
        <div className="main">
          <div className="container">
            <div className="signup-content">
              <form method="POST" id="signup-form" className="signup-form">
                <h2>Log in</h2>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <br />
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
                <br />
                <div className="form-group">
                  <input
                    type="submit"
                    name="submit"
                    id="submit"
                    className="form-submit submit"
                    value="Log in"
                  />

                  <h6>
                    <br />
                    Don't have an account &nbsp;
                    <Link to="/" className="signin-redirect">
                      Sign up here
                    </Link>
                  </h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
