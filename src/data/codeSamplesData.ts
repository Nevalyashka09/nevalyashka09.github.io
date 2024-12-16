import starRatingVideo from "../images/videos/starRating.mov";
import socialButtonsVideo from "../images/videos/socialButtons.mov";
import switchToggleVideo from "../images/videos/switchToggle.mov";
import qrCodeGeneratorVideo from "../images/videos/qrCodeGenerator.mov";
import creditCardVideo from "../images/videos/creditCard.mov";
import pricing from "../images/videos/pricing.mov";
import neonLink from "../images/videos/neonLink.mov";
import carousel from "../images/videos/carousel.mov";
import diagramme from "../images/videos/diagramme.mov";
import map from "../images/videos/map.mov";

export interface CodeSample {
  name: string;
  description: string;
  video: string;
  codeText: string;
}

export const codeSamples: CodeSample[] = [
  {
    name: "Pricing Page",
    description:
      "An example of a pricing page with monthly and yearly subscription.",
    video: pricing,
    codeText: `import React, { useState, ChangeEvent } from "react";
import arrow from "../../images/arrowCursive.png";

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<SwitchProps> = ({ label, checked, onChange }) => {
  const styles = {
    container: {
      display: "flex" as const,
      alignItems: "center",
      margin: "0 10px",
    },
    checkbox: {
      height: 0,
      width: 0,
      visibility: "hidden" as const,
    },
    label: {
      display: "flex" as const,
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      width: "40px",
      height: "20px",
      borderRadius: "100px",
      position: "relative" as const,
      transition: "background-color .2s",
      backgroundColor: "#3C3D37",
    },
    switchButton: {
      position: "absolute" as const,
      left: checked ? "calc(100% - 2.5px)" : "2.5px",
      width: "15px",
      height: "15px",
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

interface PricingData {
  plan: string;
  color: string;
  price: string;
  users: string;
  advantages: string[];
}

interface PricingCardProps {
  pricing: PricingData;
  isYearly: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ pricing, isYearly }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    cardContainer: {
      display: "flex" as const,
      flexDirection: "column" as const,
      color: "#151515",
      backgroundColor: pricing.color,
      borderRadius: "15px",
      justifyContent: "center",
      padding: "30px",
      width: "19rem",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      transform: isHovered ? "scale(1.1)" : "scale(1)",
      boxShadow: isHovered ? "0 10px 30px rgba(0, 0, 0, 0.3)" : "none",
      cursor: "pointer",
    },
    plan: {
      fontSize: "1.2rem",
    },
    price: {
      fontSize: "2.5rem",
      fontFamily: "Arial Black, Impact, sans-serif",
      fontWeight: "bold",
    },
    users: {
      fontSize: "0.9rem",
    },
    advantages: {
      margin: "20px 0",
    },
    button: {
      color: "white",
      background: "#151515",
      padding: "7px",
      border: "none",
      borderRadius: "5px",
      width: "130px",
      fontSize: "0.8rem",
    },
  };

  const getPrice = () => {
    const yearlyDiscount = isYearly ? 0.8 : 1;
    if (pricing.plan === "Starter") return "Free";
    if (!isYearly) {
      return pricing.price;
    }
    const monthlyPrice = parseFloat(pricing.price.replace("€", ""));
    const yearlyPrice = (monthlyPrice * 12 * yearlyDiscount).toFixed(2);
    return (
      <>
        {yearlyPrice}€{" "}
        <span style={{ marginLeft: "-5px", fontSize: "0.9rem" }}>/ year</span>
      </>
    );
  };

  return (
    <div
      style={styles.cardContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p style={styles.plan}>{pricing.plan}</p>
      <p style={styles.price}>{getPrice()}</p>
      <p style={styles.users}>{pricing.users}</p>
      <div style={styles.advantages}>
        {pricing.advantages.map((item, idx) => (
          <p key={idx} style={styles.users}>
            ✔ {item}
          </p>
        ))}
      </div>
      <button style={styles.button}>Get {pricing.plan} Plan</button>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "120vh",
    flexDirection: "column" as const,
    backgroundColor: "#151515",
    color: "white",
    fontFamily: "istokWeb",
  },
  title: {
    color: "white",
    fontSize: "3rem",
    letterSpacing: "1.5px",
  },
  suscribtion: {
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "center",
    margin: "15px 0",
  },
  discount: {
    fontFamily: "'Comic Sans MS', cursive",
    fontSize: "0.8rem",
    position: "absolute" as const,
    top: "67.6rem",
    right: "110.2rem",
    rotate: "30deg",
  },
  arrow: {
    color: "white",
    width: "30px",
    rotate: "180deg",
  },
  cardsContainer: {
    marginTop: "2rem",
    display: "flex",
    gap: "4rem",
  },
};

const pricingData: PricingData[] = [
  {
    plan: "Starter",
    color: "#F6C6EA",
    price: "Free",
    users: "Ideal for all users",
    advantages: [
      "Access to basic web & mobile apps",
      "500MB of workflow data",
      "2GB of data storage",
      "Single user access",
    ],
  },
  {
    plan: "Team",
    color: "#55D8C1",
    price: "15€",
    users: "Perfect for small teams",
    advantages: [
      "All web & mobile apps included",
      "5GB of workflow data",
      "20GB of data storage",
      "Up to 10 users",
    ],
  },
  {
    plan: "Business",
    color: "#FFB200",
    price: "25€",
    users: "Best for growing businesses",
    advantages: [
      "Premium web & mobile apps",
      "20GB of workflow data",
      "100GB of data storage",
      "Unlimited users",
    ],
  },
];

const Pricing: React.FC = () => {
  const [isCheckedAlerts, setIsCheckedAlerts] = useState(false);

  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.title}>Pricing</h1>
      <div style={styles.suscribtion}>
        <p>Monthly</p>
        <Switch
          label="Allow Notifications"
          checked={isCheckedAlerts}
          onChange={() => setIsCheckedAlerts(!isCheckedAlerts)}
        />
        <p>Yearly</p>
      </div>
      <div style={styles.discount}>
        <p>(Save 20%)</p>
        <img style={styles.arrow} src={arrow} />
      </div>
      <div style={styles.cardsContainer}>
        {pricingData.map((item, idx) => (
          <PricingCard key={idx} pricing={item} isYearly={isCheckedAlerts} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;`,
  },
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
    name: "Neon Link",
    description: "A link with a neon light animation",
    video: neonLink,
    codeText: `import React, { useState } from "react";

const NeonLink: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const styles = {
    mainContainer: {
      display: "flex" as const,
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "black",
      fontFamily: "istokWeb",
    },
    button: {
      position: "relative" as const,
      display: "inline-block" as const,
      padding: "20px 30px",
      textTransform: "uppercase" as const,
      letterSpacing: "4px",
      textDecoration: "none",
      fontSize: "24px",
      overflow: "hidden" as const,
      transition: "0.2s",
      background: hovered ? "#56BBF1" : "transparent",
      boxShadow: hovered
        ? "0 0 10px #56BBF1, 0 0 40px #56BBF1, 0 0 80px #56BBF1"
        : "none",
      color: hovered ? "#ffffff" : "#56BBF1",
      transitionDelay: hovered ? "1s" : "0s",
    },
    span: {
      position: "absolute" as const,
      display: "block" as const,
    },
    span1: {
      top: 0,
      left: hovered ? "100%" : "-100%",
      width: "100%",
      height: "2px",
      background: "linear-gradient(90deg, transparent, #FF85B3)",
      transition: "1s",
    },
    span2: {
      top: hovered ? "100%" : "-100%",
      right: 0,
      width: "2px",
      height: "100%",
      background: "linear-gradient(180deg, transparent, #F900BF)",
      transition: "1s",
      transitionDelay: "0.25s",
    },
    span3: {
      bottom: 0,
      right: hovered ? "100%" : "-100%",
      width: "100%",
      height: "2px",
      background: "linear-gradient(270deg, transparent, #9900F0)",
      transition: "1s",
      transitionDelay: "0.5s",
    },
    span4: {
      bottom: hovered ? "100%" : "-100%",
      left: 0,
      width: "2px",
      height: "100%",
      background: "linear-gradient(360deg, transparent, #56BBF1)",
      transition: "1s",
      transitionDelay: "0.75s",
    },
  };

  return (
    <div style={styles.mainContainer}>
      <a
        href="#"
        style={styles.button}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => console.log("hello")}
      >
        <span style={{ ...styles.span, ...styles.span1 }}></span>
        <span style={{ ...styles.span, ...styles.span2 }}></span>
        <span style={{ ...styles.span, ...styles.span3 }}></span>
        <span style={{ ...styles.span, ...styles.span4 }}></span>
        Lightsaber
      </a>
    </div>
  );
};

export default NeonLink;
`,
  },
  {
    name: "Carousel",
    description:
      "A component shows a rotating slideshow of images with arrows to navigate through them.",
    video: carousel,
    codeText: `import React, { useState } from "react";

import cake1 from "../../images/cake1.jpg";
import cake2 from "../../images/cake2.jpg";
import cake3 from "../../images/cake3.jpg";
import cake4 from "../../images/cake4.jpeg";
import cake5 from "../../images/cake5.jpg";
import cake6 from "../../images/cake6.jpg";

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const cakes: string[] = [cake1, cake2, cake3, cake4, cake5, cake6];

  const nextImage = (): void => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % cakes.length);
  };

  const prevImage = (): void => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + cakes.length) % cakes.length,
    );
  };

  const getThreeImages = (): number[] => {
    const prev = (currentImage - 1 + cakes.length) % cakes.length;
    const next = (currentImage + 1) % cakes.length;
    return [prev, currentImage, next];
  };

  const [leftImage, centerImage, rightImage] = getThreeImages();

  const styles = {
    mainContainer: {
      display: "flex" as const,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "75rem",
      position: "relative" as const,
      gap: "10px",
    },
    arrow: {
      fontSize: "2rem",
      cursor: "pointer",
      userSelect: "none" as const,
      color: "#333",
      margin: "0 50px",
    },
    imagesContainer: {
      display: "flex" as const,
      alignItems: "center",
      justifyContent: "center",
      gap: "50px",
    },
    image: {
      width: "150px",
      height: "auto",
      borderRadius: "10px",
      transition: "transform 0.3s ease",
      opacity: 0.7,
    },
    centerImage: {
      width: "300px",
      height: "auto",
      borderRadius: "10px",
      transform: "scale(1.1)",
      opacity: 1,
    },
  };

  return (
    <div style={styles.mainContainer}>
      <span style={styles.arrow} onClick={prevImage}>
        &#8592;
      </span>
      <div style={styles.imagesContainer}>
        <img
          src={cakes[leftImage]}
          style={styles.image}
        />
        <img
          src={cakes[centerImage]}
          style={styles.centerImage}
        />
        <img
          src={cakes[rightImage]}
          style={styles.image}
        />
      </div>
      <span style={styles.arrow} onClick={nextImage}>
        &#8594;
      </span>
    </div>
  );
};

export default Carousel;
`,
  },
  {
    name: "Diagramme",
    description:
      "This component lets users input budget values with and displays a pie chart of the breakdown.",
    video: diagramme,
    codeText: `import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

const styles = {
  mainContainer: {
    display: "flex" as const,
    height: "45rem",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as const,
  },
  diagrammeContainer: {
    display: "flex" as const,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
    gap: "4rem",
  },
  title: {
    color: "black",
    fontSize: "2rem",
  },
};

type BudgetItem = {
  topic: string;
  color: string;
};

const Budget: BudgetItem[] = [
  { topic: "Daily Life", color: "#FFE31A" },
  { topic: "Withdrawals", color: "#F72C5B" },
  { topic: "Rent", color: "#CDC1FF" },
  { topic: "Transport", color: "#257180" },
  { topic: "Car", color: "#FF6500" },
  { topic: "Health", color: "#00FF9C" },
  { topic: "Leisure", color: "#D2FF72" },
  { topic: "Subscriptions", color: "#7E1891" },
  { topic: "Savings", color: "#1F509A" },
];

type BudgetData = {
  [key: string]: string | number;
};

type BudgetInputProps = {
  setBudgetData: React.Dispatch<React.SetStateAction<BudgetData>>;
};

const BudgetInput: React.FC<BudgetInputProps> = ({ setBudgetData }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, topic: string) => {
    setBudgetData((prevData) => ({
      ...prevData,
      [topic]: e.target.value,
    }));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <form>
      {Budget.map((item, index) => (
        <div
          key={item.topic}
          style={{
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "11px",
              height: "11px",
              backgroundColor: item.color,
              marginRight: "8px",
            }}
          ></div>
          <input
            ref={(el) => (inputRefs.current[index] = el!)}
            placeholder={item.topic}
            onChange={(e) => handleChange(e, item.topic)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              padding: "8px",
              flex: 1,
              border: "1px solid #ccc",
              borderRadius: "4px",
              outline: "none",
            }}
          />
        </div>
      ))}
    </form>
  );
};

const Diagramme: React.FC = () => {
  const [budgetData, setBudgetData] = useState<BudgetData>({});

  const totalAmount = Object.values(budgetData).reduce(
    (acc: number, val) =>
      acc + (typeof val === "number" ? val : parseFloat(val as string) || 0),
    0,
  );

  const nonZeroEntries = Budget.filter(
    (item) => parseFloat(budgetData[item.topic] as string) > 0,
  );

  const isSingleEntry = nonZeroEntries.length === 1;

  let currentAngle = 0;

  const slices = nonZeroEntries.map((item) => {
    const amount = parseFloat(budgetData[item.topic] as string) || 0;
    const percentage = (amount / totalAmount) * 100;
    const sliceAngle = (percentage / 100) * 360;

    if (isSingleEntry) {
      return (
        <circle key={item.topic} cx="60" cy="60" r="60" fill={item.color} />
      );
    }

    const startAngle = currentAngle;
    const endAngle = startAngle + sliceAngle;
    currentAngle += sliceAngle;

    const startX = 60 + 60 * Math.cos((Math.PI * startAngle) / 180);
    const startY = 60 + 60 * Math.sin((Math.PI * startAngle) / 180);
    const endX = 60 + 60 * Math.cos((Math.PI * endAngle) / 180);
    const endY = 60 + 60 * Math.sin((Math.PI * endAngle) / 180);

    return (
      <path
        key={item.topic}
        d={...}
        fill={item.color}
      />
    );
  });

  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.title}>Fill in Your Expenses in Euros</h1>
      <div style={styles.diagrammeContainer}>
        <svg width="50%" height="50%" viewBox="0 0 120 120">
          {totalAmount > 0 ? (
            slices
          ) : (
            <circle cx="60" cy="60" r="60" fill="#D4EBF8" />
          )}
        </svg>
        <BudgetInput setBudgetData={setBudgetData} />
      </div>
    </div>
  );
};

export default Diagramme;
`,
  },
  {
    name: "Map",
    description: "Google Maps City Search Integration.",
    video: map,
    codeText: `import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
  Libraries,
} from "@react-google-maps/api";

const styles = {
  mainContainer: {
    display: "flex" as const,
    width: "100%",
    height: "40rem",
  },
  mapContainer: {
    width: "50%",
    height: "40rem",
  },
  searchContainer: {
    width: "30%",
    padding: "2rem",
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#FBFBFB",
  },
  input: {
    marginTop: "1rem",
    width: "70%",
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  h1: {
    fontSize: "2rem",
    color: "black",
  },
};

const libraries: Libraries = ["places"];

const center = {
  lat: 44.8378,
  lng: -0.5792,
};

const Map: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [position, setPosition] = useState<{ lat: number; lng: number }>(
    center,
  );
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry && place.geometry.location) {
        const location = place.geometry.location;
        const newCenter = {
          lat: location.lat(),
          lng: location.lng(),
        };

        setPosition(newCenter);
        if (map) map.panTo(newCenter);
      }
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="******"
      libraries={libraries}
    >
      <div style={styles.mainContainer}>
        <GoogleMap
          mapContainerStyle={styles.mapContainer}
          center={position}
          zoom={10}
          onLoad={onLoad}
        >
          <Marker position={position} />
        </GoogleMap>
        <div style={styles.searchContainer}>
          <h1 style={styles.h1}>Search for a City</h1>
          <Autocomplete
            onLoad={(ref) => (autocompleteRef.current = ref)}
            onPlaceChanged={onPlaceChanged}
          >
            <input
              type="text"
              placeholder="Enter a city"
              style={styles.input}
            />
          </Autocomplete>
        </div>
      </div>
    </LoadScript>
  );
};

export default Map;
`,
  },
];
