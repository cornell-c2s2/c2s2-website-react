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
  const [chip, setChip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract URL details whenever the location changes
    const pathId = location.pathname.split("/").pop();

    // Fetch chip data from JSON file
    // For actual implementation, ensure the path is correct

    const selectedChip = chipData.find((item) => item.id === pathId);
    setChip(selectedChip);
    setLoading(false);
  }, [location]);

  if (loading) {
    return (
      <div className="chip-page">
        <div className="chip-page__loading">Loading chip data...</div>
      </div>
    );
  }

  if (!chip) {
    return (
      <div className="chip-page">
        <div className="chip-page__error">Chip not found</div>
      </div>
    );
  }

  return (
    <main id="main" className="chip-page">
      <section className="chip-page__header">
        <div className="container">
          <div className="chip-page__title-container">
            <h1 className="chip-page__title">{chip.title}</h1>
            <div className="chip-page__date">{chip.date}</div>
          </div>
        </div>
      </section>

      <section className="chip-page__content">
        <div className="container">
          <div className="chip-page__card">
            <div className="chip-page__image-container">
              <img
                src={images[chip.id]}
                alt={`${chip.title} chip`}
                className="chip-page__image"
              />
            </div>
            <div className="chip-page__details">
              <div className="chip-page__description">
                <h2 className="chip-page__subtitle">Description</h2>
                <p>{chip.text}</p>
              </div>

              {chip.specifications && (
                <div className="chip-page__specs">
                  <h2 className="chip-page__subtitle">Specifications</h2>
                  <ul className="chip-page__specs-list">
                    {Object.entries(chip.specifications).map(([key, value]) => (
                      <li key={key} className="chip-page__spec-item">
                        <span className="chip-page__spec-key">{key}:</span>{" "}
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* 
              {chip.features && (
                <div className="chip-page__features">
                  <h2 className="chip-page__subtitle">Features</h2>
                  <ul className="chip-page__features-list">
                    {chip.features.map((feature, index) => (
                      <li key={index} className="chip-page__feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}

              <div className="chip-page__more-info">
                <h3 className="chip-page__more-info-title">
                  Technical Documentation
                </h3>
                <p className="chip-page__more-info-text">
                  Additional technical information and documentation coming
                  soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Chip;
