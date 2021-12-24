import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./editprofile.styles.css";
const EditProfile = ({ userData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const editProfile = (id) => {
    alert(id);
  };
  return (
    <div>
      <div class="main-card neo-light">
        <form method="POST">
          <div class="containerg">
            <div className="container mt-5">
              <label className="mt-5">Username :</label> &nbsp;
              <input
                type="name"
                className=""
                placeholder="Set New Username"
                name=""
                id=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="">Email :</label> &nbsp;
              <input
                type="email"
                className=""
                placeholder="Set New email"
                name=""
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="">password :</label> &nbsp;
              <input
                type="password"
                className=""
                placeholder="Set New password"
                name=""
                id=""
              />
            </div>

            <div className="container d-flex justify-content-center">
              <input
                type="submit"
                value="submit"
                className="sbmt-btn-profile"
                onClick={() => editProfile(userData._id)}
              />
            </div>
            <Link to="/profile" className="profile-close-btn">
              <i class="fa fa-close"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    userData: state.login.login.access_token,
  };
};
export default connect(mapStateToProps)(EditProfile);
