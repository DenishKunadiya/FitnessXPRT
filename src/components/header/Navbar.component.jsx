import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.styles.css";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "../../services/actions/blogAction";
import { fetchNutrition } from "../../services/actions/getAllNutritionAction";
import { fetchExercise } from "../../services/actions/exerciseActions/exerciseAction";
import { logoutAction } from "../../services/actions/loginAction";
const Navbar = ({ fetchBlog, fetchNute, userData, fetchexrcs, logout }) => {
  let user = JSON.parse(localStorage.getItem("persist:root"));

  let history = useHistory();
  const dispatch = useDispatch();
  const logOut = ({}) => {
    // logout();
    localStorage.removeItem("persist:root");
    history.push("/signup");
  };
  // console.log("fetchexrcs", fetchexrcs);

  // const allBlogData = () => {
  //   fetchBlog();
  // };

  // const allNutritionData = () => {
  //   fetchNute();
  // };
  const allExercs = () => {
    fetchexrcs();
  };
  return (
    <div>
      <ul className="nav nav-bg nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/nutrition">
            <i className="fa fa-cutlery"></i>&nbsp; nutrition
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">
            <i className="bi bi-card-list"></i>&nbsp;blog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Exercise">
            <i className="bi bi-egg" onClick={allExercs}></i>&nbsp;Excercise
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            <i className="fa fa-user-o"></i>&nbsp;Profile
          </Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-group bg-secondary" onClick={logOut}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    userData: state.login.login,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    fetchBlog: () => dispatch(fetchBlogs()),
    // fetchNute: () => dispatch(fetchNutrition()),
    fetchexrcs: () => dispatch(fetchExercise()),
    logout: () => dispatch(logoutAction),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(Navbar);
