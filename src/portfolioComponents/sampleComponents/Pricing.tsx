import React, { useState, ChangeEvent } from "react";
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

export default Pricing;
