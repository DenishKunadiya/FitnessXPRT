import React, { Fragment } from "react";
// import ModalPopup from "./modal_popup";
import ModalPopup from "../modalpopup/Modalpopup.comopnent";
class Blogpop extends React.Component {
  constructor() {
    super();
    this.state = {
      showModalPopup: false,
    };
  }
  isShowPopup = (status) => {
    this.setState({ showModalPopup: status });
  };
  render() {
    return (
      <Fragment>
        <h3 align="center">Create a new blog</h3>
        <header align="center">
          <Fragment>
            <div
              className="container text-center"
              onClick={() => this.isShowPopup(true)}
            >
              <button className="add-exercise">Create Blog</button>
            </div>
          </Fragment>
        </header>
        <ModalPopup
          showModalPopup={this.state.showModalPopup}
          onPopupClose={this.isShowPopup}
        ></ModalPopup>
      </Fragment>
    );
  }
}

export default Blogpop;
