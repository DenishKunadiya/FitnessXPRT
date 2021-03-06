import React, { Component } from "react";
// import profile from "../../assets/profile.png";
import ProfileNav from "../profile-nav/Profile-nav.component";
import "./profile.css";
export default class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-fluid ">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active text-light"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                My Post
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-light"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Saved Items
              </button>
            </li>
          </ul>
        </div>
        <hr />
        <ProfileNav />
      </div>
    );
  }
}
