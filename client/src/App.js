import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import ProjectDetail from './Components/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route path="/" exact component={Portfolio} />
        <Route path="/about" exact component={About} />
        <Route path="/projects/:id" component={ProjectDetail}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
