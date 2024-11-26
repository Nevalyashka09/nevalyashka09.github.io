import React, { useState } from "react";

const Switch: React.FC<{
  label: string;
  checked: boolean;
  onChange: () => void;
  checkedColor: string;
}> = ({ label, checked, onChange, checkedColor }) => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "300px",
    },
    checkbox: {
      height: 0,
      width: 0,
      visibility: "hidden" as const,
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      width: "75px",
      height: "40px",
      borderRadius: "100px",
      position: "relative" as const,
      transition: "background-color .2s",
      backgroundColor: checked ? checkedColor : "#8EA3A6",
    },
    switchButton: {
      content: "''",
      position: "absolute" as const,
      top: "2.4px",
      left: checked ? "calc(100% - 2.5px)" : "2.5px",
      width: "35px",
      height: "35px",
      borderRadius: "45px",
      transition: "0.2s",
      background: "#fff",
      boxShadow: "0 0 2px 0 rgba(10, 10, 10, 0.29)",
      transform: checked ? "translateX(-100%)" : "none",
    },
    text: {
      fontFamily: "istokWeb",
      fontSize: "1.3rem",
      margin: 0,
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>{label}</p>
      <input
        style={styles.checkbox}
        id={label.toLowerCase()}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={label.toLowerCase()} style={styles.label}>
        <span style={styles.switchButton} />
      </label>
    </div>
  );
};

const SwitchToggle: React.FC = () => {
  const [isCheckedNotifications, setIsCheckedNotifications] = useState(false);
  const [isCheckedAlerts, setIsCheckedAlerts] = useState(false);

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column" as const,
      width: "100%",
      height: "25rem",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      gap: "2rem",
    },
  };

  return (
    <div style={styles.mainContainer}>
      <Switch
        label="Allow Notifications"
        checked={isCheckedNotifications}
        onChange={() => setIsCheckedNotifications(!isCheckedNotifications)}
        checkedColor="#8FD14F"
      />
      <Switch
        label="Allow Critical Alerts"
        checked={isCheckedAlerts}
        onChange={() => setIsCheckedAlerts(!isCheckedAlerts)}
        checkedColor="#F95454"
      />
    </div>
  );
};

export default SwitchToggle;
