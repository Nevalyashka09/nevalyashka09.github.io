import React from "react";
import "../styles/homePage.scss";
import profilePhoto from "../images/profilePhoto.png";
import paintBackground from "../images/paintBackground.png";

const HomePage = () => {
  return (
    <section>
      <section className="intro-section">
        <div className="photo-wrapper">
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
              gap: "1rem",
            }}
          >
            <h1>Hey There,</h1>
            <h1>I'm Olesia</h1>
            <p className="p-istok">FRONT END WEB DEVELOPER</p>
            <button>DownloadCV</button>
          </div>
          <div style={{ margin: "5rem 0 0 15rem" }}>
            <p className="p-cursive">Based in Bordeaux, France</p>
          </div>
        </div>
      </section>
      <section className="myhelp">
        <p>How can I help</p>
      </section>
      <section className="background">
        <p>My Background</p>
      </section>
    </section>
  );
};

export default HomePage;
