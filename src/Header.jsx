import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Header = props => {
  const { branding } = props;
  return (
    <div className="navi navbar navbar-expand-sm navbar-dark mb-3 bg-info py-1">
      <div className="container">
        <a className="nav navbar-brand" href="#">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Main
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/daily" className="nav-link">
                Daily
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hourly" className="nav-link">
                Hourly
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-bolt mr-1" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question mr-1" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
