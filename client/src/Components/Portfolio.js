import React, { Component } from "react";
import axios from "axios";
import Introduction from "./Introduction";
import ProjectCard from "./ProjectCard";
import tech from "../static/technologies";

function Filter(props) {
  let additionalClass = props.active ? " filter-button-active" : "";
  return (
    <button className={"portfolio-filters-button" + additionalClass} onClick={props.onClick}>
      {props.name}
    </button>
  );
}

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, projects: null, filters: [] };
  }

  async componentDidMount() {
    const res = await axios.get("/api/projects");
    console.log(res.data);
    this.setState({
      loading: false,
      projects: res.data
    });
  }

  handleFilterClick(tech) {
    let filters = this.state.filters;
    let index = filters.indexOf(tech);
    if (index >= 0) {
      filters.splice(index, 1);
    } else {
      filters.push(tech);
    }
    this.setState({
      filters
    });
  }

  renderFilter(tech) {
    return <Filter active={this.state.filters.indexOf(tech) >= 0} onClick={() => this.handleFilterClick(tech)} name={tech} />;
  }

  renderFilters() {
    let filterCategories = Object.keys(tech);
    return (
      <div className="portfolio-filters-container">
        {filterCategories.map(category =>
          this.renderCategory(category, tech[category])
        )}
      </div>
    );
  }

  renderCategory(category, techs) {
    return (
      <div className="portfolio-filters-category-group">
        <h1 className="portfolio-filters-category">{category}</h1>
        <div className="portfolio-filters-button-group">
          {techs.map(tech => this.renderFilter(tech))}
        </div>
      </div>
    );
  }

  renderProjects(projects) {
    const filters = this.state.filters;
    let filteredProjects = projects.filter(project => {
      const combinedTech = [];
      for (let key in project.technologies) {
        combinedTech.push(...project.technologies[key]);
      }
      for (let i = 0; i < filters.length; i++) {
        if (combinedTech.indexOf(filters[i]) === -1) return false;
      }
      return true;
    });
    const projectCards = filteredProjects.map(pj => {
      return (
        <ProjectCard
          id={pj.id}
          key={pj.title}
          title={pj.title}
          summary={pj.summary}
          technologies={pj.technologies}
          images={pj.images}
        />
      );
    });
    return projectCards;
  }

  render() {
    const { loading, projects } = this.state;
    return (
      <div className="portfolio-container">
        <Introduction />
        {this.renderFilters()}
        <div className="portfolio-cards-container">
          {loading ? "Loading projects..." : this.renderProjects(projects)}
        </div>
      </div>
    );
  }
}

export default Portfolio;
