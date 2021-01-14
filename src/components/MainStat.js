import React from "react";

const MainStat = (props) => {
  const { state, desc } = props;
  return <div className="MainStat">
    <h4 className="MainStat-state">
      State: {state}
    </h4>
    <h5 className="MainStat-desc">
      Description: {desc}
    </h5>
  </div>;
};

export default MainStat;
