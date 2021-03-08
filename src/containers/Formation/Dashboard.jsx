import React from "react";
import GroupedBar from "./Charts/GroupedBar";
import PieChart from "./Charts/PieChart";
import RadarChart from "./Charts/RadarChart";
import {
  faGraduationCap,
  faCertificate,
  faUserGraduate,
  faUsers,
  faBookReader,
} from "@fortawesome/free-solid-svg-icons";
import InfoBoxeItem from "./Charts/InfoBoxeItem";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="info-boxes">
        <InfoBoxeItem
          icon={faGraduationCap}
          text="Formations"
          number="10"
          color="info"
        />
        <InfoBoxeItem
          icon={faCertificate}
          text="Certificats"
          number="50"
          color="success"
        />
        <InfoBoxeItem
          icon={faUserGraduate}
          text="Formés"
          number="70"
          color="warning"
        />
        <InfoBoxeItem
          icon={faUsers}
          text="Personnel"
          number="40"
          color="danger"
        />
        <InfoBoxeItem
          icon={faBookReader}
          text="Ouvrages"
          number="30"
          color="primary"
        />
      </div>
      <div className="circle-chart">
        <div className="chart-container">
          <RadarChart />
        </div>
        <div className="chart-container">
          <PieChart />
        </div>
      </div>

      <GroupedBar />
    </div>
  );
};

export default Dashboard;
