import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      padding: "0 3%",
    },
    name: {
      color: "#1B5536",
    },
    links: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "2rem",
      paddingRight: "1rem",
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontSize: "1rem",
    },
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/code-samples", text: "Code Samples" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <header style={styles.navbar}>
      <h1 style={styles.name}>Olesia</h1>
      <nav style={styles.links}>
        {navLinks.map((link, index) => (
          <Link key={index} to={link.to} style={styles.link}>
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
