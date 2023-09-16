import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/tech">
              Tech
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/news">
              News
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
        </ul>
      </div>

      <div className="topRight">
        <Link className="link" to="/profile">
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1468380/pexels-photo-1468380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="topImage"
          />
        </Link>

        <ul className="topList">
          <li className="topListItem" style={{ fontWeight: 400 }}>
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
