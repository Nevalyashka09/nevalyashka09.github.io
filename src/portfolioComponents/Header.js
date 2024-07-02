import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const styles = {
    headerContainer: {
      height: "4rem",
      padding: "0 3%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
    name: {
      color: "#1B5536",
      fontFamily: "homemadeApple",
      fontSize: "1.5rem",
      alignSelf: "center",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "2rem",
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontFamily: "istokWeb",
      fontSize: "1.1rem",
    },
    activeLink: {
      color: "#1B5536",
      textDecoration: "underline #1B5536",
    },
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/code-samples", text: "Code Samples" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <header style={styles.headerContainer}>
      <h2 style={styles.name}>Olesia</h2>
      <nav style={styles.navLinks}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            style={
              location.pathname === link.to
                ? { ...styles.link, ...styles.activeLink }
                : styles.link
            }
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
