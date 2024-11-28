import starRatingVideo from "../images/videos/starRating.mov";
import socialButtonsVideo from "../images/videos/socialButtons.mov";
import switchToggleVideo from "../images/videos/switchToggle.mov";
import qrCodeGeneratorVideo from "../images/videos/qrCodeGenerator.mov";
import creditCardVideo from "../images/videos/creditCard.mov";

export interface CodeSample {
  name: string;
  description: string;
  video: string;
  codeText: string;
}

export const codeSamples: CodeSample[] = [
  {
    name: "Star Rating",
    description:
      "This simple feature allows users to provide quick feedback with just a click.",
    video: starRatingVideo,
    codeText: `import React, { useState } from "react";

const getResponseMessage = (rating: number): string => {
  switch (rating) {
    case 5:
      return "Thank you for the 5 stars! We're thrilled you had an amazing experience!";
    case 4:
      return "Thanks for the 4 stars! We’re so glad you enjoyed your time!";
    case 3:
      return "You rated us 3 stars! Not bad, but we aim to improve! ";
    case 2:
      return "You rated us 2 stars. Ouch, we need to do better!";
    case 1:
      return "You rated us 1 star. Oh no! We’ll work hard to make it right!";
    default:
      return "";
  }
};

const StarRating: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  const handleMouseEnter = (value: number) => {
    setHover(value);
  };

  const handleMouseLeave = (): void => {
    setHover(0);
  };

  const styles = {
    text: {
      fontSize: "1.1rem",
      fontFamily: "istokWeb",
    },
    starsRatingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column" as const,
      gap: "1.5rem",
      margin: "10rem",
    },
    textContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column" as const,
      gap: "0.5rem",
    },
    starContainer: {
      display: "flex",
      justifyContent: "center",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.starsRatingContainer}>
      <div style={styles.textContainer}>
        <p style={styles.text}>Was it amazing or just alright?</p>
        <p style={styles.text}>Rate us!</p>
      </div>
      <div style={styles.starContainer}>
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={index}
              style={{
                fontSize: "2rem",
                color: starValue <= (hover || rating) ? "#FAE843" : "#D9D9D9",
              }}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
            >
              ★
            </span>
          );
        })}
      </div>
      <p style={styles.text}>{getResponseMessage(rating)}</p>
    </div>
  );
};
export default StarRating;
`,
  },
  {
    name: "Social Buttons",
    description: "Social buttons animation",
    video: socialButtonsVideo,
    codeText: `import React, { useState } from "react";
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
    height: "25rem",
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
`,
  },
  {
    name: "Switch Toggle",
    description: "A good way to manage notifications and alerts.",
    video: switchToggleVideo,
    codeText: `import React, { useState } from "react";

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
`,
  },
  {
    name: "QR Code Generator",
    description: "Generate a QR code for a website of your choice.",
    video: qrCodeGeneratorVideo,
    codeText: `import React, { useState, useRef } from "react";
import * as htmlToImage from "html-to-image";
import QRCode from "react-qr-code";

const styles = {
  mainContainer: {
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    width: "100%",
    height: "90vh",
    flexDirection: "column" as const,
  },
  h1: {
    fontFamily: "istokWeb",
    color: "#F95454",
  },
  inputContainer: {
    display: "flex" as const,
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    margin: "30px",
  },
  inputField: {
    minWidth: "15rem",
    width: "100%",
    padding: "10px",
    fontSize: "12px",
    outline: "none",
    borderRadius: "5px",
    border: "1px solid #77CDFF",
    marginBottom: "15px",
  },
  button: {
    display: "inline-block",
    padding: "7px",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#0D92F4",
    border: "none",
    borderRadius: "5px",
    fontSize: "12px",
    fontFamily: "istokWeb",
  },
  qrContainer: {
    margin: "20px",
    textAlign: "center" as const,
  },
  qrButton: {
    marginTop: "15px",
  },
};

const QrCodeGenerator: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [qrIsVisible, setQrIsVisible] = useState<boolean>(false);

  const qrCodeRef = useRef<HTMLDivElement | null>(null);

  const handleQrCodeGenerator = () => {
    if (!url) {
      return;
    }
    setQrIsVisible(true);
  };

  const downloadQRCode = () => {
    if (!qrCodeRef.current) return;

    htmlToImage
      .toPng(qrCodeRef.current)
      .then((dataUrl: string) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "qr-code.png";
        link.click();
      })
      .catch((error: unknown) => {
        console.error("Error generating QR code:", error);
      });
  };

  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.h1}>QR Code Generator</h1>
      <div ref={qrCodeRef}>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter a URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={styles.inputField}
          />
          <button onClick={handleQrCodeGenerator} style={styles.button}>
            Generate QR Code
          </button>
        </div>
        {qrIsVisible && (
          <div style={styles.qrContainer}>
            <div>
              <QRCode value={url} size={300} />
            </div>
            <button
              onClick={downloadQRCode}
              style={{ ...styles.button, ...styles.qrButton }}
            >
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QrCodeGenerator;
`,
  },
  {
    name: "Glass Effect Card",
    description:
      "A credit card with a transparent design, featuring a smooth glass-like surface.",
    video: creditCardVideo,
    codeText: `import React, { useState } from "react";
import VisaLogo from "../../images/visaLogo.png";
import CreditCardChip from "../../images/creditCardChip.png";

const styles = {
  mainContainer: {
    display: "flex" as const,
    width: "100%",
    height: "40rem",
    backgroundColor: "#FF8A08",
  },
  circle: {
    height: "15rem",
    width: "15rem",
    background: "linear-gradient(130deg, #D91656, #FFE700)",
    borderRadius: "50%",
    position: "absolute" as const,
    top: "9rem",
    left: "30rem",
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2)",
  },
  circleTwo: {
    height: "8rem",
    width: "8rem",
    top: "24rem",
    left: "46rem",
  },
  circleThree: {
    height: "5rem",
    width: "5rem",
    top: "16rem",
    left: "57.5rem",
  },
  visaLogo: {
    width: "5rem",
    position: "absolute" as const,
    top: "1.5rem",
    right: "2rem",
  },
  cardChip: {
    width: "4rem",
    position: "absolute" as const,
    top: "4.5rem",
    left: "2rem",
  },
  creditCardInfo: {
    display: "flex",
    flexDirection: "column" as const,
    color: "white",
    position: "absolute" as const,
    top: "8rem",
    left: "2.3rem",
  },
  cardNumberContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start" as const,
  },
  cardNumber: {
    fontSize: "1.5rem",
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: "0.1rem",
  },
  expiryDate: {
    fontSize: "0.9rem",
    fontFamily: "'Open Sans', sans-serif",
    alignSelf: "flex-end",
    letterSpacing: "0.1rem",
    marginTop: "2px",
  },
  cardholder: {
    fontSize: "1.1rem",
    fontFamily: "'Montserrat', sans-serif",
    marginTop: "2px",
  },
  card: {
    width: "25rem",
    height: "15rem",
    position: "absolute" as const,
    top: "13rem",
    left: "35rem",
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "5%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  },
  shimmerEffect: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)",
    backgroundSize: "200% auto",
    animation: "shimmer 1.5s infinite",
    borderRadius: "5%",
    zIndex: 0,
    pointerEvents: "none" as const,
  },
};

const shimmerKeyframes = 
@keyframes shimmer {
  0% {
    background-position: 200% center;
  }
  100% {
    
    background-position: -200% center;
  }
}

const CreditCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div style={styles.mainContainer}>
      <style>{shimmerKeyframes}</style>
      <div style={styles.circle}></div>
      <div style={{ ...styles.circle, ...styles.circleTwo }}></div>
      <div style={{ ...styles.circle, ...styles.circleThree }}></div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          ...styles.card,
          ...(isHovered ? styles.cardHover : {}),
        }}
      >
        {isHovered && <div style={styles.shimmerEffect}></div>}
        <img src={VisaLogo} alt="Visa Logo" style={styles.visaLogo} />
        <img
          src={CreditCardChip}
          alt="Credit Card Chip Image"
          style={styles.cardChip}
        />
        <div style={styles.creditCardInfo}>
          <div style={styles.cardNumberContainer}>
            <p style={styles.cardNumber}>5699 2354 1280 9317</p>
            <p style={styles.expiryDate}>04/29</p>
          </div>
          <p style={styles.cardholder}>MAIA TUR</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
`,
  },
];
