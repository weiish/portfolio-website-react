import React, { Component } from "react";
import Introduction from './Introduction';
import ProjectCard from './ProjectCard';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
       <Introduction />
       <ProjectCard />
       <ProjectCard />
       <ProjectCard />
      </div>
    );
  }
}

export default Portfolio;
