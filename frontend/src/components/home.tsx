import React from "react";

function Home() {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="./">
              <img
                src="assets/img/logo.png"
                alt="C2S2 Logo"
                className="img-fluid"
              />
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

      <main id="main">
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1>Welcome to C2S2!</h1>
                <h2>
                  A Cornell Engineering Project Team dedicated to undergraduate
                  semiconductor design
                </h2>
                <div>
                  <a href="./blog" className="btn-get-started scrollto">
                    Check Out Our Blog!
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <img
                  src="assets/img/hero-img.png"
                  className="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 footer-contact">
                <h3>Cornell Custom Silicon Systems (C2S2)</h3>
                <p>
                  <strong>Email:</strong> c2s2@cornell.edu
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/cornell.silicon/"
                    className="instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/cornell-custom-silicon-systems/"
                    className="linkedin"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="mailto:c2s2@cornell.edu" className="gmail">
                    <i className="bx bx-envelope"></i>
                  </a>
                  <a href="https://github.com/cornell-c2s2" className="github">
                    <i className="bx bxl-github"></i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="./">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="about">About Us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="team">Meet the Team</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="blog">Blog</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="sponsors">Sponsors</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="apply">Apply</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra videa
                  magna derita valies
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Cornell Custom Silicon Systems</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
