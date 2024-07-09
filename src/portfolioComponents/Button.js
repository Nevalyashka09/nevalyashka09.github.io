import React from "react";
import CV from "../images/CV_OlesiaTur.pdf";

const Button = () => {
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

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.target = "_blank";
    link.setAttribute("download", "CV_OlesiaTur.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button style={styles.buttonContainer} onClick={downloadCV}>
      Download CV
    </button>
  );
};

export default Button;
