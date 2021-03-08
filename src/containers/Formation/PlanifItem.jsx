import React from "react";

const PlanifItem = ({ item }) => {
  return (
    <a className="planifItem" href={"/planification/" + item.value}>
      <div className="planifItem-formation">{item.formation.label}</div>
      <div className="planifItem-label">{item.label}</div>
    </a>
  );
};

export default PlanifItem;
