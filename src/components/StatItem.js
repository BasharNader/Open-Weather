import React from "react";

const StatItem = (props) => {
  const title = props.title;
  const value = props.value;


  return <div className="StatItem">
    <h5 className="stat-title">{title}</h5>
    {title === "Icon" ? <img src={`http://openweathermap.org/img/wn/${value}@2x.png`} alt="icon"/> : <p className="stat-value">{value}</p>}
  </div>;
};

export default StatItem;
