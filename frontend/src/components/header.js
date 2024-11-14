import React from "react";
import logo from "../assets/img/logo.png";

//have to make a function to detect what link should be highlighted red "active" classname

function Header() {
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
              <a className="nav-link scrollto active" href="./">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="about">
                About Us
              </a>
            </li>
            <li className="dropdown">
              <a href="team">
                <span>Meet the Team</span>{" "}
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a className="nav-link scrollto" href="team.html#digital">
                    Digital
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="team.html#analog">
                    Analog
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="team.html#software">
                    Software
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="team.html#sys-arch">
                    System Architecture
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="team.html#proj-man">
                    Project Management
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="blog">
                Blog
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="sponsors">
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
