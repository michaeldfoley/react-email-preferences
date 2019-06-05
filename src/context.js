import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  email: "testuser@fordham.edu",
  unsubscribe_all: false,
  unsubscribes: [
    "Gabelli School of Business",
    "Dining",
    "Giving",
    "In Memoriam"
  ],
  preferences: {
    Schools: [
      "Fordham College at Rose Hill",
      "Fordham College at Lincoln Center",
      "Gabelli School of Business",
      "Graduate School of Arts and Sciences",
      "Graduate School of Education",
      "Graduate School of Social Service",
      "Graduate School of Religion and Religious Education",
      "Professional and Continuing Studies"
    ],
    Departments: [
      "Alumni",
      "Athletics",
      "Campus Ministry",
      "Commencement",
      "Dining",
      "Diversity Office",
      "Giving",
      "In Memoriam",
      "IT",
      "President",
      "Provost",
      "Special Events",
      "Wellness"
    ],
    Newsletters: ["Fordham Magazine", "Fordham News", "Rams in the News"],
    *[Symbol.iterator]() {
      for (let key of Object.keys(this)) {
        yield key;
      }
    }
  }
});

export default Store;
