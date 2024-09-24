import React from "react";
import { contactInfo, cursivePhrases } from "../data/backgroundData";

const ContactSection: React.FC = () => {
  const styles = {
    contactSectionContainer: {
      backgroundColor: "#EFFFF9",
      height: "10rem",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
    contactInfoContainer: {
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      paddingLeft: "7rem",
    },
    cursivePhraseContainer: {
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "flex-end",
      paddingRight: "7rem",
    },
    contactInfo: {
      fontFamily: "istokWeb",
      fontSize: "1.1rem",
    },
    cursivePhraseText: {
      color: "#1B5536",
      fontFamily: "homemadeApple",
      fontSize: "1.5rem",
    },
  };

  return (
    <section style={styles.contactSectionContainer}>
      <div style={styles.contactInfoContainer}>
        {contactInfo.map((info, index) => (
          <p key={index} style={styles.contactInfo}>
            {info}
          </p>
        ))}
      </div>
      <div style={styles.cursivePhraseContainer}>
        {cursivePhrases.map((phrase, index) => (
          <p key={index} style={styles.cursivePhraseText}>
            {phrase}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
