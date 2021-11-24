import React, { Component } from "react";
import CustomButton from "../custom-button.component.jsx/custom-button.component";
import "./sign-in.styles.css";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      // <div classNameName='sign-in'>
      //   <h2>I already have an account</h2>
      //   <span>Sign in with your email and password</span>

      //   <form onSubmit={this.handleSubmit}>
      //     <label>Email</label>
      //     <input type="email" name="email" onChange={this.handleChange} value={this.state.email} required />
      //     <label>Password</label>
      //     <input type="password" name="password" onChange={this.handleChange} value={this.state.password} required />
      //     <input type="submit" value="submit" />
      //   </form>
      // </div>
      <div className="sign-in">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              <h5>Enter Your Email</h5>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              handleChange={this.handleChange}
              value={this.state.email}
            />
            <div id="emailHelp" className="form-text">
              ** We'll never share your email with anyone else. **
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              <h5>Enter Your Password</h5>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              handleChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <CustomButton type="submit" className="text-center">
            Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
