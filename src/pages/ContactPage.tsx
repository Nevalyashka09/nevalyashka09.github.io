import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import "../styles/contactPage.scss";
import paintBackground from "../images/paintBackground2.png";
import Button from "../portfolioComponents/Button";
import AlertMessage from "../portfolioComponents/AlertMessage";
import LightBlueRectangularHeader from "../portfolioComponents/LightBlueRectangularHeader";
import emailjs from "@emailjs/browser";

// Define the props for the FormInput component
interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
}) => (
  <div className="contact-form-input">
    <label className="p-istok" htmlFor={name}>
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        className="contact-form-input"
        id={name}
        name={name}
        rows={5}
        value={value}
        onChange={onChange}
        required={required}
      />
    ) : (
      <input
        className="contact-form-input"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    )}
  </div>
);

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [alertMessageLineOne, setAlertMessageLineOne] = useState<string>("");
  const [alertMessageLineTwo, setAlertMessageLineTwo] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [],
  );

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        target,
        process.env.REACT_APP_EMAILJS_USER_ID!,
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
            "Please send me an email at olesia.tur@gmail.com",
          );
          setShowAlert(true);
        },
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }, []);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="contact-page">
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
              <FormInput
                label="Your Name:"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Your Email:"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Your Message:"
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
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
