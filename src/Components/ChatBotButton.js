import React from "react";
// get our fontawesome imports

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { setVisibility } from "../Action/queryBot";
class ChatBotButton extends React.Component {
  handleVisibility = () => {
    if (this.props.visibility) {
      this.props.dispatch(setVisibility(false));
    } else {
      this.props.dispatch(setVisibility(true));
    }
  };
  render() {
    return (
      <div
        className="chat-bot-button center-child-elements"
        onClick={this.handleVisibility}
      >
        {this.props.visibility ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faCoffee} />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(ChatBotButton);
