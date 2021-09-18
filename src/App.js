import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Components
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Body />
    </Router>
  );
};

export default App;
