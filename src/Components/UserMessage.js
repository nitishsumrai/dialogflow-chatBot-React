import React, { Component } from "react";

class UserMessage extends Component {
  render() {
    const { msg } = this.props;
    return (
      <div className="user-message-container">
        <div className="user-message-card">
          <p>{msg}</p>
        </div>
        <div className="user-date">5:88 PM</div>
      </div>
    );
  }
}

export default UserMessage;
