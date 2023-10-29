import React from "react";
import "./Homepage.sass";
import { Timeline } from "./timeline/Timeline";
import Sidenav from "./navigation/Sidenav";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
      <div className="homepage__nav"></div>
    </div>
  );
};

export default Homepage;
