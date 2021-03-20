import React from "react";
import "./Nav.css";
import icon from "../../assets/eth-icon.png";

export default function Nav() {
  return (
    <div className="nav">
      <img className="nav__logo" src={icon} alt="Logo" />
      <div className="nav__right">
        <a href="#" className="nav__link">
          Market
        </a>
        <button className="nav__btn">Connect Wallet</button>
      </div>
    </div>
  );
}
