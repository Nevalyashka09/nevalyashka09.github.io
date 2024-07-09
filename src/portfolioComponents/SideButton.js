import React from "react";

const SideButton = () => {
  const styles = {
    sideButtonContainer: {
      backgroundColor: "#fae843",
      color: "#1b5536",
      fontSize: "1rem",
      position: "absolute",
      width: "1.7rem",
      height: "8rem",
      top: "14rem",
      border: "1px solid",
      borderColor: "#1b5536",
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <button style={styles.sideButtonContainer} onClick={console.log("hello")}>
      ||
    </button>
  );
};

export default SideButton;
