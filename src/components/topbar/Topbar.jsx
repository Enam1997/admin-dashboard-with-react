import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">EnamAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
            <Language />
          </div>

          <div className="topbarIconsContainer">
            <Settings />
          </div>
          <img
            src="https://scontent.fdac147-1.fna.fbcdn.net/v/t39.30808-6/311237106_2000302893473216_628315855693432983_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=r4iSLqrByQUAX_gHTPS&_nc_ht=scontent.fdac147-1.fna&oh=00_AfDHaG-p4QttKmBu_HPOWOWZ4RC5ZVp2p4W8NbkQyrosZw&oe=63E25B25"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};
