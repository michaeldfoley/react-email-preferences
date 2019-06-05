import React, { useContext } from "react";
import Store from "../context";

export default function PreferenceGroup({ name }) {
  const { state, dispatch } = useContext(Store);

  const handleCheckboxChange = ({ target: { checked } }, payload) => {
    let type = checked ? "ADD_UNSUBSCRIBE" : "REMOVE_UNSUBSCRIBE";
    dispatch({ type, payload });
  };

  return (
    <fieldset className="form-group form-group--inline">
      <div>
        <legend className="form-group__heading">{name}</legend>
      </div>
      <ul className="list list--light">
        {state.preferences[name].map(t => (
          <li key={t} className="list__item">
            <label>
              <input
                className="list__toggle"
                type="checkbox"
                name={name}
                value={t}
                disabled={state.unsubscribe_all}
                checked={state.unsubscribes.includes(t)}
                onChange={event => handleCheckboxChange(event, t)}
              />
              {t}
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
