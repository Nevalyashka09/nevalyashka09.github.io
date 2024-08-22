import React from "react";
import "../styles/homePage.scss";
import profilePhoto from "../images/profilePhoto.png";
import uiux from "../images/uiux.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import ts from "../images/ts.png";
import react from "../images/react.png";
import wordpress from "../images/wordpress.png";
import paintBackground from "../images/paintBackground.png";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png";
import Button from "../portfolioComponents/Button";
import SideButton from "../portfolioComponents/SideButton";

const cards = [
  { name: "UI/UX", src: uiux },
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "JS", src: js },
  { name: "TS", src: ts },
  { name: "React", src: react },
  { name: "WP", src: wordpress },
];

const TechCard = ({ name, src }) => (
  <div className="techno-card">
    <img src={src} alt={name} className="techno-card-image" />
    <p
      className="p-istok"
      style={{
        fontSize: "0.6rem",
        margin: "0.2rem 1rem 1rem 0",
        alignSelf: "flex-end",
      }}
    >
      {name}
    </p>
  </div>
);

const HomePage = () => {
  return (
    <section>
      <section className="intro-section">
        <SideButton />
        <div className="photo-container">
          <img
            src={paintBackground}
            alt="Paint Background"
            className="paint-background"
          />
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
        </div>
        <div className="text-container">
          <div
            style={{
              margin: "5rem 0 0 0",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div>
              <h1>Hey There,</h1>
              <h1>I'm Olesia</h1>
            </div>
            <p className="p-istok">FRONT END WEB DEVELOPER</p>
            <Button />
          </div>
          <div style={{ margin: "5rem 0 0 15rem" }}>
            <p className="p-cursive">Based in Bordeaux, France</p>
          </div>
        </div>
      </section>
      <section className="my-help">
        <div className="help-text">
          <h1>How can I help ?</h1>
          <p className="p-istok">
            I design sleek, user-friendly interfaces. Whether it's for web or
            mobile, I’m all about making digital experiences that look great and
            work even better!
          </p>
        </div>
        <div className="techno-cards">
          <div className="techno-cards-row">
            {cards.slice(0, 3).map((card) => (
              <TechCard key={card.name} name={card.name} src={card.src} />
            ))}
          </div>
          <div className="techno-cards-row">
            {cards.slice(3).map((card) => (
              <TechCard key={card.name} name={card.name} src={card.src} />
            ))}
          </div>
        </div>
      </section>
      <section className="background">
        <div className="education">
          <div
            class="timeline"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>My Background</h1>
          </div>
          <div class="timeline"></div>
          <div class="timeline"></div>
          <div class="timeline">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                Wild Code School, Bordeaux
              </p>
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                <span style={{ color: "#1b5536", fontSize: "1.2rem" }}>
                  Fullstack Web Developer
                </span>{" "}
                | Feb - Jul 2023
              </p>
            </div>
            <div>
              <img src={arrowLeft} alt="Arrow" className="arrow" />
            </div>
          </div>
          <div class="timeline">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                Ecole 42, Paris
              </p>
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                <span style={{ color: "#1b5536", fontSize: "1.2rem" }}>
                  Piscine
                </span>{" "}
                | Mar - Apr 2021
              </p>
            </div>
            <div>
              <img src={arrowLeft} alt="Arrow" className="arrow" />
            </div>
          </div>
          <div class="timeline"></div>
          <div class="timeline">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                Fudan University, Shanghai
              </p>
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                <span style={{ color: "#1b5536", fontSize: "1.2rem" }}>
                  Master's Degree
                </span>{" "}
                | Sep 2011 - Jun 2015
              </p>
            </div>
            <div>
              <img src={arrowLeft} alt="Arrow" className="arrow" />
            </div>
          </div>
          <div class="timeline">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                Shevchenko University, Kyiv
              </p>
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                <span style={{ color: "#1b5536", fontSize: "1.2rem" }}>
                  Bachelor's Degree
                </span>{" "}
                | Sep 2007 - Jun 2011
              </p>
            </div>
            <div>
              <img src={arrowLeft} alt="Arrow" className="arrow" />
            </div>
          </div>
        </div>
        <div className="experience">
          <div class="timeline"></div>
          <div class="timeline">
            <div>
              <img src={arrowRight} alt="Arrow" className="arrow" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                <span style={{ color: "#1b5536", fontSize: "1.2rem" }}>
                  Freelance Web Developer
                </span>{" "}
                | Mar 2024
              </p>
            </div>
          </div>
          <div class="timeline">
            <div>
              <img src={arrowRight} alt="Arrow" className="arrow" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                Qomon, Bordeaux
              </p>
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                <span style={{ color: "#1b5536", fontSize: "1.2rem" }}>
                  Front End Developer
                </span>{" "}
                | Sep 2023 - Mar 2024
              </p>
            </div>
          </div>
          <div class="timeline"></div>
          <div class="timeline"></div>
          <div class="timeline">
            <div>
              <img src={arrowRight} alt="Arrow" className="arrow" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                Gucci, Paris
              </p>
              <p className="p-istok" style={{ fontSize: "1rem" }}>
                <span style={{ color: "#1b5536", fontSize: "1.2rem" }}>
                  Team Manager
                </span>{" "}
                | May 2021 - Dec 2022
              </p>
            </div>
          </div>
          <div class="timeline"></div>
          <div class="timeline"></div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
