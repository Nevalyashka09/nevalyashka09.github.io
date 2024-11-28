import React from "react";
import VisaLogo from "../../images/visaLogo.png";
import CreditCardChip from "../../images/creditCardChip.png";

const styles = {
  mainContainer: {
    display: "flex",
    width: "100%",
    height: "40rem",
    backgroundColor: "#FF8A08",
  },
  circle: {
    height: "15rem",
    width: "15rem",
    background: "linear-gradient(130deg, #D91656, #FFE700)",
    borderRadius: "50%",
    position: "absolute",
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
  card: {
    width: "25rem",
    height: "15rem",
    position: "absolute",
    top: "13rem",
    left: "35rem",
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "5%",
  },
  visaLogo: {
    width: "5rem",
    hight: "auto",
    position: "absolute",
    top: "1.5rem",
    right: "2rem",
  },
  cardChip: {
    width: "4rem",
    hight: "auto",
    position: "absolute",
    top: "4.5rem",
    left: "2rem",
  },
  creditCardInfo: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    position: "absolute",
    top: "8rem",
    left: "2.3rem",
  },
  cardNumberContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
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
};

const CreditCard = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.circle}></div>
      <div style={{ ...styles.circle, ...styles.circleTwo }}></div>
      <div style={{ ...styles.circle, ...styles.circleThree }}></div>
      <div style={styles.card}>
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
