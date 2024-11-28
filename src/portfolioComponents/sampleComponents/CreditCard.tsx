import React, { useState } from "react";
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

const shimmerKeyframes = `
@keyframes shimmer {
  0% {
    background-position: 200% center;
  }
  100% {
    
    background-position: -200% center;
  }
}`;

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
