import React from "react";
import Button from "./Button";

interface AlertMessageProps {
  messageLineOne: string;
  messageLineTwo: string;
  onClose: () => void;
}

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 1,
  },
  alertBox: {
    height: "7rem",
    width: "20rem",
    display: "flex",
    flexDirection: "column" as const,
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
    textAlign: "center" as const,
  },
};

const AlertMessage: React.FC<AlertMessageProps> = ({
  messageLineOne,
  messageLineTwo,
  onClose,
}) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.alertBox}>
        <p style={styles.alertText}>{messageLineOne}</p>
        <p style={styles.alertText}>{messageLineTwo}</p>
        <Button text="OK" onClick={onClose} />
      </div>
    </div>
  );
};

export default AlertMessage;
