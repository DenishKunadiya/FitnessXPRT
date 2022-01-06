import React, { useState, useEffect } from "react";
import blogpost from "../../assets/blogpost.jpg";
import "./blogpost.styles.css";
import bg2 from "../../assets/bg2.jpg";
import { Link, useParams, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../spinner/spinner";
import { fetchBlogs } from "../../services/actions/blogAction";
import { deleteUserBlog, getSingleBlog } from "../../helper/api/blog";
import store from "../../services/store";
// import { fetchBlogs } from "../../services/actions/blogactions/blogAction";
const BlogPost = ({ blogs = [], user, fetchBlog, blogid, props, match }) => {
  const paramss = useParams();
  console.log("id in blogpost comp", match);
  const params = useParams();
  const [blog, setBlog] = useState(blogs);
  const [id, setId] = useState("");

  useEffect(() => {
    if (!blogs.length) {
      fetchBlog();
    }
    setBlog(blogs);
  }, [blogs]);
  const deleteBlog = (id) => {
    deleteUserBlog(id);
  };

  const getblog = (id) => {
    // alert(id);
    getSingleBlog(id);
  };

  return (
    <>
      <div>
        {blog &&
          blog.map((postblog, id) => {
            return (
              <div className="post-container" key={id}>
                <div className="card mt-5">
                  <div className="container d-flex mt-4 position-relative">
                    <img src={user.userImage} alt="" className="profile-img" />
                    <a className="card-link ms-2">{user.name}</a>

                    <i
                      className="bi bi-trash trash"
                      onClick={() => deleteBlog(postblog._id)}
                    ></i>
                    <Link to={"/blog/EditBlog/" + postblog._id}>
                      <i
                        className="fa fa-credit-card credit-card"
                        onClick={() => getblog(postblog._id)}
                      ></i>
                    </Link>
                  </div>
                  <div className="container d-flex justify-content-center">
                    <a className="blogname ms-2">{postblog.blogName}</a>
                    {/* <a className="blogname ms-2">{postblog._id}</a> */}
                  </div>
                  <img
                    src={bg2}
                    // src={`http://${postblog.blogImage}`}
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

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(withRouter(BlogPost));
