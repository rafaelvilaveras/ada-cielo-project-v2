import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const NavList = ({ icon, title, info }) => {
  const [windowStatus, turnWindowStatus] = useState(false);
  const location = useLocation();

  return (
    <li
      style={{ gap: '0.5rem' }}
      className="flex-column nav-content prevent-select"
      onClick={() => {
        turnWindowStatus(!windowStatus);
      }}
    >
      <div className="flex-row nav-items">
        <div className="list-title flex-row">
          <img style={{ width: '1.25rem' }} src={icon} alt="icon" />
          <span>{title}</span>
        </div>
        {windowStatus && <i className="icon-active" />}
        {!windowStatus && <i className="icon-inactive" />}
      </div>
      {windowStatus && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex-column list-items"
        >
          {info.map((data, key) => {
            return (
              <div
                key={'list-link' + key}
                className={
                  location.pathname === data.route
                    ? 'list-Link list-active flex-row'
                    : 'list-Link flex-row'
                }
              >
                <Link
                  to={data.route}
                  style={
                    location.pathname === data.route
                      ? { color: 'white' }
                      : { color: 'black' }
                  }
                  className="link-text"
                >
                  {data.name}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </li>
  );
};

export default NavList;
