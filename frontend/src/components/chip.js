import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import chipData from "../chip.json";
import cnf from "../assets/img/chips/cnf_boat.png";
import dove from "../assets/img/chips/Dove(ECE5745_Spring'22).JPG";
import eagle from "../assets/img/chips/Eagle_Digital_Spring'23.JPG";
import sparrow from "../assets/img/chips/Sparrow_AnalogSpring'23.JPG";

const images = {
  cnf,
  dove,
  eagle,
  sparrow,
};

function Chip() {
  const location = useLocation();
  const [path, setPath] = useState("");
  const [chip, setChip] = useState(null);

  useEffect(() => {
    // Extract URL details whenever the location changes
    const path = location.pathname;

    // Update state
    setPath(path);

    // Obtains last part of url (unique to each chip)
    const pathId = path.split("/").pop();

    // Gets json data for specific chip
    setChip(chipData.find((item) => item.id === pathId));
  }, [location]);

  return (
    <main id="main">
      <section id="about" class="breadcrumbs">
        <div class="container">
          <div class="section-title">
            <h1>{chip == null ? "" : chip.title}</h1>
          </div>
          <div className="chip-page">
            <h2>{chip == null ? "" : chip.date}</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container chip-page-desc">
          <img
            src={chip == null ? "" : images[chip.id]}
            alt={chip == null ? "" : chip.id}
          />
          <p>{chip == null ? "" : chip.text}</p>
          <h3>More Info Soon</h3>
        </div>
      </section>
    </main>
  );
}

export default Chip;
