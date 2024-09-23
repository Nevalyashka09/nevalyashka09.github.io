import React from "react";
import Button from "../portfolioComponents/Button";

const AlertMessage = ({ messageLineOne, messageLineTwo, onClose }) => {
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      zIndex: "1",
    },
    alertBox: {
      height: "7rem",
      width: "20rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#effff9",
      padding: "5rem 2rem",
      borderRadius: "15px",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    },
    alertText: {
      fontSize: "1.1rem",
      fontFamily: "istokWeb",
    },
  };
  return (
    <div style={styles.overlay}>
      <div style={styles.alertBox}>
        <p style={styles.alertText}>{messageLineOne}</p>
        <p style={styles.alertText}>{messageLineTwo}</p>
        <Button text="OK" onClick={onClose}>
          OK
        </Button>
      </div>
    </div>
  );
};

export default AlertMessage;
