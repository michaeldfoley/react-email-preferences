import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Home path="/:email" />
    </Router>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
