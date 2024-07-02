import React from "react";

const ContactSection = () => {
  const styles = {
    contactSectionContainer: {
      backgroundColor: "#EFFFF9",
      height: "10rem",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
    contactInfoContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "7rem",
    },
    cursivePhraseContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
      paddingRight: "10rem",
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

  const contactInfo = [
    "Contact : ",
    "olesia.tur@gmail.com",
    "+33 6 95 01 36 94",
  ];

  const cursivePhrases = ["Let’s make something", "amazing together."];

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
