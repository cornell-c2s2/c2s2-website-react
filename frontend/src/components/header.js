import React from "react";
import logo from "../assets/img/logo.png";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    // Extract URL details whenever the location changes
    const path = location.pathname;

    // Update state
    setPath(path);
  }, [location]);

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <a href="./">
            <img src={logo} alt="C2S2 Logo" className="img-fluid" />
          </a>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a
                className={`nav-link scrollto ${path == "/" ? "active" : ""}`}
                href="./"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  path == "/chip-galllery" ? "active" : ""
                }`}
                href="chip-gallery"
              >
                Chip Gallery
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  path == "/about" ? "active" : ""
                }`}
                href="about"
              >
                About Us
              </a>
            </li>
            <li className="dropdown">
              <a
                className={`nav-link scrollto ${
                  path == "/team" ? "active" : ""
                }`}
                href="team"
              >
                <span>Meet the Team</span>{" "}
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a className="nav-link scrollto" href="team#digital">
                    Digital
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="team#analog">
                    Analog
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="team#software">
                    Software
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="team#sys-arch">
                    System Architecture
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="team#proj-man">
                    Project Management
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  path == "/blog" ? "active" : ""
                }`}
                href="blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  path == "/sponsors" ? "active" : ""
                }`}
                href="sponsors"
              >
                Sponsors
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="apply">
                Apply
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
