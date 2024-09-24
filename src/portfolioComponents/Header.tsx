import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLink {
  to: string;
  text: string;
}

const Header: React.FC = () => {
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
      textShadow: "2px 2px 3px rgba(0, 0, 0, 0.1)",
      textDecoration: "none",
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
      fontSize: "1.2rem",
    },
    activeLink: {
      color: "#1B5536",
      textDecoration: "underline #1B5536",
    },
  };

  const navLinks: NavLink[] = [
    { to: "/", text: "Home" },
    { to: "/code-samples", text: "Code Samples" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <header style={styles.headerContainer}>
      <Link to={"/"} style={styles.name}>
        Olesia
      </Link>
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
