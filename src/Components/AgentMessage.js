import React, { Component } from "react";

class AgentMessage extends Component {
  render() {
    const { msg } = this.props;
    return (
      <div className="agent-message-container">
        <span className="agent-avatar-message-time">
          <span className="name">
            <p>agent_name</p>
          </span>
          <div className="agent-avatar-message">
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQGcp8x8DO-jPQ/company-logo_200_200/0/1589439972484?e=2159024400&v=beta&t=pszKMR5SYnxx0c5qVxJ1k9xIXKD94lJuioG1eYQWpDs" />
            <div className="agent-message-card">
              <p>{msg}</p>
            </div>
          </div>
          <span className="time">
            <p>5:05pm</p>
          </span>
        </span>
      </div>
    );
  }
}

export default AgentMessage;
