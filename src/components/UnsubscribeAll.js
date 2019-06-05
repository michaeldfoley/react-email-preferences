import React, { useContext } from "react";
import Store from "../context";

export default function UnsubscribeAll({ name }) {
  const { state, dispatch } = useContext(Store);

  const handleCheckboxChange = ({ target: { checked } }) => {
    dispatch({ type: "UPDATE_UNSUBSCRIBEALL", payload: checked });
  };

  return (
    <section className="form-group form-group--inline">
      <div>{state.unsubscribe_all && <h3>Unsubscribes</h3>}</div>
      <label>
        <input
          className="list__toggle"
          type="checkbox"
          name="unsubscribeAll"
          value="yes"
          checked={state.unsubscribe_all}
          onChange={handleCheckboxChange}
        />
        Unsubscribe from all University emails.
      </label>
    </section>
  );
}
