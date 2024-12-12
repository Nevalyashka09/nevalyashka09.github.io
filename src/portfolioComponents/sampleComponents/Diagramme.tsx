import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

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
  { topic: "Daily Life", color: "#E6C767" },
  { topic: "Withdrawals", color: "#536493" },
  { topic: "Rent", color: "#800000" },
  { topic: "Transport", color: "#FD8B51" },
  { topic: "Car", color: "#CB6040" },
  { topic: "Health", color: "#859F3D" },
  { topic: "Leisure", color: "#C96868" },
  { topic: "Subscriptions", color: "#EF5A6F" },
  { topic: "Savings", color: "#536493" },
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
        d={`M 60 60 L ${startX} ${startY} A 60 60 0 ${
          sliceAngle > 180 ? 1 : 0
        } 1 ${endX} ${endY} Z`}
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
            <circle cx="60" cy="60" r="60" fill="#C1D8C3" />
          )}
        </svg>
        <BudgetInput setBudgetData={setBudgetData} />
      </div>
    </div>
  );
};

export default Diagramme;
