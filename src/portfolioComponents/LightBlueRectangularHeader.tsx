import React from "react";

interface LightBlueRectangularHeaderProps {
  text: React.ReactNode;
  font: string;
  fontSize: string | number;
}

const LightBlueRectangularHeader: React.FC<LightBlueRectangularHeaderProps> = ({
  text,
  font,
  fontSize,
}) => {
  const styles = {
    lightBlueRectangle: {
      backgroundColor: "#effff9",
      height: "5rem",
      position: "relative" as const,
      overflow: "hidden",
    },
    headerContainer: {
      display: "flex",
      justifyContent: "center",
      height: "5.5rem",
      position: "relative" as const,
      marginTop: "-2rem",
      zIndex: 1,
    },
    headerText: {
      fontFamily: font,
      position: "relative" as const,
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
