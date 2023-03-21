import Windows from "assets/images/windows.png";
import TopTenGold from "assets/images/topten-gold.png";
import TopTenBlue from "assets/images/topten-blue.png";
import Excellent from "assets/images/excellent.png";
import Virus from "assets/images/virus.png";
import { useEffect, useMemo, useState } from "react";
import useIsMobile from "hooks/useIsMobile";

const VirusReport = () => {
  const isMobile = useIsMobile();

  return (
    <div className="virus-report">
      <h3 className="top-title">
        {isMobile ? "Virus Bulletin Awards" : "Virus Bulletin intego AV Report"}
      </h3>
      <div className="inner-content">
        <div className="left-side">
          <h6 className="title">Awards</h6>
          <div className="awards-list">
            <img src={Windows} alt="" />
            <img src={TopTenGold} alt="" />
            <img src={TopTenBlue} alt="" />
            <img src={Excellent} alt="" />
            <img src={Virus} alt="" />
          </div>
        </div>
        <div className="right-side">
          <h6 className="title">
            {isMobile && <img src={Virus} alt="" />}
            {isMobile ? "Detailed Test Results" : "VB Detailed Test Results"}
          </h6>
          <div className="stats">
            <div className="stats-item">
              <span>Performance</span>
              <span className="percent">100%</span>
            </div>
            <div className="gap" />
            <div className="stats-item">
              <span>Protection</span>
              <span className="percent">100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirusReport;
