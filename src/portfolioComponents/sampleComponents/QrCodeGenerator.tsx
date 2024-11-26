import React, { useState, useRef } from "react";
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
