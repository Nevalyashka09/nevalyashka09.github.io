import React from "react";
import "../styles/homePage.scss";
import profilePhoto from "../images/profilePhoto.png";
import paintBackground from "../images/paintBackground.png";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png";
import Button from "../portfolioComponents/Button";
import SideButton from "../portfolioComponents/SideButton";
import CV from "../images/CV_OlesiaTur.pdf";
import { ReactTyped } from "react-typed";
import { timelineData, cardsData } from "../data/backgroundData";

interface TechCardProps {
  name: string;
  src: string;
}

const TechCard: React.FC<TechCardProps> = ({ name, src }) => (
  <div className="techno-card">
    <img src={src} alt={name} className="techno-card-image" />
    <p className="p-istok techno-card-name">{name}</p>
  </div>
);

interface TimeLineItemProps {
  company: string;
  position: string;
  date: string;
  isLeft: boolean;
  arrow?: boolean;
}

const TimeLineItem: React.FC<TimeLineItemProps> = ({
  company,
  position,
  date,
  isLeft,
  arrow,
}) => (
  <div
    className="timeline"
    style={{ justifyContent: isLeft ? "flex-end" : "flex-start" }}
  >
    {isLeft ? (
      <div style={{ flexDirection: "column", display: "flex" }}>
        <p className="p-istok" style={{ fontSize: "1rem" }}>
          {company}
        </p>
        <p className="p-istok" style={{ fontSize: "1rem" }}>
          <span style={{ color: "#1b5536", fontFamily: "istokWebBold" }}>
            {position}
          </span>{" "}
          {date}
        </p>
      </div>
    ) : null}
    {arrow && (
      <div>
        <img
          src={isLeft ? arrowLeft : arrowRight}
          alt="Arrow"
          className="arrow"
        />
      </div>
    )}
    {!isLeft ? (
      <div style={{ flexDirection: "column", display: "flex" }}>
        <p className="p-istok" style={{ fontSize: "1rem" }}>
          {company}
        </p>
        <p className="p-istok" style={{ fontSize: "1rem" }}>
          <span style={{ color: "#1b5536", fontFamily: "istokWebBold" }}>
            {position}
          </span>{" "}
          {date}
        </p>
      </div>
    ) : null}
  </div>
);

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = CV;
  link.target = "_blank";
  link.setAttribute("download", "CV_OlesiaTur.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const HomePage: React.FC = () => {
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
          <img
            src={profilePhoto}
            alt="Profile"
            className="profile-photo"
            loading="lazy"
          />
        </div>
        <div className="text-container">
          <div className="header">
            <div>
              <ReactTyped
                className="typed-text"
                strings={["Hey There,"]}
                typeSpeed={150}
                showCursor={false}
              />
              <h1>I'm Olesia</h1>
            </div>
            <p className="p-istok">FRONT END WEB DEVELOPER</p>
            <Button text="Download CV" onClick={downloadCV} />
          </div>
          <div className="location-container">
            <p className="p-cursive">Based in Bordeaux, France</p>
          </div>
        </div>
      </section>
      <section className="my-help">
        <div className="help-text">
          <h1>How can I help?</h1>
          <p className="p-istok">
            I design sleek, user-friendly interfaces. Whether it's for web or
            mobile, I’m all about making digital experiences that look great and
            work even better!
          </p>
        </div>
        <div className="techno-cards">
          <div className="techno-cards-row">
            {cardsData.slice(0, 3).map((card) => (
              <TechCard key={card.name} name={card.name} src={card.src} />
            ))}
          </div>
          <div className="techno-cards-row">
            {cardsData.slice(3).map((card) => (
              <TechCard key={card.name} name={card.name} src={card.src} />
            ))}
          </div>
        </div>
      </section>
      <section className="background">
        <div className="education">
          <div className="timeline background-header-container">
            <h1>My Background</h1>
          </div>
          {timelineData
            .filter((item) => item.type === "education")
            .map((item, idx) => (
              <TimeLineItem
                key={idx}
                company={item.company}
                position={item.position}
                date={item.date}
                isLeft
                arrow={item.arrow}
              />
            ))}
        </div>
        <div className="experience">
          {timelineData
            .filter((item) => item.type === "experience")
            .map((item, idx) => (
              <TimeLineItem
                key={idx}
                company={item.company}
                position={item.position}
                date={item.date}
                isLeft={false}
                arrow={item.arrow}
              />
            ))}
        </div>
      </section>
    </section>
  );
};

export default HomePage;
