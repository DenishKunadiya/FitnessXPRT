import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AuthApiCall } from "../../helper/api";
import { updateUserProfile } from "../../helper/api/user";
import { store } from "../../services/store";

import "./editprofile.styles.css";
const EditProfile = ({ history, editData }) => {
  const [updateDetail, setupdateDetail] = useState({
    name: "",
    email: "",
    password: null,
    image: "",
  });
  console.log("edit data", editData);
  const submitUpdateUser = (e) => {
    e.preventDefault();

    updateUserProfile(updateDetail).then(() => {
      history.push("/profile");
    });
  };
  function handle(e) {
    e.preventDefault();
    const newdata = { ...updateDetail };
    newdata[e.target.id] = e.target.value;
    setupdateDetail(newdata);
    console.log("update user data", newdata);
  }
  return (
    <div>
      <div className="main-card neo-light">
        <form method="POST" onSubmit={submitUpdateUser}>
          <div className="containerg">
            <div className="container mt-5 mb-5">
              <label className="mt-5">Username :</label> &nbsp;
              <input
                type="name"
                className=""
                placeholder="Set New Username"
                name="name"
                id="name"
                defaultValue={editData.name}
                // value={updateDetail.name}
                onChange={(e) => {
                  handle(e);
                }}
              />
              <label className="">Email :</label> &nbsp;
              <input
                type="email"
                className=""
                placeholder="Set New email"
                name="email"
                id="email"
                defaultValue={editData.email}
                // value={updateDetail.email}
                onChange={(e) => {
                  handle(e);
                }}
              />
              <label className="">password :</label> &nbsp;
              <input
                type="password"
                className=""
                placeholder="Set New password"
                name="password"
                id="password"
                value={updateDetail.password}
                onChange={(e) => {
                  handle(e);
                }}
              />
              <label className="">Update image :</label> &nbsp;
              <input
                type="file"
                className="file"
                name="blogimg"
                id=""
                // value={blogDetails.blogImage}
                // onChange={(e) => setSelectFile(e.target.files[0])}
              />
            </div>

            <div className="container d-flex justify-content-center mt-0">
              <input
                type="submit"
                value="submit"
                className="sbmt-btn-profile"
              />
            </div>
            <Link to="/profile" className="profile-close-btn">
              <i className="fa fa-close"></i>
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
    editData: state.login.login.data,
  };
};
export default connect(mapStateToProps)(EditProfile);
