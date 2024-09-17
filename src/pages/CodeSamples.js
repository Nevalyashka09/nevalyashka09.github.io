import React from "react";
import "../styles/codeSamples.scss";
import LightBlueRectangularHeader from "../portfolioComponents/LightBlueRectangularHeader";
import SampleCard from "../portfolioComponents/SampleCard";
import video from "../images/videos/sampleVideoTest.mov";

const CodeSamples = () => {
  const codeText = `export default CodeSamples; import React from "react";
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
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
        />
      </div>
    </div>
  );
};

export default CodeSamples;
}
          `;

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
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
          codeText={codeText}
        />
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
          codeText={codeText}
        />
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
          codeText={codeText}
        />
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
          codeText={codeText}
        />
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
          codeText={codeText}
        />
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
          codeText={codeText}
        />
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
          codeText={codeText}
        />
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
          codeText={codeText}
        />
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
          codeText={codeText}
        />
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
          codeText={codeText}
        />
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
          codeText={codeText}
        />
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
          codeText={codeText}
        />
      </div>
    </div>
  );
};

export default CodeSamples;
