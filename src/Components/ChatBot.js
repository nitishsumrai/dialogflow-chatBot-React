import React, { Component } from "react";
// get our fontawesome imports
import { connect } from "react-redux";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { startQuerying } from "../Action/queryBot";

import { Messages } from "./";
class ChatBot extends Component {
  constructor() {
    super();
    this.setState({
      input: "",
      // usermsg: [],
    });
  }
  handleOnChangeInput = (e) => {
    // console.log(this.state.input);
    this.setState({
      input: e.target.value,
    });
  };
  handleFormSubmit = (e) => {
    document.getElementById("input").value = "";
    e.preventDefault();
    console.log("state", this.state);
    const { input } = this.state;
    this.setState({
      input: "",
    });
    if (input) {
      this.props.dispatch(startQuerying(input));
    }
  };
  render() {
    console.log(this.props);
    const { inProgress } = this.props;
    return (
      <div className="chat-bot add-box-shadow">
        <div>
          <header className="header-chat-bot">
            <span className="center-child-elements image-info-chat-bot ">
              <span className="image-status">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560BAQGcp8x8DO-jPQ/company-logo_200_200/0/1589439972484?e=2159024400&v=beta&t=pszKMR5SYnxx0c5qVxJ1k9xIXKD94lJuioG1eYQWpDs"
                  alt="bot-image"
                />
              </span>
              <span className="name-status">
                <h4>triny Bot</h4>
                <h6>Online</h6>
              </span>
            </span>
          </header>

          <Messages msgLog={this.props.msgLog} />
          <footer>
            <div>
              <form>
                <input
                  id="input"
                  onChange={this.handleOnChangeInput}
                  className="text-input"
                  type="input"
                  placeholder="Enter the msg"
                />
                <button
                  type="submit"
                  className="submit-input"
                  onClick={this.handleFormSubmit}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state,
  };
}
export default connect(mapStateToProps)(ChatBot);
