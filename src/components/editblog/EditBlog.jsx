import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import { AuthApiCall } from "../../helper/api";
import { deleteUserBlog, updateUserBlog } from "../../helper/api/blog";
import { store } from "../../services/store";

import "../edit-profile/editprofile.styles.css";
const EditBlog = ({ history, blogId, match, props }) => {
  console.log("lalo k lal hoy", match);

  const [selectFile, setSelectFile] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [deleteItem, setDeteteItem] = useState([]);
  const [data, setData] = useState(blogId);
  console.log("selected id in function", blogId);

  async function submitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blogname", title);
    formData.append("description", description);
    formData.append("image", selectFile);
    // formData.append("id", blogId);
    // console.log("selected file in function", blogId);
    updateUserBlog(formData)
      .then(() => {
        history.push("/blog");
      })
      .catch((error) => {
        console.log("error in editblog", error);
      });

    // const deleteitems = () => {
    //   deleteUserBlog(id);
    // };
    // console.log("formdata", formData);
  }
  return (
    <div>
      <div className="main-card neo-light">
        <form method="POST">
          <div className="containerg">
            <div className="container mt-5">
              <div className="container text-center">
                <h1>&lt;----------Update Blog----------&gt;</h1>
              </div>
              <label className="mt-5">New Blogname :</label> &nbsp;
              <input
                type="name"
                className=""
                placeholder="Title"
                name=""
                id=""
                onChange={(e) => setTitle(e.target.value)}
              />
              <label className="">description :</label> &nbsp;
              <textarea
                name="description"
                className="blogtxtarea"
                id=""
                cols="3"
                rows="3"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <label className="">Update image :</label> &nbsp;
              <input
                type="file"
                className="file"
                name="blogimg"
                id=""
                onChange={(e) => setSelectFile(e.target.files[0])}
              />
            </div>

            <div className="container d-flex justify-content-center">
              <input
                type="submit"
                value="submit"
                className="sbmt-btn-profile"
                onClick={submitForm}
              />
            </div>
            <Link to="/blog" className="profile-close-btn">
              <i className="fa fa-close"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
// const mapStateToProps = (state) => {
//   console.log("state in editblog", state);
//   return {
//     blogId: state.allBlog.getblog.data.data,
//   };
// };
export default withRouter(EditBlog);
