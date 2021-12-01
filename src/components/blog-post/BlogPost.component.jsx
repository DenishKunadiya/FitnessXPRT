import React, { Component } from "react";
import blogpost from "../../assets/blogpost.jpg";
import blogpost2 from "../../assets/blogpost2.jpg";
import "./blogpost.styles.css";
export default class BlogPost extends Component {
  render() {
    return (
      <>
        <div className="post-container ">
          <div class="card mt-5">
            <a class="card-link">Username</a>
            <img src={blogpost} class="card-img-top" alt="..." />
            <div class="card-body">
              <label className="like">
                <input type="checkbox" />
                <div className="hearth" />
              </label>
              <i class="bi bi-save"></i>
            </div>
          </div>
        </div>
        <div className="post-container ">
          <div class="card mt-5">
            <a class="card-link">Username</a>
            <img src={blogpost} class="card-img-top" alt="..." />
            <div class="card-body">
              <label className="like">
                <input type="checkbox" />
                <div className="hearth" />
              </label>
              <i class="bi bi-save"></i>
            </div>
          </div>
        </div>
        <div className="post-container ">
          <div class="card mt-5">
            <a class="card-link">Username</a>
            <img src={blogpost} class="card-img-top" alt="..." />
            <div class="card-body">
              <label className="like">
                <input type="checkbox" />
                <div className="hearth" />
              </label>
              <i class="bi bi-save"></i>
            </div>
          </div>
        </div>
        <div className="post-container ">
          <div class="card mt-5">
            <a class="card-link">Username</a>
            <img src={blogpost} class="card-img-top" alt="..." />
            <div class="card-body">
              <label className="like">
                <input type="checkbox" />
                <div className="hearth" />
              </label>
              <i class="bi bi-save"></i>
            </div>
          </div>
        </div>
        <div className="post-container ">
          <div class="card mt-5">
            <a class="card-link">Username</a>
            <img src={blogpost} class="card-img-top" alt="..." />
            <div class="card-body">
              <label className="like">
                <input type="checkbox" />
                <div className="hearth" />
              </label>
              <i class="bi bi-save"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}
