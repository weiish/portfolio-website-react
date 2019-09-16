import React, { Component } from "react";
import imgPlaceholder from "../imgs/holoHMM.png";

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card-container">
        <h1>Project Title</h1>
        <img className="hvr-grow" src={imgPlaceholder}></img>
        <p>Project Description</p>
        <button>Learn More</button>
      </div>
    );
  }
}

export default ProjectCard;
