import React, { Component } from "react";
import profile from "../../assets/profile.png";
import ProfileCard from "../profile-card/profile-card.component";
import ProfileNav from "../profile-nav/Profile-nav.component";
import "./profile.css";
export default class Profile extends Component {
  render() {
    return (
      <div classNameName="container">
        <ProfileCard />
        <div classNameName="container-fluid">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
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
                className="nav-link"
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
