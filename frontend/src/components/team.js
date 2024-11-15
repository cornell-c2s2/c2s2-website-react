import React from "react";

//Advisors
import acm289 from "../assets/img/team/acm289.jpg";
import cb535 from "../assets/img/team/cb535.jpg";
import vha3 from "../assets/img/team/vha3.jpg";

//Digital Subteam
import ayc62 from "../assets/img/team/ayc62.jpg";
import fl327 from "../assets/img/team/fl327.jpg";
import deg273 from "../assets/img/team/deg273.jpg";
import el595 from "../assets/img/team/el595.jpg";
import eyl47 from "../assets/img/team/eyl47.jpg";
import jjm469 from "../assets/img/team/jjm469.jpg";
import kjr64 from "../assets/img/team/kjr64.jpg";
import noUser from "../assets/img/team/no-user.jpg";
import vml37 from "../assets/img/team/vml37.jpg";

//Analog Subteam
import cx237 from "../assets/img/team/cx237.jpg";
import dgk64 from "../assets/img/team/dgk64.jpg";
import dcb277 from "../assets/img/team/dcb277.jpg";
import jzh8 from "../assets/img/team/jzh8.jpg";
import txd3 from "../assets/img/team/txd3.jpg";
import tjf87 from "../assets/img/team/tjf87.jpg";

//Software Team
import ec798 from "../assets/img/team/ec798.jpg";
import jf679 from "../assets/img/team/jf679.jpg";

//System Architecture Subteam
import av458 from "../assets/img/team/av458.jpg";
import cca54 from "../assets/img/team/cca54.jpg";
import ebc68 from "../assets/img/team/ebc68.jpg";
import sq86 from "../assets/img/team/sq86.jpg";

//Project Management Subteam
import akv45 from "../assets/img/team/akv45.jpg";
import amt263 from "../assets/img/team/amt263.jpg";
import zw286 from "../assets/img/team/zw286.jpg";

function Team() {
  return (
    <main id="main">
      <section id="team" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Meet the Team</h1>
          </div>
        </div>
      </section>
      <section id="team" className="team">
        <div className="container">
          <div className="inner-page" data-aos="fade-up">
            <p>
              C2S2 would not be possible without all of the amazing people that
              contribute to its success
            </p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Aidan McNay"
              role="Team Lead"
              img={acm289}
              github="https://github.com/Aidan-McNay"
              linkedin="https://www.linkedin.com/in/aidan-mcnay-0ba928201/"
            />

            <TeamMember
              name="Prof. Christopher Batten"
              role="Faculty Advisor"
              img={cb535}
              github=""
              linkedin="https://www.engineering.cornell.edu/faculty-directory/christopher-batten"
            />

            <TeamMember
              name="Prof. Hunter Adams"
              role="Faculty Advisor"
              img={vha3}
              github=""
              linkedin="https://www.engineering.cornell.edu/faculty-directory/hunter-adams"
            />
          </div>
        </div>
      </section>
      <section id="digital" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-file-earmark-binary"></i>
            <p>Digital Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Angela Cui"
              role=""
              img={ayc62}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Barry Lyu"
              role=""
              img={fl327}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Demetrios Gavalas"
              role=""
              img={deg273}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Edmund Lam"
              role="Digital Subteam Co-Lead"
              img={el595}
              github="https://github.com/UnsignedByte"
              linkedin=""
            />

            <TeamMember
              name="Emily Lan"
              role=""
              img={eyl47}
              github=""
              linkedin="https://www.linkedin.com/in/emily-lan-ca/"
            />

            <TeamMember
              name="Johnny Martinez"
              role="Digital Subteam Co-Lead"
              img={jjm469}
              github="https://github.com/jjm469"
              linkedin="https://www.linkedin.com/in/johnny-martinez469/"
            />

            <TeamMember
              name="Kevin Rodriguez"
              role=""
              img={kjr64}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Tomas Choi"
              role=""
              img={noUser}
              github=""
              linkedin="https://www.linkedin.com/in/tomas-choi-913189240"
            />

            <TeamMember
              name="Vicky Le"
              role=""
              img={vml37}
              github="https://github.com/VickyLe03"
              linkedin="https://www.linkedin.com/in/vicky-le-01725125b"
            />
          </div>
        </div>
      </section>

      <section id="analog" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-speedometer2"></i>
            <p>Analog Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Caden Xu"
              role=""
              img={cx237}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Daniel Kaminski"
              role=""
              img={dgk64}
              github="https://github.com/dgkaminski"
              linkedin="https://www.linkedin.com/in/daniel-kaminski-447785234/"
            />

            <TeamMember
              name="David Bertuch"
              role=""
              img={dcb277}
              github="https://github.com/DavidDavidDavidDavidDavidDavidDavid"
              linkedin="https://www.linkedin.com/in/david-bertuch/"
            />

            <TeamMember
              name="Jon Ho"
              role=""
              img={jzh8}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Taylor Do"
              role=""
              img={txd3}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Thomas Figura"
              role="Analog Subteam Lead"
              img={tjf87}
              github=""
              linkedin="https://www.linkedin.com/in/tjf87"
            />
          </div>
        </div>
      </section>

      <section id="software" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-code-slash"></i>
            <p>Software Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Elias Castro"
              role=""
              img={ec798}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Jack Frank"
              role=""
              img={jf679}
              github="https://github.com/frank-jack"
              linkedin="https://www.linkedin.com/in/jack-frank-4a9897245/"
            />
          </div>
        </div>
      </section>

      <section id="sys-arch" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-router"></i>
            <p>System Architecture Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Akshati Vaishnav"
              role="System Architecture Subteam Co-Lead"
              img={av458}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Chimdi Anude"
              role="System Architecture Subteam Co-Lead"
              img={cca54}
              github=""
              linkedin="https://www.linkedin.com/in/chimdi-anude/"
            />

            <TeamMember
              name="Kene Chukwuma-Orakwe"
              role=""
              img={ebc68}
              github="https://github.com/Kndlch"
              linkedin="https://www.linkedin.com/in/kene-cornell"
            />

            <TeamMember
              name="Sherri Qazi"
              role=""
              img={sq86}
              github=""
              linkedin=""
            />
          </div>
        </div>
      </section>

      <section id="proj-man" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-clipboard-check"></i>
            <p>Project Management Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Abigail Varghese"
              role="Project Management Subteam Lead"
              img={akv45}
              github=""
              linkedin="https://www.linkedin.com/in/abigail-varghese-589b49244"
            />

            <TeamMember
              name="Adele Thompson"
              role=""
              img={amt263}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Jason Wang"
              role=""
              img={zw286}
              github=""
              linkedin="https://www.linkedin.com/in/zhihanjasonwang/"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;

function TeamMember(prop) {
  return (
    <div
      className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="member">
        <img src={prop.img} className="img-fluid" alt="" />
        <div className="member-info">
          <div
            className={
              prop.github == "" && prop.linkedin == ""
                ? "member-info-content-no-social"
                : "member-info-content"
            }
          >
            <h4>{prop.name}</h4>
            {prop.role == "" ? "" : <span>{prop.role}</span>}
          </div>
          {prop.github == "" && prop.linkedin == "" ? (
            ""
          ) : (
            <div className="social">
              {prop.github == "" ? (
                ""
              ) : (
                <a target="_blank" href={prop.github}>
                  <i className="bi bi-github"></i>
                </a>
              )}
              {prop.linkedin == "" ? (
                ""
              ) : (
                <a target="_blank" href={prop.linkedin}>
                  <i className="bi bi-linkedin"></i>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
