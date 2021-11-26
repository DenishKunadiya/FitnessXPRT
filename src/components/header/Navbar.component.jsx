import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.css";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link className="nav-link" to="/nutrition">
              <i class="fa fa-cutlery"></i>&nbsp; nutrition
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/blog">
              <i class="bi bi-card-list"></i>&nbsp;blog
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/nutrition">
              <i class="bi bi-egg"></i>&nbsp;Excercise
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/profile">
              <i class="fa fa-user-o"></i>&nbsp;Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}