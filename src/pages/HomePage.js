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

const educationData = [
  {
    date: "Feb - Jul 2023",
    position: "Fullstack Web Developer",
    company: "Wild Code School, Bordeaux",
  },
  {
    date: "Mar - Apr 2021",
    position: "Piscine",
    company: "Ecole 42, Paris",
  },
  {
    date: "Sep 2011 - Jun 2015",
    position: "Master's Degree",
    company: "Fudan University, Shanghai",
  },
  {
    date: "Sep 2007 - Jun 2011",
    position: "Bachelor's Degree",
    company: "Shevchenko University, Kyiv",
  },
];

const experienceData = [
  {
    date: "Mar 2024",
    position: "Freelance Web Developer",
  },
  {
    date: "Sep 2023 - Mar 2024",
    position: "Front End Developer",
    company: "Qomon, Bordeaux",
  },
  {
    date: "May 2021 - Dec 2022",
    position: "Team Manager",
    company: "Gucci, Paris",
  },
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

const EducationTimeLineItem = ({ company, position, date }) => (
  <div className="timeline" style={{ justifyContent: "flex-end" }}>
    <div style={{ flexDirection: "column", display: "flex" }}>
      <p className="p-istok" style={{ fontSize: "1rem" }}>
        {company}
      </p>
      <p className="p-istok" style={{ fontSize: "1rem" }}>
        <span style={{ color: "#1b5536", fontFamily: "istokWebBold" }}>
          {position}
        </span>{" "}
        | {date}
      </p>
    </div>
    <div>
      <img src={arrowLeft} alt="Arrow" className="arrow" />
    </div>
  </div>
);

const ExperienceTimeLineItem = ({ company, position, date }) => (
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
        {company}
      </p>
      <p className="p-istok" style={{ fontSize: "1rem" }}>
        <span style={{ color: "#1b5536", fontFamily: "istokWebBold" }}>
          {position}
        </span>{" "}
        | {date}
      </p>
    </div>
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
          <EducationTimeLineItem
            company={educationData[0].company}
            position={educationData[0].position}
            date={educationData[0].date}
          />
          <EducationTimeLineItem
            company={educationData[1].company}
            position={educationData[1].position}
            date={educationData[1].date}
          />
          <div class="timeline"></div>
          <EducationTimeLineItem
            company={educationData[2].company}
            position={educationData[2].position}
            date={educationData[2].date}
          />
          <EducationTimeLineItem
            company={educationData[3].company}
            position={educationData[3].position}
            date={educationData[3].date}
          />
        </div>
        <div className="experience">
          <div class="timeline"></div>
          <ExperienceTimeLineItem
            position={experienceData[0].position}
            date={experienceData[0].date}
          />
          <ExperienceTimeLineItem
            company={experienceData[1].company}
            position={experienceData[1].position}
            date={experienceData[1].date}
          />
          <div class="timeline"></div>
          <div class="timeline"></div>
          <ExperienceTimeLineItem
            company={experienceData[2].company}
            position={experienceData[2].position}
            date={experienceData[2].date}
          />
          <div class="timeline"></div>
          <div class="timeline"></div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
