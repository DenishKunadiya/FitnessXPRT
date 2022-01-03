import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { signUpUser } from "../../helper/api/user/index";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import "./sign-up.styles.css";

const SignUp = ({ history }) => {
  // useEffect(() => {
  //   if (localStorage.getItem("persist:root")) {
  //     history.push("/nutrition");
  //   }
  // }, []);
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formValues, setFormValues] = useState();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function submit(e) {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);
    signUpUser(data)
      .then(() => {
        history.push("/signin");
      })
      .catch((error) => {
        console.log("error in login", error);
      });

    // axios
    //   .post("http://192.168.1.113:3000/api/user/register", {
    //     name: data.name,
    //     email: data.email,
    //     password: data.password,
    //     confirmPassword: data.confirmPassword,
    //   })
    //   .then((resp) => {
    //     console.log("resp.data", resp.data);
    //   });
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
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
    } else if (values.password != values.confirmPassword) {
      errors.confirmPassword = "Password don't match";
    }
    return errors;
  };

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
              <p>{formErrors.name}</p>
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
              <p>{formErrors.email}</p>
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
              <p>{formErrors.password}</p>
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
                <p>{formErrors.confirmPassword}</p>
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
