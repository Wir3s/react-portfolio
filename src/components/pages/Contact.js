import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

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

  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>

      <p className="error-text">{errorMessage}</p>
    </div>
  );
}
