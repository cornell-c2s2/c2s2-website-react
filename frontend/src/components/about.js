import React from "react";
import CountUp from "react-countup";

// When the user clicks on <div>, open the popup
// function sd(num) {
//   var longdesc = document.getElementById("ld"+num);
//   var shortdesc = document.getElementById("sd"+num);
//   var pic = document.getElementById("pic"+num);
//   var name = document.getElementById("name"+num);
//   longdesc.style.visibility = "visible";
//   shortdesc.style.visibility = "hidden";
//   pic.style.visibility = "hidden";
//   name.style.visibility = "hidden";
// }
// function ld(num) {
//   var longdesc = document.getElementById("ld"+num);
//   var shortdesc = document.getElementById("sd"+num);
//   var pic = document.getElementById("pic"+num);
//   var name = document.getElementById("name"+num);
//   longdesc.style.visibility = "hidden";
//   shortdesc.style.visibility = "visible";
//   pic.style.visibility = "visible";
//   name.style.visibility = "visible";
// }

function About() {
  return (
    <>
      <main id="main">
        <section id="about" className="breadcrumbs">
          <div className="container">
            <div className="section-title">
              <h1>About Us</h1>
            </div>
          </div>
        </section>

        <section id="video" className="video">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/rS4QEqK-7Jc"
                    className="centered-video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  {/* </video> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="video" className="video">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/zI07SVDQrj0"
                    className="centered-video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  {/* </video> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="video" className="video">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/EhGAmz4xoGA"
                    className="centered-video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  {/* </video> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <p>
              Silicon CMOS chips are at the heart of every modern computing
              device from the smallest Internet-of-Things (IoT) device to the
              largest supercomputer. Unfortunately, undergraduate students
              currently do not have any opportunity to actually go through the
              process of fully specifying, designing, implementing, testing,
              fabricating, and evaluating a computer chip. Undergraduates leave
              Cornell thinking that fabricating computer chips is only possible
              at huge companies like Intel, AMD, NVIDIA, and Apple. Until
              recently, there was no realistic hands-on way for students to
              experience the complete computer chip design process. At the same
              time, exposing students to the beauty of computer chip design has
              never been more important, since the slowing of CMOS technology
              scaling means computer system designers must increasingly rely on
              specialized computer chips for continued improvements in
              performance and/or energy efficiency.
            </p>

            <p>
              How can students (from freshmen to seniors) gain hands-on computer
              chip design experience? The answer lies in the recent explosion in
              open-source chip design tools, open-source chip implementations,
              open-source process design kits, and low-cost computer chip
              fabrication services. Just as open-source software has
              democratized software design, open-source hardware is poised to
              democratized hardware design.
            </p>

            <p>
              The Cornell Custom Silicon Systems (C2S2) Project Team is a new
              project team funded through the{" "}
              <strong>Shen Fund for Social Impact.</strong>
              We leverage this emerging open-source hardware ecosystem to enable
              undergraduate students to specify, design, implement, test,
              fabricate, and evaluate custom computer chips. The final outcome
              will be a custom computer chip integrated on a custom circuit
              board with a complete software stack targeting an important
              application domain (we are currently partnered with the{" "}
              <a target="_blank" href="https://www.birds.cornell.edu/home/">
                Cornell Lab of Ornithology
              </a>
              ). This ambitious student-led team is likely unique across US
              universities, and will hopefully inspire a new generation of
              computer system designers.
            </p>
          </div>
        </section>

        <section id="counts" className="counts  section-bg">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-center">
                <div className="count-box">
                  <i className="bi bi-people"></i>
                  <AnimatedCounter end={46} />
                  <p>
                    <strong>Team Members</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-center">
                <div className="count-box">
                  <i className="bi bi-diagram-2"></i>
                  <AnimatedCounter end={5} />
                  <p>
                    <strong>Subteams</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-center">
                <div className="count-box">
                  <i className="bi bi-mortarboard"></i>
                  <AnimatedCounter end={6} />
                  <p>
                    <strong>Majors</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-cpu"></i>
                  <AnimatedCounter end={4} />
                  <p>
                    <strong>Taped-Out Chips</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;

const AnimatedCounter = ({
  start = 0,
  end = 5,
  duration = 1,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}) => {
  return (
    <div className={className}>
      <CountUp
        start={start}
        end={end}
        duration={duration}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        enableScrollSpy={true} // Set to true if you want counter to start when scrolled into view
      />
    </div>
  );
};
