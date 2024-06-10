import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGamepad,
  faCircleHalfStroke,
  faCubesStacked,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link
        to="/dashboard"
        className={`sidebar-link ${
          location.pathname === "/dashboard" ? "active" : "inactive"
        }`}
      >
        <FontAwesomeIcon icon={faHome} /> Dashboard
      </Link>
      <hr />
      <Link
        to="/coinflip"
        className={`sidebar-link ${
          location.pathname === "/coinflip" ? "active" : "inactive"
        }`}
      >
        <FontAwesomeIcon icon={faCircleHalfStroke} /> Coin Flip
      </Link>
      <Link
        to="/plinko"
        className={`sidebar-link ${
          location.pathname === "/plinko" ? "active" : "inactive"
        }`}
      >
        <FontAwesomeIcon icon={faCubesStacked} /> Plinko
        <span className="badge">Coming Soon</span>
      </Link>
      <hr />

      {/* <Link to="/coming-soon" className="sidebar-link coming-soon">
        Coming Soon
        <span className="badge">New</span>
      </Link> */}
      {/* Add links for other options */}
      <div className="app-info">
        <span className="version">
          version <span className="versionNumber">0.0.1</span>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
