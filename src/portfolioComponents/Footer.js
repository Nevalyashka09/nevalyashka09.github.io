import React from "react";
import wheel from "../images/wheel.gif";

const Footer = () => {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footerContainer}>
      <p style={styles.footerText}>Bordeaux, {currentYear} </p>
      <img style={styles.wheel} src={wheel} alt=""></img>
    </footer>
  );
};

export default Footer;
