import React, { useState } from "react";
import "./sign-in.styles.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLoginRequest } from "../../services/actions/loginAction";
const SignIn = ({ login }) => {
  console.log("login token", login);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    login({ ...data });
    // axios
    //   .post("http://192.168.1.110:3000/api/user/login", {
    //     email: data.email,
    //     password: data.password,
    //   })
    //   .then((resp) => {
    //     // history.push("/nutrition");
    //     const token = resp.data.token;
    //     console.log("resp.data", resp.data);
    //   });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log("newdata", newdata);
  }
  return (
    <div className="img">
      <div className="main">
        <div className="container11">
          <div className="signup-content">
            <form
              method="POST"
              id="signup-form"
              className="signup-form"
              onSubmit={(e) => submit(e)}
            >
              <h2>Log in</h2>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input signin-input"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={data.email}
                  onChange={(e) => handle(e)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  className="form-input signin-input"
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
              <br />
              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  className="form-submit submit signin-input"
                  value="Log in"
                />

                <h4 className="dnt-account">
                  <br />
                  Don't have an account &nbsp;
                  <Link to="/" className="signin-redirect">
                    Sign up here
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
const mapActionToDispatch = (dispatch) => ({
  login: (submitData) => dispatch(userLoginRequest(submitData)),
});
export default connect(null, mapActionToDispatch)(SignIn);
