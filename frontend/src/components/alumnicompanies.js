import React from "react";

import nvidia from "../assets/img/aluminCompanies/nvidia_logo.jpeg";
import spacex from "../assets/img/aluminCompanies/spacex_logo.jpeg";
import ge from "../assets/img/aluminCompanies/geaerospace_logo.jpeg";
import nasa from "../assets/img/aluminCompanies/nasa_logo.jpeg";
import google from "../assets/img/aluminCompanies/google_logo.jpeg";
import amd from "../assets/img/aluminCompanies/amd_logo.jpeg";
import intel from "../assets/img/aluminCompanies/intel_logo.jpeg";
import apple from "../assets/img/aluminCompanies/apple_logo.jpeg";
import ey from "../assets/img/aluminCompanies/ey_logo.jpeg";
import atlassian from "../assets/img/aluminCompanies/atlassian_logo.jpeg";
import aws from "../assets/img/aluminCompanies/aws_logo.jpeg";
import arm from "../assets/img/aluminCompanies/arm_logo.jpeg";
import apollo from "../assets/img/aluminCompanies/apollo_logo.jpeg";
import cadence from "../assets/img/aluminCompanies/cadence_logo.jpeg";
import dell from "../assets/img/aluminCompanies/dell_logo.jpeg";
import cisco from "../assets/img/aluminCompanies/cisco_logo.jpeg";

const AlumniCompanies = () => {
  const companies = [
    { name: "Nvidia", logo: nvidia },
    { name: "SpaceX", logo: spacex },
    { name: "GE Aerospace", logo: ge },
    { name: "NASA", logo: nasa },
    { name: "Google", logo: google },
    { name: "AMD", logo: amd },
    { name: "Intel", logo: intel },
    { name: "Apple", logo: apple },
    { name: "EY", logo: ey },
    { name: "Atlassian", logo: atlassian },
    { name: "AWS", logo: aws },
    { name: "ARM", logo: arm },
    { name: "Apollo", logo: apollo },
    { name: "Cadence", logo: cadence },
    { name: "Dell", logo: dell },
    { name: "Cisco", logo: cisco },
  ];

  // Pre-calculate random positions for initial placement
  const positionedCompanies = companies.map((company, index) => {
    return {
      ...company,
      // More central positioning with better distribution
      x: 15 + (index % 4) * 25 + (Math.random() * 10 - 5),
      y: 15 + Math.floor(index / 4) * 25 + (Math.random() * 10 - 5),
      scale: 0.9 + Math.random() * 0.4,
      // Reduce the base animation time by 20% to make it faster
      speed: 0.4 + Math.random() * 1.2, // 20% faster than before
      delay: index * 0.1,
    };
  });

  return (
    <section className="c2s2-alumni-companies-section">
      <div className="c2s2-alumni-container">
        <h2 className="c2s2-alumni-title">Where Our Alumni Have Gone</h2>

        <p className="c2s2-alumni-description">
          With skills developed through C2S2, our graduates have secured
          positions at leading technology companies, aerospace firms, and
          innovative organizations across various industries.
        </p>

        <div className="c2s2-alumni-logo-cloud">
          {positionedCompanies.map((company, index) => {
            return (
              <div
                className="c2s2-alumni-logo-item"
                key={index}
                style={{
                  left: `${company.x}%`,
                  top: `${company.y}%`,
                  transform: `translate(-50%, -50%) scale(${company.scale})`,
                  zIndex: Math.round(company.scale * 10),
                  // Animation speed is 20% faster here
                  animationDuration: `${(company.speed + 10) * 0.8}s`,
                  animationDelay: `${company.delay}s`,
                }}
              >
                <div className="c2s2-alumni-logo-container">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="c2s2-alumni-company-logo"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AlumniCompanies;
