import React from "react";

const StatItem = (props) => {
  const title = props.title;
  const value = props.value;

  return <div className="StatItem">
    <h5 className="stat-title">{title}</h5>
    <p className="stat-value">{value}</p>
  </div>;
};

export default StatItem;
