import video from "../images/videos/sampleVideoTest.mov";

export interface CodeSample {
  name: string;
  description: string;
  video: string;
  codeText: string;
}

export const codeSamples: CodeSample[] = [
  {
    name: "Slider",
    description: "Simple and easy to use slider",
    video: video,
    codeText: `export default CodeSamples; import React from "react";
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
`,
  },
  {
    name: "Slider",
    description: "Simple and easy to use slider",
    video: video,
    codeText: `export default CodeSamples; import React from "react";
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
`,
  },
  {
    name: "Slider",
    description: "Simple and easy to use slider",
    video: video,
    codeText: `export default CodeSamples; import React from "react";
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
`,
  },
  {
    name: "Slider",
    description: "Simple and easy to use slider",
    video: video,
    codeText: `export default CodeSamples; import React from "react";
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
`,
  },
  {
    name: "Slider",
    description: "Simple and easy to use slider",
    video: video,
    codeText: `export default CodeSamples; import React from "react";
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
`,
  },
];
