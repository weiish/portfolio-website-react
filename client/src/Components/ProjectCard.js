import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectCard extends Component {
  renderTech() {
    return this.props.technologies.map(tech => {
      return (
        <p className="project-tech-text">{tech}</p>
      )
    })
  }

  render() {
    return (
      <div className="project-card-container">
        <h1 className="project-title">{this.props.title}</h1>
        <div className="project-tech-container">
          {this.renderTech()}
        </div>
        <div className="project-img-container">
          <img className="project-img" src={require(`../imgs/${this.props.images[0]}`)}></img>
        </div>

        <div className="project-text-container">
          <p className="project-description">{this.props.summary}</p>
          <Link className="project-link hvr-grow" to={"/projects/"+this.props.id}>Learn More</Link>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
