import React, { Component } from "react";
import blogpost from "../../assets/blogpost.jpg";
import "./blogpost.styles.css";
import Blogpop from "../blogcreate/BlogCreate.component";
export default class BlogPost extends Component {
  state = {
    addBlog: [],
  };
  addBlogpost() {
    this.setState({ addBlog: [...this.state.addBlog, ""] });
  }
  render() {
    return (
      <>
        <Blogpop />
        <div className="container d-flex justify-content-center">
          <button
            className="sticky-top add-exercise"
            onClick={() => this.addBlogpost()}
          >
            Create Blog Post
          </button>
        </div>
        {this.state.addBlog.map((addBlog, index) => {
          return (
            <div key={index}>
              <div className="post-container ">
                <div class="card mt-5">
                  <div className="container d-flex mt-4 position-relative">
                    <img src={blogpost} alt="" className="profile-img" />
                    <a class="card-link ms-2">Username</a>
                    <i class="bi bi-trash"></i>
                    <i class="fa fa-credit-card"></i>
                  </div>
                  <img
                    src={blogpost}
                    class="card-img-top mt-3 border"
                    alt="..."
                  />

                  <h3 className="ms-5 mt-4">
                    <a class="card-link ms-2">Username &nbsp;</a>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem, atque quasi quas voluptate iure reprehenderit!
                  </h3>
                  <div class="card-body">
                    <label className="like">
                      <input type="checkbox" />
                      <div className="hearth" />
                    </label>
                    <i class="fa fa-bookmark-o"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
