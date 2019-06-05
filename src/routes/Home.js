import React, { useContext, useReducer } from "react";
import { PageHeader } from "../components/SectionHeaders";

import Store from "../context";
import reducer from "../reducer";

import Preferences from "../components/Preferences";
import PreferenceList from "../components/PreferenceList";

export default function Home({ email }) {
  // create a global store to store the state
  const globalStore = useContext(Store);

  // `unsubscribes` will be a state manager to manage state.
  const [state, dispatch] = useReducer(reducer, globalStore);
  return (
    <Store.Provider value={{ state, dispatch }}>
      <PageHeader title="Set Your Email Preferences">
        Fordham University will use the information you provide on this form to
        stay in touch with you. Please use the options below to customize the
        types of emails you receive from Fordham.
      </PageHeader>
      <main className="container">
        <Preferences />
        <PreferenceList />
      </main>
    </Store.Provider>
  );
}
