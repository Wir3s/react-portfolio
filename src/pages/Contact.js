import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import "../styles/Contact.css";

export default function Contact() {
  // Create state variables for form fields, set inital values to empty
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
   e.stopPropagation();
    // Get value and name of input triggering the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Set state of input type
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
    } else if (validateEmail(email)) {
      setErrorMessage("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");

      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  const handleNull = (e) => {
   e.stopPropagation();
    // Get value and name of input triggering the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Set state of input type
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }

    if (!name || !email || !message) {
      setErrorMessage("This field is required")
    }
  };

  return (
    <div className="main">
      <h1>Contact</h1>
      <p>aandrebess@gmail.com</p>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleNull}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleNull}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleNull}
          type="text"
          placeholder="message"
        />

        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
