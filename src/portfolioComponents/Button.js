import React from "react";

const Button = ({ text, onCklick }) => {
  const styles = {
    buttonContainer: {
      width: "fit-content",
      marginTop: "0.5rem",
      padding: "0.3rem 0.7rem",
      backgroundColor: "#fae843",
      border: "1px solid",
      borderColor: "#1b5536",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1.1rem",
      fontFamily: "istokWeb",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <button style={styles.buttonContainer} onClick={onCklick}>
      {text}
    </button>
  );
};

export default Button;
