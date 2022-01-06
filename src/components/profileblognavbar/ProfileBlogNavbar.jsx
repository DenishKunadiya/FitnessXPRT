import React, { Component } from "react";
import { connect } from "react-redux";
import MyPostBlog from "../mypost/MyPostBlog";
// import MyPostNutrition from "../mypost/MyPostNutrition";
// import "./profile-nav.styles.css";
import { fetchBlogs } from "../../services/actions/blogAction";
import MyPostNutritions from "../mypost/MyPostNutrition";
import { fetchNutritionss } from "../../services/actions/getAllNutritionAction";
import Navbar from "../header/Navbar.component";
import ProfileCard from "../profile-card/profile-card.component";
import Profile from "../profile/Profile";
const ProfileNutrtionNav = ({ fetchBlog, myNutrition }) => {
  return (
    <>
      <Navbar />
      <ProfileCard />
      <Profile />
      {/* <div>
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
                // onClick={myNutritions}
              >
                Nutrition
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
                // onClick={myBlogs}
              >
                Blog
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
                Exercise
              </button>
            </li>
          </ul>
        </div>
      </div> */}
      {/* isGoals ? <MyPostNutrition /> : <ProfileNav />} */}
      {/* <MyPostNutrition /> */}
      {/* <MyPostBlog /> */}
    </>
  );
};
const mapDispatchToProp = (dispatch) => {
  return {
    fetchBlog: () => dispatch(fetchBlogs()),
    myNutrition: () => dispatch(fetchNutritionss()),
  };
};
export default connect(null, mapDispatchToProp)(ProfileNutrtionNav);
