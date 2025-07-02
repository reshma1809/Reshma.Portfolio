import React from "react";
import "./Home.css";
import ProfileImage from "../Assets/reshu.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container">
      {/* Background sparkles and bubbles */}
      <div className="bubbles">
        {[...Array(30)].map((_, i) => (
          <span
            key={`bubble-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 20}px`,
              height: `${Math.random() * 20 + 20}px`,
              animationDelay: `${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      <div className="twinkles">
        {[...Array(25)].map((_, i) => (
          <span
            key={`twinkle-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="bubble-layer" />
      <div className="home-content">
        <div className="text-section">
          <h5>Welcome to my digital space, This is</h5>
          <h1> RESHMA SIRLI</h1>
          <h2>Full Stack Developer | Salesforce Admin</h2>
          <p>
            I’m a passionate software engineer creating seamless digital experiences — blending responsive front-end design with scalable back-end development. <br />
            With expertise in the Salesforce ecosystem, I customize objects, build smart automation flows, and enhance CRM usability — aligning tech with real business needs.

 <br />
            </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://github.com/reshma1809" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/reshma-sirli-802696289" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/_reshma7368_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="image-section">
          <img
            src={ProfileImage}
            alt="profile"
            className="profile-img floating"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
