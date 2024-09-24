import React, { useState, useEffect, useRef } from "react";
import linkedIn from "../images/linkedin.png";
import gitHub from "../images/github.png";

interface IconLinkProps {
  href: string;
  icon: string;
  isFirst?: boolean;
}

const SideButton: React.FC = () => {
  const [buttonWidth, setButtonWidth] = useState<string>("1.2rem");
  const [buttonContent, setButtonContent] = useState<React.ReactNode>("|");

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setButtonWidth("1.2rem");
        setButtonContent("|");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleClick = () => {
    if (buttonWidth === "1.2rem") {
      setButtonWidth("3.5rem");
      setButtonContent(
        <>
          <IconLink
            href="https://github.com/Nevalyashka09/"
            icon={gitHub}
            isFirst
          />
          <IconLink
            href="https://www.linkedin.com/in/olesiatur/"
            icon={linkedIn}
          />
        </>,
      );
    } else {
      setButtonWidth("1.2rem");
      setButtonContent("|");
    }
  };

  const IconLink: React.FC<IconLinkProps> = ({ href, icon, isFirst }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        src={icon}
        alt="Icon"
        style={{
          width: "2rem",
          height: "2rem",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
          marginBottom: isFirst ? "0.6rem" : "0",
        }}
      />
    </a>
  );

  const styles = {
    sideButtonContainer: {
      backgroundColor: "#fae843",
      color: "#1b5536",
      fontSize: "1rem",
      position: "absolute" as const,
      width: buttonWidth,
      height: "8rem",
      top: "14rem",
      border: "1px solid",
      borderColor: "#1b5536",
      borderTopRightRadius: "20px",
      borderBottomRightRadius: "20px",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
    },
  };

  return (
    <button
      ref={buttonRef}
      style={styles.sideButtonContainer}
      onClick={handleClick}
    >
      {buttonContent}
    </button>
  );
};

export default SideButton;
