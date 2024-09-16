import React, { useState } from "react";
import "../styles/contactPage.scss";
import paintBackground from "../images/paintBackground2.png";
import Button from "../portfolioComponents/Button";
import AlertMessage from "../portfolioComponents/AlertMessage";
import LightBlueRectangularHeader from "../portfolioComponents/LightBlueRectangularHeader";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alertMessageLineOne, setAlertMessageLineOne] = useState("");
  const [alertMessageLineTwo, setAlertMessageLineTwo] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Update form data when input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setAlertMessageLineOne("Your message is well received!");
          setAlertMessageLineTwo("Thank you very much!");
          setShowAlert(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setAlertMessageLineOne("Oups! Something went wrong.");
          setAlertMessageLineTwo(
            "Please send me an email on olesia.tur@gmail.com",
          );
          setShowAlert(true);
        },
      );

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Function to close the alert
  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <AlertMessage
          messageLineOne={alertMessageLineOne}
          messageLineTwo={alertMessageLineTwo}
          onClose={closeAlert}
        />
      )}
      <LightBlueRectangularHeader
        text={
          <>
            Let's get in touch <span style={{ color: "#ff4d00" }}>...</span>
          </>
        }
        font="homemadeApple"
        fontSize="2rem"
      />
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
          <form className="form" onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
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
