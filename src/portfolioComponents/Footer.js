import React from "react";

const Footer = () => {
  const styles = {
    footerContainer: {
      backgroundColor: "#FAE843",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      height: "4rem",
    },
    footerText: {
      fontFamily: "istokWeb",
      fontSize: "1.1rem",
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footerContainer}>
      <p style={styles.footerText}>Bordeaux, {currentYear} </p>
    </footer>
  );
};

export default Footer;
