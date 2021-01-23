import React, { Component } from "react";
import { AgentMessage, UserMessage } from "./";

class Messages extends Component {

  componentDidUpdate = () => {
    var element = document.getElementById("message-list");
    element.scrollTop = element.scrollHeight;
  }

  render() {
    const { msgLog } = this.props;
    const MessageLog = [];
    for (var i = 0; i < msgLog.length; i++) {
      if (msgLog[i].request) {
        MessageLog.push(<UserMessage msg={msgLog[i].request} />);
      }
      if (msgLog[i].response) {
        MessageLog.push(<AgentMessage msg={msgLog[i].response} />);
      }
    }

    return <div className="message-list" id="message-list">{MessageLog}</div>;
  }
}

export default Messages;
