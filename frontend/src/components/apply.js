import React from "react";

const Apply = () => {
  return (
    <>
      <main id="main">
        <section id="apply" className="breadcrumbs">
          <div className="container">
            <div className="section-title">
              <p>Apply to C2S2</p>
            </div>
          </div>
        </section>

        <section className="py-5">
          <ul className="timeline-with-icons">
            <li className="timeline-item mb-5">
              <span className="timeline-icon">
                <i className="bi bi-people"></i>
              </span>

              <h5 className="fw-bold">Information Session #1</h5>
              <p className="text-muted mb-2 fw-bold">
                5:00 p.m. on Thursday, August 29th, 2024 in Hollister 306
              </p>
              <p className="text-muted">
                Our first information session of the year! Come learn more about
                the team from our team lead and subteam leads, and ask any
                questions you have to current members.
              </p>
            </li>

            <li className="timeline-item mb-5">
              <span className="timeline-icon">
                <i className="bi bi-people"></i>
              </span>
              <h5 className="fw-bold">Information Session #2</h5>
              <p className="text-muted mb-2 fw-bold">
                5:00 p.m. on Tuesday, September 3rd, 2024 in Hollister 401
              </p>
              <p className="text-muted">
                Miss our first information session? No worries! Come find us at
                our second information session to learn more about the team and
                ask any questions you have to current members.
              </p>
            </li>

            <li className="timeline-item mb-5">
              <span className="timeline-icon">
                <i className="bi bi-balloon"></i>
              </span>
              <h5 className="fw-bold">Project Team Fest</h5>
              <p className="text-muted mb-2 fw-bold">
                4:00 - 6:00 p.m. on Thursday, September 5th, 2024 in Duffield
                Atrium
              </p>
              <p className="text-muted">
                We'll be at Project Team Fest! This is an event where you can
                meet all of the Project Teams, including C2S2. Come learn more
                about the team and get a glimpse at some of the cool hardware we
                get to work with.
              </p>
            </li>

            <li className="timeline-item mb-5">
              <span className="application-icon">
                <i className="bi bi-file-earmark-person"></i>
              </span>
              <h5 className="fw-bold">Upperclass Applications Due</h5>
              <p className="text-muted mb-2 fw-bold">
                11:59 p.m. on Thursday, September 5th, 2024
              </p>
              <p className="text-muted">
                UpperclassName Applications are due! See our application down
                below, and reach out with any questions.
              </p>
            </li>

            <li className="timeline-item mb-5">
              <span className="timeline-icon">
                <i className="bi bi-balloon"></i>
              </span>
              <h5 className="fw-bold">ClubFest</h5>
              <p className="text-muted mb-2 fw-bold">
                11:00 - 1:00 on Saturday, September 7th, 2024 on the Arts Quad
              </p>
              <p className="text-muted">
                We'll be at ClubFest! This is where you can meet many of the
                student organizations on campus, incuding C2S2 - be on the
                lookout for our large poster!
              </p>
            </li>

            <li className="timeline-item mb-5">
              <span className="timeline-icon">
                <i className="bi bi-people"></i>
              </span>
              <h5 className="fw-bold">Information Session #3</h5>
              <p className="text-muted mb-2 fw-bold">
                5:00 p.m. on Wednesday, October 9th, 2024 in Hollister 306
              </p>
              <p className="text-muted">
                Want one last chance to meet the team? This will be our last
                information session, so make sure to come to meet the team and
                learn all about what we do!
              </p>
            </li>

            <li className="timeline-item mb-5">
              <span className="application-icon">
                <i className="bi bi-file-earmark-person"></i>
              </span>
              <h5 className="fw-bold">First-Year/Transfer Applications Due</h5>
              <p className="text-muted mb-2 fw-bold">
                11:59 p.m. on Thursday, October 17th, 2024
              </p>
              <p className="text-muted">
                First-Year/Transfer Applications are due! See our application
                down below, and reach out with any questions.
              </p>
            </li>
          </ul>
        </section>

        <section id="applications" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <p>Applications</p>
            </div>

            <div className="row">
              <div
                className="col-md-6 col-lg-6 d-block align-items-center"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">Upperclass Application</h4>
                  <p className="description">
                    Due{" "}
                    <strong>11:59 p.m. on Thursday, September 5th, 2024</strong>
                  </p>
                  <a
                    target="_blank"
                    href="https://forms.gle/BcZivhLWqr77fP548"
                    className="application-btn"
                  >
                    Click Here to Apply!
                  </a>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-6 d-block align-items-center"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">First-Year/Transfer Application</h4>
                  <p className="description">
                    Due{" "}
                    <strong>11:59 p.m. on Thursday, October 17th, 2024</strong>
                  </p>
                  <a
                    target="_blank"
                    href="https://forms.gle/6Q7CaJvQWUeb63tN8"
                    className="application-btn"
                  >
                    Click Here to Apply!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Apply;
