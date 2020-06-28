import React from "react";

import "./App.css";

// import Sample from "./components/Sample/Sample.component";
import Intro from "./components/Intro/Intro.component";
import ServicesList from "./components/ServicesList/ServicesList.component";
import Contact from "./components/Contact/Contact.component";

const App = () => {
  return (
    <div className="App">
      {/* <Sample /> */}
      <Intro />
      <ServicesList />
      <Contact />
    </div>
  );
};

export default App;
