import React from "react";
import StatItem from "./StatItem";
import './Stats.css';

const Stats = ({stats}) => {
  return <div className="Stats">
    {
      stats.map(stat => <StatItem {...stat} />)
    }
  </div>;
};

export default Stats;
