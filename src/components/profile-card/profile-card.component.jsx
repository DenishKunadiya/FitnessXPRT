import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";
import "./profile-card.styles.css";

const ProfileCard = ({ userData }) => {
  useEffect(() => {
    console.log("userdata", userData);
  }, [userData]);
  return (
    <div>
      <header>
        <div className="container1">
          <div className="profile">
            <div className="profile-image">
              <img src={profile} alt="Profile" />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">{userData.name} </h1>

              <Link className="btn profile-edit-btn" to="/EditProfile">
                Edit Profile
              </Link>
            </div>

            <div className="profile-stats mt-5">
              <ul>
                <li>
                  <span className="profile-stat-count">
                    {userData.followers.length}
                  </span>{" "}
                  followers
                </li>
                <li>
                  <span className="profile-stat-count">
                    {userData.followings.length}
                  </span>{" "}
                  following
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    userData: state.login.login.user,
  };
};
export default connect(mapStateToProps)(ProfileCard);
