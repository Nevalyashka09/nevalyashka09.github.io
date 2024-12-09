import React, { useState } from "react";

const NeonLink: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const styles = {
    mainContainer: {
      display: "flex" as const,
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "black",
      fontFamily: "istokWeb",
    },
    button: {
      position: "relative" as const,
      display: "inline-block" as const,
      padding: "20px 30px",
      textTransform: "uppercase" as const,
      letterSpacing: "4px",
      textDecoration: "none",
      fontSize: "24px",
      overflow: "hidden" as const,
      transition: "0.2s",
      background: hovered ? "#56BBF1" : "transparent",
      boxShadow: hovered
        ? "0 0 10px #56BBF1, 0 0 40px #56BBF1, 0 0 80px #56BBF1"
        : "none",
      color: hovered ? "#ffffff" : "#56BBF1",
      transitionDelay: hovered ? "1s" : "0s",
    },
    span: {
      position: "absolute" as const,
      display: "block" as const,
    },
    span1: {
      top: 0,
      left: hovered ? "100%" : "-100%",
      width: "100%",
      height: "2px",
      background: "linear-gradient(90deg, transparent, #FF85B3)",
      transition: "1s",
    },
    span2: {
      top: hovered ? "100%" : "-100%",
      right: 0,
      width: "2px",
      height: "100%",
      background: "linear-gradient(180deg, transparent, #F900BF)",
      transition: "1s",
      transitionDelay: "0.25s",
    },
    span3: {
      bottom: 0,
      right: hovered ? "100%" : "-100%",
      width: "100%",
      height: "2px",
      background: "linear-gradient(270deg, transparent, #9900F0)",
      transition: "1s",
      transitionDelay: "0.5s",
    },
    span4: {
      bottom: hovered ? "100%" : "-100%",
      left: 0,
      width: "2px",
      height: "100%",
      background: "linear-gradient(360deg, transparent, #56BBF1)",
      transition: "1s",
      transitionDelay: "0.75s",
    },
  };

  return (
    <div style={styles.mainContainer}>
      <a
        href="#"
        style={styles.button}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => console.log("hello")}
      >
        <span style={{ ...styles.span, ...styles.span1 }}></span>
        <span style={{ ...styles.span, ...styles.span2 }}></span>
        <span style={{ ...styles.span, ...styles.span3 }}></span>
        <span style={{ ...styles.span, ...styles.span4 }}></span>
        Lightsaber
      </a>
    </div>
  );
};

export default NeonLink;
