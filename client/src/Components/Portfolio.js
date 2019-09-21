import React, { Component } from "react";
import axios from 'axios';
import Introduction from "./Introduction";
import ProjectCard from "./ProjectCard";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, projects: null};
  }

  async componentDidMount() {
    const res = await axios.get('/api/projects');
    console.log(res.data)
    this.setState({
      loading: false, 
      projects: res.data
    })
  }

  renderProjects(projects) {
    const projectCards = projects.map(pj => {
      return <ProjectCard 
        id={pj.id}
        key={pj.title}
        title={pj.title} 
        summary={pj.summary}
        technologies={pj.technologies}
        images={pj.images}
      />
    })
    return projectCards;
  }

  render() {
    const {loading, projects} = this.state
    return (
      <div className="portfolio-container">
        <Introduction />
        {loading ? "Loading projects..." : this.renderProjects(projects)}
      </div>
    );
  }
}

export default Portfolio;
