import React from "react";
import image from "../images/logolemon.svg";

export const Header = () => {
  return (
    <div className="header-little-lemmon main-padding">
      <a href="#">
        <img src={image} alt="" />
      </a>
      <nav className="karla-font">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
