import React, { useContext } from "react";
import Store from "../context";
import { SectionHeader } from "./SectionHeaders";
import EmailForm from "./EmailForm";
import UnsubscribeAll from "./UnsubscribeAll";
import UnsubscribeList from "./UnsubscribeList";

export default function Preferences() {
  const { state } = useContext(Store);

  const pluralize = count => {
    if (state.unsubscribe_all) {
      return `You are unsubscribed from all University emails.`;
    } else {
      return `You are unsubscribed from ${count} email group${
        count === 1 ? "" : "s"
      }.`;
    }
  };

  if (!state.unsubscribes.length) return null;
  return (
    <section className="section">
      <SectionHeader title="My Preferences">
        {pluralize(state.unsubscribes.length)}
      </SectionHeader>
      <EmailForm />
      {!state.unsubscribe_all && <UnsubscribeList />}
      <UnsubscribeAll />
    </section>
  );
}
