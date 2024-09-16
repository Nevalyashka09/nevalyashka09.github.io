import React from "react";
import "../styles/codeSamples.scss";
import LightBlueRectangularHeader from "../portfolioComponents/LightBlueRectangularHeader";
import SampleCard from "../portfolioComponents/SampleCard";
import video from "../images/videos/sampleVideoTest.mov";

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
          Welcome to my personal React component library! Click on any card to
          enlarge it, view the code, or download the complete React component
          along with its styles.
        </p>
      </div>
      <div className="cardsContainer">
        <SampleCard text="Slider" video={video} />
      </div>
    </div>
  );
};

export default CodeSamples;
