import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import "./Sidebar.css";
import { SIDEBAR_STATIC_DATA } from "../../static/Sidebar_Static";
function Sidebar() {
  const { url } = useRouteMatch();
  return (
    <div className="admin--sidebar--main--container">
      <img src="" alt="Company Logo" className="admin--sidebar--logo" />
      <div className="admin--sidebar--profile">
        <img src="" alt="" className="profile--img" />
        <p className="profile--personal--info">
          Company Boss <br /> Osimjonov Isokjon
        </p>
      </div>
      <ul className="sidebar--collection">
        {SIDEBAR_STATIC_DATA?.map((sidebar_item) => (
          <li key={sidebar_item.id} className="sidebar__collection-item">
            <NavLink
              to={`${url}/${sidebar_item.route}`}
              className="admin--sidebar--links"
            >
              {sidebar_item.sidebarTitle}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
