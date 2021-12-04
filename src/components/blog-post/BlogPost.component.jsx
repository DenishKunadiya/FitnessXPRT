import React, { Component } from "react";
import blogpost from "../../assets/blogpost.jpg";
import blogpost2 from "../../assets/blogpost2.jpg";
import "./blogpost.styles.css";
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
        <button className="sticky-top" onClick={() => this.addBlogpost()}>
          Create Blog Post
        </button>
        {this.state.addBlog.map((addBlog, index) => {
          return (
            <div key={index}>
              <div className="post-container ">
                <div class="card mt-5">
                  <a class="card-link ms-5">Username</a>
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
            </div>
          );
        })}
      </>
    );
  }
}
