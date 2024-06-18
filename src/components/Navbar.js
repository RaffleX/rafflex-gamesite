import React from "react";
import logo from "../logo.png";
import "./Navbar.css";
import toast, { Toaster } from "react-hot-toast";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faBolt } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ credits }) => {
  return (
    <nav className="navbar flex justify-between items-center">
      <img src={logo} alt="Logo" className="logo" />
      <div className="nav-credits-and-tokens">
        <div className="nav-credits">
          <FontAwesomeIcon icon={faBolt} />
          <span className="nav-credits-amount" id="nav-credits-amount">
            Credits: {credits}
          </span>
        </div>
      </div>

      <ConnectWallet />

      <Toaster position="bottom-right" reverseOrder={false} />
    </nav>
  );
};

export default Navbar;
