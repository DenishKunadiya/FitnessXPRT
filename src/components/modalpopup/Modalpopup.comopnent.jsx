import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { collectBlogFormData } from "../../services/actions/actions";
import "./modalpopup.styles.css";
class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      file: "",
      description: "",
    };
  }

  isShowModal = (status) => {
    this.handleClose();
    this.setState({ showModal: status });
  };

  handleClose = () => {
    this.props.onPopupClose(false);
  };
  submit() {
    console.log(this.state);
  }
  onChange(e) {
    let files = e.target.files;
    console.warn("this is data ", files);
  }
  render() {
    return (
      <Fragment>
        <Modal
          show={this.props.showModalPopup}
          onHide={this.handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="container modal-bg">
            <h3 className="text-dark">Upload Require Details</h3>
            <hr />
            <div className="container">
              <div class="parent-div">
                <h4 className="text-dark">Choose your image</h4>
                <br />
                <button class="btn-upload">
                  Choose Image From Gallery &nbsp;
                  <i class="fa fa-file-photo-o"></i>
                </button>

                <input
                  type="file"
                  name="file"
                  // value={this.state.file}
                  // onChange={(e) => {
                  //   this.setState({ file: e.target.value });
                  // }}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div class="form-group">
                <h5 className="text-dark font-weight-bold">
                  Enter Description Here
                </h5>
                <textarea
                  class="form-control blog-desc"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="description"
                  placeholder="Enter Some Description"
                  value={this.state.description}
                  onChange={(e) => {
                    this.setState({ file: e.target.value });
                  }}
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
                onClick={() => this.isShowModal(true)}
              >
                Close
              </button> */}
              <button class="name noselect mt-1 mb-5" onClick={this.submit()}>
                Submit
              </button>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}
// const mapStateToProp = (state) => ({
//   blogDataHandler: (data) => dispatch(collectBlogFormData(data)),
// });

const mapDispatchToProp = (dispatch) => ({
  blogDataHandler: (data) => dispatch(collectBlogFormData(data)),
});
export default connect(null, mapDispatchToProp)(ModalPopup);
