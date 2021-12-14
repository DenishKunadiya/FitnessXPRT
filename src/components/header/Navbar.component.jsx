import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.css";
export default class Navbar extends Component {
  render() {
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
              <i className="bi bi-egg"></i>&nbsp;Excercise
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <i className="fa fa-user-o"></i>&nbsp;Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
