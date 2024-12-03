import React from "react";
import eagle from "../assets/img/chips/Eagle_Digital_Spring'23.JPG";
import sparrow from "../assets/img/chips/Sparrow_AnalogSpring'23.JPG";

function Chip() {
  return (
    <main id="main">
      <section id="about" class="breadcrumbs">
        <div class="container">
          <div class="section-title">
            <h1>Chip Gallery</h1>
          </div>
        </div>
      </section>

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
        text=""
        link="chip-gallery/sparrow"
      />
    </main>
  );
}

function ChipComponent(prop) {
  return (
    <section>
      <div className="chip">
        <img src={prop.img} />
        <div className="chip-desc">
          <h3>{prop.name}</h3>
          <h4>{prop.date}</h4>
          <p>{prop.text}</p>
          <a href={prop.link} className="btn-get-started scrollto">
            Check Out Our Blog!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Chip;
