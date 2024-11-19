import React, { useState } from "react";

const SwitchToggle = () => {
  const [isCheckedNotifications, setIsCheckedNotifications] = useState(false);
  const [isCheckedAlerts, setIsCheckedAlerts] = useState(false);

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "25rem",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      gap: "2rem",
    },
    notificationsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "300px",
    },
    checkbox: {
      height: 0,
      width: 0,
      visibility: "hidden",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      width: "75px",
      height: "40px",
      borderRadius: "100px",
      position: "relative",
      transition: "background-color .2s",
    },
    switchButton: {
      content: "''",
      position: "absolute",
      top: "2.4px",
      left: "2.5px",
      width: "35px",
      height: "35px",
      borderRadius: "45px",
      transition: "0.2s",
      background: "#fff",
      boxShadow: "0 0 2px 0 rgba(10, 10, 10, 0.29)",
    },
    switchChecked: {
      left: "calc(100% - 2.5px)",
      transform: "translateX(-100%)",
    },
    text: {
      fontFamily: "Arial, sans-serif",
      fontSize: "1.3rem",
    },
  };

  const handleChangeNotifications = () => {
    setIsCheckedNotifications(!isCheckedNotifications);
  };

  const handleChangeAlerts = () => {
    setIsCheckedAlerts(!isCheckedAlerts);
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.notificationsContainer}>
        <p style={{ ...styles.text, margin: 0 }}>Allow Notifications</p>
        <input
          style={styles.checkbox}
          id="react-switch-notifications"
          type="checkbox"
          checked={isCheckedNotifications}
          onChange={handleChangeNotifications}
        />
        <label
          htmlFor="react-switch-notifications"
          style={
            isCheckedNotifications
              ? { backgroundColor: "#8FD14F", ...styles.label }
              : { backgroundColor: "#8EA3A6", ...styles.label }
          }
        >
          <span
            style={
              isCheckedNotifications
                ? { ...styles.switchButton, ...styles.switchChecked }
                : styles.switchButton
            }
          />
        </label>
      </div>
      <div style={styles.notificationsContainer}>
        <p style={{ ...styles.text, margin: 0 }}>Allow Critical Alerts</p>
        <input
          style={styles.checkbox}
          id="react-switch-alerts"
          type="checkbox"
          checked={isCheckedAlerts}
          onChange={handleChangeAlerts}
        />
        <label
          htmlFor="react-switch-alerts"
          style={
            isCheckedAlerts
              ? { backgroundColor: "#F95454", ...styles.label }
              : { backgroundColor: "#8EA3A6", ...styles.label }
          }
        >
          <span
            style={
              isCheckedAlerts
                ? { ...styles.switchButton, ...styles.switchChecked }
                : styles.switchButton
            }
          />
        </label>
      </div>
    </div>
  );
};

export default SwitchToggle;
