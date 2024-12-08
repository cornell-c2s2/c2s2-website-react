import React from "react";
import cnf from "../assets/img/chips/cnf_boat.png";
import dove from "../assets/img/chips/Dove(ECE5745_Spring'22).JPG";
import eagle from "../assets/img/chips/Eagle_Digital_Spring'23.JPG";
import sparrow from "../assets/img/chips/Sparrow_AnalogSpring'23.JPG";

function ChipGallery() {
  return (
    <main id="main">
      <section id="about" class="breadcrumbs">
        <div class="container">
          <div class="section-title">
            <h1>Chip Gallery</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container chip-gallery-container">
          <ChipComponent
            img={cnf}
            name="CNF Chip Art"
            date="Spring 2022"
            text="Using CNF's optical microscopy, we can see a sailing ship design, that was added by our manufacturer Efabless, embedded in the metal layers of our digital chip, Eagle. Located among the standard cells and metal fill patterns, this microscopic artwork demonstrates how artistic elements can be integrated into functional IC layouts."
            link="chip-gallery/cnf"
          />
          <ChipComponent
            img={dove}
            name="Dove ECE 5745"
            date="Spring 2022"
            text="This test chip, developed by the ECE 5745 class, is designed to explore the capabilities of Caravel and OpenLane. At its core, the chip features a RISC-V Litex SoC architecture, enabling flexible and efficient processing. It integrates four specialized hardware accelerators to enhance performance in various applications: Group 15: Wavelet Compression Accelerator, Group 16: SpMV Accelerator, Group 17: BNN Accelerator, Group 99: GCD Accelerator"
            link="chip-gallery/dove"
          />
          <ChipComponent
            img={eagle}
            name="Eagle Digital Chip"
            date="Spring 2024"
            text="The 2023 C2S2 Digital Tapeout showcases a design centered around a RISC-V Litex System on Chip. This chip features a custom digital Cooley-Tukey Fast Fourier Transform (FFT) implementation, optimized for high-speed signal processing tasks. The RISC-V architecture provides a flexible and scalable processing platform, enabling efficient execution of complex algorithms and data manipulation"
            link="chip-gallery/eagle"
          />
          <ChipComponent
            img={sparrow}
            name="Sparrow Analog"
            date="Spring 2023"
            text="The 2023 C2S2 Analog Tapeout features an innovative hardware design centered around a RISC-V Litex System on Chip (SoC). This versatile chip incorporates multiple analog components to enhance its functionality: operational amplifiers â€“ integrated to provide versatile analog signal processing capabilities, â€œfingers“ implementation â€“ allows for efficient interfacing and control in various analog scenarios, and â€œmultiplier“ implementation â€“ facilitates analog multiplication processes for applications requiring signal modulation and other complex mathematical operations."
            link="chip-gallery/sparrow"
          />
        </div>
      </section>
    </main>
  );
}

function ChipComponent(prop) {
  return (
    <section>
      <div className="chip-gallery-item">
        <img src={prop.img} />
        <div className="chip-desc">
          <h3>{prop.name}</h3>
          <h4>{prop.date}</h4>
          <p>{prop.text}</p>
          <a href={prop.link} className="btn-get-started scrollto">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}

export default ChipGallery;
