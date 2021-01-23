import React, { Component } from "react";
import { ChatBotButton, ChatBot, Dashboard } from "./";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Dashboard />
        {this.props.visibility && <ChatBot />}
        <ChatBotButton />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(App);
