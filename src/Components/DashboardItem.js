import React, { Component } from "react";

class DashboardItem extends Component {
  render() {
    return (
      <div className="dashboard-item-card">
        <h5>{this.props.intent}</h5>
      </div>
    );
  }
}

export default DashboardItem;
