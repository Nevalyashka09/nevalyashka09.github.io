import React from "react";

const LightBlueRectangularHeader = ({ text, font, fontSize }) => {
  const styles = {
    lightBlueRectangle: {
      backgroundColor: "#effff9",
      height: "5rem",
      position: "relative",
      overflow: "hidden",
    },
    headerContainer: {
      display: "flex",
      justifyContent: "center",
      height: "5.5rem",
      position: "relative",
      marginTop: "-2rem",
      zIndex: 1,
    },
    headerText: {
      fontFamily: font,
      position: "relative",
      fontSize: fontSize,
    },
    highlight: {
      color: "#ff4d00",
    },
  };

  return (
    <div>
      <div style={styles.lightBlueRectangle} />
      <div style={styles.headerContainer}>
        <h1 style={styles.headerText}>{text}</h1>
      </div>
    </div>
  );
};

export default LightBlueRectangularHeader;
