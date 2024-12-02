import React, { useState } from "react";

type ButtonData = {
  url: string;
  transform: string;
  svgPath: string;
  label: string;
  viewBox: string;
};

const styles = {
  mainContainer: {
    display: "flex" as const,
    width: "100%",
    height: "50rem",
    alignItems: "center" as const,
    backgroundColor: "black",
    position: "relative" as const,
  },
  buttonsContainer: {
    marginLeft: "25rem",
    width: "34rem",
    padding: "1.5rem",
    position: "relative" as const,
  },
  socailsButton: {
    backgroundColor: "grey",
    padding: "0.7rem",
    minWidth: "7rem",
    height: "2.8rem",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    position: "relative" as const,
    color: "white",
    zIndex: 1,
  },
  hiddenButton: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    padding: "0.7rem",
    minWidth: "7rem",
    height: "2.8rem",
    border: "none",
    borderRadius: "20px",
    position: "absolute" as const,
    transition: "transform 0.5s ease-out, opacity 0.3s",
    opacity: 0,
    cursor: "pointer",
    color: "white",
    right: "27rem",
  },
  visibleButton: {
    transform: "translateX(10rem)",
    opacity: 1,
  },
  visibleButtonHover: {
    backgroundColor: "white",
    color: "black",
  },
  iconContainer: {
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    gap: 5,
  },
  icon: {
    width: "1rem",
    height: "1rem",
    fill: "currentColor",
    marginBottom: "0.1rem",
  },
};

const buttonData: ButtonData[] = [
  {
    url: "https://github.com/",
    transform: "translateX(10rem)",
    svgPath:
      "M8 0C3.58 0 0 3.58 0 8c0 3.53 2.29 6.53 5.47 7.6.4.07.55-.17.55-.37v-1.38c-2.22.48-2.68-1.06-2.68-1.06-.36-.91-.89-1.15-.89-1.15-.73-.5.06-.49.06-.49.81.06 1.23.83 1.23.83.7 1.18 1.83.84 2.27.64.07-.51.27-.84.49-1.03-1.72-.2-3.52-.86-3.52-3.58 0-.79.28-1.44.73-1.94-.07-.2-.32-.99.07-2.08 0 0 .62-.2 2.04.76C6.56 3.11 7.21 3 8 3s1.44.11 2.06.35c1.42-.96 2.04-.76 2.04-.76.39 1.09.14 1.88.07 2.08.45.5.73 1.15.73 1.94 0 2.72-1.8 3.38-3.52 3.58.23.19.46.57.46 1.12v1.67c0 .2.15.44.55.37C13.71 14.53 16 11.53 16 8c0-4.42-3.58-8-8-8z",
    label: "GitHub",
    viewBox: "0 0 16 16",
  },
  {
    url: "https://codepen.io/",
    transform: "translateX(18.5rem)",
    svgPath:
      "M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z",
    label: "CodePen",
    viewBox: "0 0 50 50",
  },
  {
    url: "https://www.linkedin.com/",
    transform: "translateX(27rem)",
    svgPath:
      "M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z",
    label: "LinkedIn",
    viewBox: "0 0 50 50",
  },
];

const SocialButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  const handleButtonHover = (index: number) => setHoveredButton(index);
  const handleButtonLeave = () => setHoveredButton(null);

  return (
    <div style={styles.mainContainer}>
      <div style={styles.buttonsContainer} onMouseLeave={handleMouseLeave}>
        <button style={styles.socailsButton} onMouseEnter={handleMouseEnter}>
          <div style={styles.iconContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              style={{ ...styles.icon }}
            >
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm0 3.5a2.5 2.5 0 1 1-2.5 2.5A2.5 2.5 0 0 1 8 3.5zm0 10.7a6.7 6.7 0 0 1-5.33-2.64c.07-1.74 3.56-2.7 5.33-2.7s5.26.96 5.33 2.7A6.7 6.7 0 0 1 8 14.2z" />
            </svg>
            Socials
          </div>
        </button>
        {buttonData.map((button, index) => (
          <button
            key={index}
            style={{
              ...styles.hiddenButton,
              ...(isVisible
                ? { ...styles.visibleButton, transform: button.transform }
                : {}),
              ...(isVisible && hoveredButton === index
                ? styles.visibleButtonHover
                : {}),
            }}
            onClick={() => window.open(button.url, "_blank")}
            onMouseEnter={() => handleButtonHover(index)}
            onMouseLeave={handleButtonLeave}
          >
            <div style={styles.iconContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={button.viewBox}
                style={styles.icon}
              >
                <path d={button.svgPath}></path>
              </svg>
              {button.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialButtons;
