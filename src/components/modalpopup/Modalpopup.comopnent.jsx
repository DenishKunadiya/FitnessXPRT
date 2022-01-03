import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { store } from "../../services/store";
// import { collectBlogFormData } from "../../services/actions/actions";
// import axios from "axios";
import "./modalpopup.styles.css";

const ModalPopup = (props, { userData }) => {
  console.log(userData);
  const [showModal, setShowModal] = useState(false);
  const [selectFile, setSelectFile] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const token = store.getState().login.login.access_token;
  console.log("token", token);
  const isShowModal = (status) => {
    handleClose();
    setShowModal(status);
  };

  const handleClose = () => {
    props.onPopupClose(false);
  };

  async function submitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("blogname", title);
    formData.append("description", description);
    // formData.append("blogimage", selectFile);
    // console.log("Form data is here", formData);
    console.log("selected file in function", formData);
    let result = fetch(
      "http://192.168.0.115:5000/api/blog/create-blog",

      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer" + token,
          responseType: "json",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("body", result);

    console.log("formdata", formData);
    // alert("data has been send to API");
  }
  // console.log("selected file", selectFile);

  return (
    <Fragment>
      <Modal
        show={props.showModalPopup}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="container modal-bg">
          <i className="fa fa-close profile-close-btn"></i>

          <form>
            <h3 className="text-dark">Upload Require Details</h3>
            <hr />
            <div className="container ">
              <div className="parent-div">
                <h4 className="text-dark">Choose your title</h4>
                <br />
                <input
                  type="text"
                  name="blogname"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <br />
              <div className="parent-div">
                <h4 className="text-dark">Choose your image</h4>
                <br />
                <button className="btn-upload">
                  Choose Image From Gallery &nbsp;
                  <i className="fa fa-file-photo-o"></i>
                </button>

                <input
                  type="file"
                  name="blogimg"
                  onChange={(e) => setSelectFile(e.target.files[0])}
                />
              </div>
              <div className="form-group">
                <h5 className="text-dark font-weight-bold">
                  Enter Description Here
                </h5>
                <textarea
                  className="form-control blog-desc"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="description"
                  placeholder="Enter Some Description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <hr />
            <div className="close-pop-up text-center">
              <h2 className="text-dark">Submit the post</h2>
              <br />
              {/* <button
                type="button"
                className="link-button add-exercise"
                onClick={() => isShowModal(true)}
              >
                Close
              </button> */}
              <button className="name noselect mt-1 mb-5" onClick={submitForm}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    userData: state.login.login.access_token,
  };
};
export default connect(mapStateToProps)(ModalPopup);
