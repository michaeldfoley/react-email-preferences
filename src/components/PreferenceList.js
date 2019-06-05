import React, { useContext } from "react";
import Store from "../context";
import { SectionHeader } from "./SectionHeaders";
import PreferenceGroup from "./PreferenceGroup";
import UnsubscribeAll from "./UnsubscribeAll";

export default function PreferenceList() {
  const { state } = useContext(Store);

  return (
    <section className="section">
      <SectionHeader title="Opt Out Groups">
        Select the groups you would like to unsubscribe from.
      </SectionHeader>
      {[...state.preferences].map(t => (
        <PreferenceGroup key={t} name={t} />
      ))}
    </section>
  );
}
