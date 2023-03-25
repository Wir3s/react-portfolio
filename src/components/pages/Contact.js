import React, { useState } from "react";
// import Form from 'react-bootstrap/Form';
import { validateEmail } from "../../utils/helpers";
import "../../styles/Contact.css";

export default function Contact() {
  // Create state variables for form fields, set inital values to empty
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
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

  // const handleNull = (e) => {
    
  //   if (setName(e) === null || name === "name") {
  //     setErrorMessage("This field is required");
  //     return;
  //   }
  // };

  return (
    <div>
      <h1>Contact</h1>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          // onBlur={handleNull}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
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
