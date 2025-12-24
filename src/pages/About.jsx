import React from "react";
import "./about.css";
import withoutImg from "../assets/without.png";
import withImg from "../assets/with.png";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-heading">Make more, manage less</h2>
      <p className="about-tagline">
        Freelanchal integrates and automates every step of your business so it runs seamlessly – from proposal to tax season.
      </p>

      <div className="comparison-block">
        <div className="comparison">
          <h3>Without Freelanchal</h3>
          <img src={withoutImg} alt="Without Freelanchal" />
        </div>
        <div className="comparison">
          <h3>With Freelanchal</h3>
          <img src={withImg} alt="With Freelanchal" />
        </div>
      </div>
    </section>
  );
};

export default About;
