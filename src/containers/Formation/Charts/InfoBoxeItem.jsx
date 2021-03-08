import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./infoBoxe.css";
const InfoBoxeItem = ({ icon, text, number, color }) => {
  return (
    <div className="info-box">
      <span className={"info-box-icon bg-" + color + " elevation-1"}>
        <FontAwesomeIcon icon={icon} />
      </span>

      <div className="info-box-content">
        <span className="info-box-text">{text}</span>
        <span className="info-box-number">
          {number}
          <small>%</small>
        </span>
      </div>
    </div>
  );
};

export default InfoBoxeItem;
