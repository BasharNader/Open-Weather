import React from "react";
import StatItem from "./StatItem";
import './Stats.css';

const Stats = ({stats}) => {
  return <div className="Stats">
    {
      stats.map((stat, i) => <StatItem  key={i} {...stat} />)
    }
  </div>;
};

export default Stats;
