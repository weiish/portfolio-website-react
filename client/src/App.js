import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route path="/" exact component={Portfolio} />
        <Route path="/about" exact component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
