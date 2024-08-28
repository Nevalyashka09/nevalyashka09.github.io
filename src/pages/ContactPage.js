import React from "react";
import "../styles/contactPage.scss";
import paintBackground from "../images/paintBackground2.png";
import Button from "../portfolioComponents/Button";

const ContactPage = () => {
  return (
    <div>
      <div className="light-blue-rectangle" />
      <div className="header-container">
        <h1 style={{ fontFamily: "homemadeApple", position: "relative" }}>
          Let's get in touch <span style={{ color: "#ff4d00" }}>...</span>
        </h1>
      </div>
      <div className="contact-form">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="contact-text-container">
            <p className="p-istok" style={{ fontSize: "1.1rem" }}>
              Have any questions or just{" "}
              <span style={{ color: "#ff4d00" }}>want to say hi</span>?
            </p>
            <p className="p-istok" style={{ fontSize: "1.1rem" }}>
              <span style={{ color: "#ff4d00" }}>
                I’d love to hear from you!{" "}
              </span>
              Whether you have inquiries about my work, project ideas, or just
              want to connect, feel free to send me a message. Looking forward
              to chatting with you!
            </p>
          </div>
          <img
            src={paintBackground}
            alt="Paint Background"
            className="contact-paint-background"
          />
        </div>
        <div className="form-container">
          <form className="form" onSubmit="handleSubmit">
            <div className="form-inputs">
              <div className="contact-form-input">
                <label className="p-istok" htmlFor="name">
                  Your Name:
                </label>
                <input
                  className="contact-form-input"
                  type="text"
                  id="name"
                  name="name"
                  value=""
                  onChange="handleChange"
                  required
                />
              </div>
              <div className="contact-form-input">
                <label className="p-istok" htmlFor="email">
                  Your Email:
                </label>
                <input
                  className="contact-form-input"
                  type="email"
                  id="email"
                  name="email"
                  value=""
                  onChange="onChange"
                  required
                />
              </div>
              <div className="contact-form-input">
                <label className="p-istok" htmlFor="message">
                  Your Message:
                </label>
                <textarea
                  className="contact-form-input"
                  id="message"
                  name="message"
                  rows="7"
                  value=""
                  onChange="onChange"
                  required
                />
              </div>
            </div>
            <div>
              <Button text="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
