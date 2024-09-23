import React from "react";
import "../styles/codeSamples.scss";
import LightBlueRectangularHeader from "../portfolioComponents/LightBlueRectangularHeader";
import SampleCard from "../portfolioComponents/SampleCard";
import { codeSamples } from "../data/codeSamplesData";

const CodeSamples = () => {
  return (
    <div>
      <LightBlueRectangularHeader
        text="My Code Samples"
        font="istokWeb"
        fontSize="2.5rem"
      />
      <div className="aboutCodeSamplesContainer">
        <p className="p-istok">
          Welcome to my{" "}
          <span style={{ color: "#ff4d00" }}>React Components</span> Library!
        </p>
        <p className="p-istok">
          Click on any card to enlarge it and flip it to view or copy the code.
          <span style={{ color: "#ff4d00", fontFamily: "homemadeApple" }}>
            {" "}
            Enjoy exploring!
          </span>
        </p>
      </div>
      <div className="cardsContainer">
        {codeSamples.map((item, idx) => (
          <SampleCard
            key={idx}
            sampleName={item.name}
            sampleDescription={item.description}
            video={item.video}
            codeText={item.codeText}
          />
        ))}
      </div>
    </div>
  );
};

export default CodeSamples;
