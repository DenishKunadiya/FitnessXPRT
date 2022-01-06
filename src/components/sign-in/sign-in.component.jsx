import React, { useState, useEffect } from "react";
import "./sign-in.styles.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLoginRequest } from "../../services/actions/loginAction";
import { fetchBlogs } from "../../services/actions/blogAction";
const SignIn = ({ login, history, loginUser }) => {
  console.log("login token", loginUser);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function submit(e) {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);

    login({ ...data })
      .then(() => {
        history.push("/nutrition");
      })
      .catch((err) => {
        console.log("error in login", err);
      });

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

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && data != null) {
      // console.log(data);
    }
  }, [formErrors]);

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log("newdata", newdata);
  }
  return (
    <>
      <div className="img">
        <div className="main">
          <div className="container11">
            <div className="signup-content">
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="bg-success d-flex justify-content-center">
                  Signed in successfully
                </div>
              ) : (
                ""
              )}
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
                <p>{formErrors.email}</p>
                <br />
                <div className="form-group">
                  <input
                    type="password"
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
                <p>{formErrors.password}</p>
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
                    <Link to="/signup" className="signin-redirect">
                      Sign up here
                    </Link>
                  </h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log("state in login", state);
  return {
    loginUser: state,
  };
};
const mapActionToDispatch = (dispatch) => ({
  login: (submitData) => dispatch(userLoginRequest(submitData)),
  fetchBlogALLData: () => dispatch(fetchBlogs),
});
export default connect(mapStateToProps, mapActionToDispatch)(SignIn);
