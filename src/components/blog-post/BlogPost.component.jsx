import React, { useState, useEffect } from "react";
import blogpost from "../../assets/blogpost.jpg";
import "./blogpost.styles.css";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../spinner/spinner";
import { fetchBlogs } from "../../services/actions/blogAction";
// import { fetchBlogs } from "../../services/actions/blogactions/blogAction";
const BlogPost = ({ blogs = [], user, fetchBlog, blogid }) => {
  // console.log("all blog", blogs);
  const params = useParams();
  const [blog, setBlog] = useState(blogs);
  // const [blog, setBlog] = useState(blogs);
  console.log(" blog UseEffect", blogid);
  useEffect(() => {
    if (!blogs.length) {
      fetchBlog();
    }
    setBlog(blogs);
  }, [blogs]);

  return (
    <>
      <div>
        {blog &&
          blog.map((postblog, index) => {
            return (
              <div className="post-container">
                <div className="card mt-5">
                  <div className="container d-flex mt-4 position-relative">
                    <img
                      src={postblog.blogimage}
                      alt=""
                      className="profile-img"
                    />
                    <a className="card-link ms-2">{user.name}</a>
                    {/* <a className="blogname ms-2">BLogName</a> */}
                    <i className="bi bi-trash trash"></i>
                    <Link to={"/blog/EditBlog/:" + postblog._id}>
                      <i className="fa fa-credit-card credit-card"></i>
                    </Link>
                  </div>
                  <div className="container d-flex justify-content-center">
                    <a className="blogname ms-2">{postblog.blogname}</a>
                  </div>
                  <img
                    src={postblog.blogimage}
                    className="card-img-top mt-3 border"
                    alt="..."
                  />

                  <h3 className="ms-5 mt-4">
                    {/* <a className="card-link ms-2">Username &nbsp;</a> */}
                    {postblog.description}
                  </h3>
                  <div className="card-body">
                    <label className="like">
                      <input type="checkbox" />
                      <div className="hearth" />
                    </label>

                    <i className="fa fa-bookmark-o bookmark">
                      {/* <abbr title="bookmark">Save</abbr> */}
                    </i>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("state in blogPost component", state);
  return {
    blogs: state.allBlog.getblog?.data?.data,
    // blogid: state.allBlog.getblog.data.data._id,
    user: state.login.login.data,
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    fetchBlog: () => dispatch(fetchBlogs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(BlogPost);
