import React from "react";
import "../styles/homePage.scss";
import profilePhoto from "../images/profilePhoto.png";
import uiux from "../images/uiux.png";
import paintBackground from "../images/paintBackground.png";
import Button from "../portfolioComponents/Button";
import SideButton from "../portfolioComponents/SideButton";

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
          <div className="techno-card">
            <img src={uiux} alt="UI/UX" className="texhno-card-image"></img>
            <p className="p-istok" style={{ fontSize: "0.8rem" }}>
              UI/UX
            </p>
          </div>
        </div>
      </section>
      <section className="background">
        <p>My Background</p>
      </section>
    </section>
  );
};

export default HomePage;
