import React, { useContext, useState } from "react";
import Store from "../context";

export default function EmailForm() {
  const { state, dispatch } = useContext(Store);

  // Creating a local state to have currently writing
  // an email that will be sent to the global store.
  const [email, setEmail] = useState(state.email);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleEmailAdd() {
    dispatch({ type: "UPDATE_EMAIL", payload: email });
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleEmailAdd();
  }

  return (
    <section className="section section--inline">
      <h3 id="email">Email</h3>
      <div>
        <input
          className="form-control"
          value={email}
          autoFocus={true}
          placeholder="Enter your email"
          type="email"
          aria-labelledby="email"
          onKeyUp={handleSubmitForm}
          onChange={handleEmailChange}
        />
      </div>
    </section>
  );
}
