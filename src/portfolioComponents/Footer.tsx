import React from "react";
import wheel from "../images/wheel.gif";

const Footer: React.FC = () => {
  const styles = {
    footerContainer: {
      backgroundColor: "#fff",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      height: "4rem",
    },
    footerText: {
      fontFamily: "istokWeb",
      fontSize: "1.2rem",
    },
    wheel: {
      width: "2rem",
      height: "2rem",
      marginLeft: "0.3rem",
    },
  };

  const currentYear: number = new Date().getFullYear();

  return (
    <footer style={styles.footerContainer}>
      <p style={styles.footerText}>Bordeaux, {currentYear} </p>
      <img style={styles.wheel} src={wheel} alt="Spinning wheel" />
    </footer>
  );
};

export default Footer;
