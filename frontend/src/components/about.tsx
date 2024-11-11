import React from "react";
import "../assets/css/index.css";

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

        {/* <section>

  <div className="section-title underline">
    <h1>Chip Gallery</h1>
  </div>
  </div> 
  <div className="scroll-container"> 
    <div className="responsive" data-aos="zoom-in" data-aos-delay="100">
      <div className="gallery">
        <img src="assets/photos/ece5745-tapeout-die-photo.jpg" id="pic1">
        <div className="desc-info">
          <span className="long-desc" style="visibility: hidden;" id="ld1" onclick="ld(1)"> A bare silicon die fabricated as part of the ECE 5745 course tapeout project, representing early chip design that preceded the formation of C2S2. This unpackaged semiconductor die contains the complete integrated circuit design but remains in its raw form without packaging or encapsulation, exposing the patterned silicon wafer.
          </span>
          <div className="desc">
            <h4 id="name1">ECE 5745 Tapeout Die</h4>
            <span className="short-desc" id="sd1" onclick="sd(1)">click for more info
            </span> 
          </div>
        </div>
        
      </div>
    </div>
    <div className="responsive" data-aos="zoom-in" data-aos-delay="100">
      <div className="gallery">
        <img src="assets/photos/ece5745-tapeout-manydie.jpg" id="pic2">
        <div className="desc-info">
          <span className="long-desc" style="visibility: hidden;" id="ld2" onclick="ld(2)">A collection of multiple unpackaged silicon dies from the ECE 5745 course tapeout project. Each die is identical in design and fabrication, containing the same integrated circuit pattern cut (diced) from the original silicon wafer. This set demonstrates various stages of the semiconductor fabrication process and serves as a valuable educational resource for understanding chip design, wafer dicing, and pre-packaging integrated circuit components.
          </span>
          <div className="desc">
            <h4 id="name2">ECE 5745 Tapeout, Many Die</h4>
            <span className="short-desc" id="sd2" onclick="sd(2)">click for more info
            </span> 
          </div>
        </div>
      </div>
    </div>

    <div className="responsive" data-aos="zoom-in" data-aos-delay="100">
      <div className="gallery">
        <img src="assets/photos/cnf_boat.png" id="pic3">
        <div className="desc-info">
          <span className="long-desc" style="visibility: hidden;" id="ld3" onclick="ld(3)">Using CNF's optical microscopy, we can see a sailing ship design, that was added by our manufacturer Efabless, embedded in the metal layers of our digital chip, Eagle. Located among the standard cells and metal fill patterns, this microscopic artwork demonstrates how artistic elements can be integrated into functional IC layouts. 
          </span>
          <div className="desc">
            <h4 id="name3">CNF Chip Art</h4>
            <span className="short-desc" id="sd3" onclick="sd(3)">click for more info
            </span> 
          </div>
          
        </div>
      </div>
    </div>

    <div className="responsive" data-aos="zoom-in" data-aos-delay="100">
      <div className="gallery">
        <img src="assets/photos/Dove(ECE5745_Spring'22).JPG" id="pic4">
        <div className="desc-info">
          <span className="long-desc" style="visibility: hidden;" id="ld4" onclick="ld(4)">This test chip, developed by the ECE 5745 class, is designed to explore the capabilities of Caravel and OpenLane. At its core, the chip features a RISC-V Litex SoC architecture, enabling flexible and efficient processing. It integrates four specialized hardware accelerators to enhance performance in various applications: Group 15: Wavelet Compression Accelerator, Group 16: SpMV Accelerator, Group 17: BNN Accelerator, Group 99: GCD Accelerator
          </span>
          <div className="desc">
            <h4 id="name4">Dove ECE 5745 Spring'22</h4>
            <span className="short-desc" id="sd4" onclick="sd(4)">click for more info
            </span> 
          </div>
        </div>
      </div>
    </div>

    <div className="responsive" data-aos="zoom-in" data-aos-delay="100">
      <div className="gallery">
        <img src="assets/photos/Eagle_Digital_Spring'23.JPG" id="pic5">
        <div className="desc-info">
          <span className="long-desc" style="visibility: hidden;" id="ld5" onclick="ld(5)">The 2023 C2S2 Digital Tapeout showcases a design centered around a RISC-V Litex System on Chip. This chip features a custom digital Cooley-Tukey Fast Fourier Transform (FFT) implementation, optimized for high-speed signal processing tasks. The RISC-V architecture provides a flexible and scalable processing platform, enabling efficient execution of complex algorithms and data manipulation.
          </span>
          <div className="desc">
            <h4 id="name5">Eagle Digital Spring'23</h4>
            <span className="short-desc" id="sd5" onclick="sd(5)">click for more info
            </span> 
          </div>
        </div>
      </div>
    </div>

    <div className="responsive" data-aos="zoom-in" data-aos-delay="100" style="margin-right: 10px;">     
      <div className="gallery">
        <img src="assets/photos/Sparrow_AnalogSpring'23.JPG" id="pic6">   
        <div className="desc-info">
          <span className="long-desc" style="visibility: hidden;" id="ld6" onclick="ld(6)">The 2023 C2S2 Analog Tapeout features an innovative hardware design centered around a RISC-V Litex System on Chip (SoC). This versatile chip incorporates multiple analog components to enhance its functionality: operational amplifiers – integrated to provide versatile analog signal processing capabilities, “fingers" implementation – allows for efficient interfacing and control in various analog scenarios, and “multiplier" implementation – facilitates analog multiplication processes for applications requiring signal modulation and other complex mathematical operations.
          </span>
          <div className="desc">
            <h4 id="name6">Sparrow Analog Spring'23</h4>
            <span className="short-desc" id="sd6" onclick="sd(6)">click for more info
            </span> 
          </div>
        </div>
      </div>
    </div>

    
  </div>

  
</section> */}

        <section id="counts" className="counts  section-bg">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-center">
                <div className="count-box">
                  <i className="bi bi-people"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="38"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong>Team Members</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-center">
                <div className="count-box">
                  <i className="bi bi-diagram-2"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="5"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong>Subteams</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-center">
                <div className="count-box">
                  <i className="bi bi-mortarboard"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="6"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong>Majors</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-cpu"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="4"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
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
