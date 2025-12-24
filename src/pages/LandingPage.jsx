import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <section className="landing-container">
  
      <div className="landing-text">
        <h1 className="landing-title">
          All Your Work,
          <br />
          <span>Organized</span> in One Place
        </h1>

        <p className="landing-subtitle">
          Manage projects, track time, handle clients, and create invoices
          effortlessly using one powerful, easy-to-use platform.
        </p>

        <div className="landing-buttons">
          <button
            className="btn-primary"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>

    
      <div className="landing-image-wrapper">
        <img
          src="/banner-freelancer.jpg"
          alt="App preview"
          className="landing-image"
        />
      </div>
    </section>
  );
}

export default LandingPage;
