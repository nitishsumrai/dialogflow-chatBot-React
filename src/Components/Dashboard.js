import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardItem from "./DashboardItem";
import Loader from "./Loader";

class Dashboard extends Component {
  render() {
    const DashboardList = [];
    const { intents, inProgress } = this.props;

    for (var i = 0; i < intents.length; i++) {
      DashboardList.push(<DashboardItem intent={intents[i]} />);
    }
    return (
      <div className="dashboard-container">
        <div className="nav-dashboard">
          <div className="triny-logo">
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQGcp8x8DO-jPQ/company-logo_200_200/0/1589439972484?e=2159024400&v=beta&t=pszKMR5SYnxx0c5qVxJ1k9xIXKD94lJuioG1eYQWpDs"></img>
            <h2>Triny Bot Intent</h2>
          </div>
        </div>
        {inProgress ? (
          <Loader />
        ) : (
          <div className="dashboard-list">{DashboardList}</div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps)(Dashboard);
