import React, { useContext } from "react";
import Store from "../context";

export default function UnsubscribeList() {
  const { state, dispatch } = useContext(Store);

  if (!state.unsubscribes.length) return null;
  return (
    <section className="section section--inline">
      <h3>Unsubscribes</h3>
      <ul className="list list--group">
        {[...state.unsubscribes].sort().map(t => (
          <li key={t} className="list__item">
            <span className="list__content">{t}</span>
            <button
              className="list__button"
              onClick={() =>
                dispatch({ type: "REMOVE_UNSUBSCRIBE", payload: t })
              }
              title="Resubscribe"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
