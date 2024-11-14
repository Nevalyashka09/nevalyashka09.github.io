import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import arrowRight from "../images/arrowRight.png";

interface SampleCardProps {
  sampleName: string;
  sampleDescription: string;
  video: string;
  codeText: string;
}

const SampleCard: React.FC<SampleCardProps> = ({
  sampleName,
  sampleDescription,
  video,
  codeText,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
            loop
            muted
            src={video}
          ></video>
        </div>
        <div style={styles.componentNameContainer}>
          <p style={styles.componentNameText}>{sampleName}</p>
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
                    loop
                    src={video}
                  ></video>
                </div>
                <div style={styles.openedNameContainer}>
                  <p style={styles.openedNameText}>{sampleName}</p>
                  <div style={styles.codeButtonContainer}>
                    <button style={styles.codeButton} onClick={handleFlip}>
                      Check the code
                    </button>
                    <img src={arrowRight} alt="Arrow" style={styles.arrow} />
                  </div>
                </div>
              </>
            ) : (
              // Back side (code content)
              <div style={styles.backContent}>
                <div
                  style={{
                    ...styles.openedVideoContainer,
                    ...styles.codeContainer,
                  }}
                >
                  <SyntaxHighlighter
                    className="syntaxHighlighterScrollbar"
                    language="javascript"
                    style={atomDark}
                    customStyle={styles.codeStyle}
                  >
                    {codeText}
                  </SyntaxHighlighter>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                    marginLeft: "1.5rem",
                  }}
                >
                  <p style={styles.openedNameText}>{sampleName}</p>
                  <p
                    style={{
                      ...styles.componentNameText,
                      marginTop: "-1.5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {sampleDescription}
                  </p>
                </div>
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

const styles: { [key: string]: React.CSSProperties } = {
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
    height: "75%",
    borderBottom: "2px solid #1b5536",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: "#151515",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  },
  componentNameContainer: {
    height: "25%",
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
    color: "#1b5536",
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
    backdropFilter: "blur(7px)",
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
    height: "75%",
    width: "100%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: "#151515",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  },
  openedNameContainer: {
    backgroundColor: "#fff",
    height: "25%",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: "0px",
    right: "5px",
    background: "transparent",
    border: "none",
    fontSize: "2rem",
    color: "#1b5536",
    cursor: "pointer",
  },
  openedNameText: {
    fontSize: "2rem",
    fontFamily: "istokWeb",
    color: "#1b5536",
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
    gap: "2rem",
    transform: "rotateY(180deg)",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
  codeContainer: {
    width: "85%",
    height: "70%",
    background: "rgb(29, 31, 33)",
  },
  codeStyle: {
    height: "98%",
    width: "98%",
    fontSize: "0.7rem",
  },
};

export default SampleCard;
