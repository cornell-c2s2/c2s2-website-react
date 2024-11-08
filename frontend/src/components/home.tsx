import React from "react";
import "../assets/css/index.css";

function Home() {
  return (
    <>
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
                  src="../assets/img/hero-img.png"
                  className="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
