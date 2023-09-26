import { useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/navbar/navbar";

const AppHub = () => {
    const [displayNav, turnDisplayNav] = useState(false);
  
    return (
      <div className="flex-row ah-container">
        <div className="ah-nav-wrapper">
          <div className={displayNav ? ' ah-nav ah-nav-visible ' : ' ah-nav ah-nav-hidden '}>
            <NavBar />
            <div
              className="ah-showNav"
              onClick={() => {
                turnDisplayNav(!displayNav);
              }}
            >
              {'+'}
            </div>
          </div>
        </div>
        <div className="flex-column ah-content">
          <Outlet />
        </div>
      </div>
    );
  };
 
export default AppHub ;