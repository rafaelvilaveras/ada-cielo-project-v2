import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "../../components/navbar/navbar";
import { AppHubStyle } from "./style";
import ItemContainer from "../../components/itemContainer/itemContainer";

const AppHub = () => {
    const [displayNav, turnDisplayNav] = useState(false);
    const location = useLocation();
  
    return (
      <AppHubStyle>
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
            { location.pathname === '/' && 
              <div>
                <h1>teste</h1>
              </div>
            }

            { location.pathname !== '/' && 
              <Outlet />
            }
          </div>
        </div>
      </AppHubStyle>
    );
  };
 
export default AppHub ;