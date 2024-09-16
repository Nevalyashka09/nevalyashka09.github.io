import React, { useState } from "react";
import arrowRight from "../images/arrowRight.png";

const SampleCard = ({ text, video }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsFlipped(false);
  };

  return (
    <>
      <div style={styles.cardContainer} onClick={handleCardClick}>
        <div style={styles.videoContainer}>
          <video
            height="100%"
            width="100%"
            autoPlay
            muted
            loop={!isOpen}
            src={video}
          ></video>
        </div>
        <div style={styles.componentNameContainer}>
          <p style={styles.componentNameText}>{text}</p>
        </div>
      </div>

      {isOpen && (
        <div style={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            style={{
              ...styles.modalContent,
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              transition: "transform 0.6s",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {!isFlipped ? (
              // Front side (video and text)
              <>
                <div style={styles.openedVideoContainer}>
                  <video
                    height="90%"
                    width="90%"
                    autoPlay
                    muted
                    src={video}
                  ></video>
                </div>
                <div style={styles.openedNameContainer}>
                  <p style={styles.openedNameText}>{text}</p>
                  <div style={styles.codeButtonContainer}>
                    <button style={styles.codeButton} onClick={handleFlip}>
                      Check the code
                    </button>
                    <img src={arrowRight} alt="Arrow" style={styles.arrow} />
                  </div>
                </div>
              </>
            ) : (
              // Back side (code content or placeholder for now)
              <div style={styles.backContent}>
                <p>This is the code content (or something else).</p>
                <button style={styles.backButton} onClick={handleFlip}>
                  Go Back
                </button>
              </div>
            )}

            <button style={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  cardContainer: {
    width: "20rem",
    height: "20rem",
    border: "2px solid #1b5536",
    borderRadius: "10px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    backgroundColor: "#1b5536",
    position: "relative",
  },
  videoContainer: {
    height: "72%",
    borderBottom: "2px solid #1b5536",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: "#151515",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  },
  componentNameContainer: {
    height: "28%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "istokWeb",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    backgroundColor: "#fff",
  },
  componentNameText: {
    fontSize: "1.2rem",
    fontFamily: "istokWeb",
  },
  whiteDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "istokWeb",
  },
  modalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
    backdropFilter: "blur(2px)",
  },
  modalContent: {
    position: "relative",
    width: "30rem",
    height: "40rem",
    backgroundColor: "#1b5536",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    border: "2px solid #1b5536",
    borderRadius: "10px",
  },
  openedVideoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
    borderBottom: "2px solid #1b5536",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: "#151515",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  },
  openedNameContainer: {
    backgroundColor: "#effff9",
    height: "30%",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: "5px",
    right: "15px",
    background: "transparent",
    border: "none",
    fontSize: "2rem",
    color: "#fff",
    cursor: "pointer",
  },
  openedNameText: {
    fontSize: "2rem",
    fontFamily: "istokWeb",
  },
  codeButtonContainer: {
    position: "absolute",
    bottom: "15px",
    right: "15px",
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
  },
  codeButton: {
    background: "transparent",
    border: "none",
    fontSize: "1rem",
    color: "#1b5536",
    cursor: "pointer",
  },
  arrow: {
    width: "2rem",
  },
  backContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5rem",
    transform: "rotateY(180deg)",
  },
};

export default SampleCard;
