import React, { Component } from "react";
import profile from "../../assets/profile.png";
import "./profile-card.styles.css";
export default class ProfileCard extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container1">
            <div className="profile">
              <div className="profile-image">
                <img src={profile} alt="Profile" />
              </div>

              <div className="profile-user-settings">
                <h1 className="profile-user-name">Denish Kunadiya</h1>

                <button className="btn profile-edit-btn">Edit Profile</button>

                <label className="like">
                  <input type="checkbox" />
                  <div className="hearth" />
                </label>
              </div>

              <div className="profile-stats">
                <ul>
                  <li>
                    <span className="profile-stat-count">164</span> posts
                  </li>
                  <li>
                    <span className="profile-stat-count">188</span> followers
                  </li>
                  <li>
                    <span className="profile-stat-count">206</span> following
                  </li>
                </ul>
              </div>

              <div className="profile-bio">
                <p>
                  <span className="profile-real-name">Denish</span>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
