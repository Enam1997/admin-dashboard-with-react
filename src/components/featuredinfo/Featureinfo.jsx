import React from "react";
import "./featuredinfo.css";

import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function Featureinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5,879</span>
          <span className="featuredMoneyRate">
            -7.3 <ArrowDownward className="featureIcon negative" />
          </span>
        </div>

        <span className="featuredSubTitle">compare to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,879</span>
          <span className="featuredMoneyRate">
            -4.3 <ArrowDownward className="featureIcon negative" />
          </span>
        </div>

        <span className="featuredSubTitle">compare to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$7,879</span>
          <span className="featuredMoneyRate">
            -4.3 <ArrowUpward className="featureIcon" />
          </span>
        </div>

        <span className="featuredSubTitle">compare to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Share</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3.687</span>
          <span className="featuredMoneyRate">
            -7.3 <ArrowDownward className="featureIcon negative" />
          </span>
        </div>

        <span className="featuredSubTitle">compare to last month</span>
      </div>
    </div>
  );
}
