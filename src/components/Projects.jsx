import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectsCards";
import Particle from "./Particle";
import MovieSearch from '../assets/projects/Movie_Search.png'
import Quizzical from '../assets/projects/Quizzical.png'
import VanLife from '../assets/projects/Van_Life.png'
import ProLearnLog from '../assets/projects/Cursor_and_Learning_Log.png'
import OsandXs from '../assets/projects/O_s_and_X_s.png'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VanLife}
              isBlog={false}
              title="Van Life"
              description="An air BnB like site for people to rent and hire vans"
              skills='React-Router, React-Router hooks, Firbase and Error handaling'
              ghLink="https://github.com/JIrv30/project10-vanlife"
              demoLink="https://vanlife-voluble-daifuku-e6b941.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieSearch}
              isBlog={false}
              title="Movie Search"
              description="An App to find information about your favorite movie."
              skills='API call and async functions, useState, useEffect, props, .map() and .filter()'
              ghLink="https://github.com/JIrv30/project12-movie-search"
              demoLink="https://movie-search-89767.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quizzical}
              isBlog={false}
              title="Quizzical"
              description="A quiz app to test your general knowledge"
              skills='API calls, use State, useEffect,props, .map()'
              ghLink="https://github.com/JIrv30/quizzical"
              demoLink="https://quizzical-papaya-capybara-f45792.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProLearnLog}
              isBlog={false}
              title="Profesional Learning Log"
              description="A diary app for teachers to record their CPD activities and authorised line managers to review"
              skills='Firebase, user Authentication, protected routes and React hooks'
              ghLink="https://github.com/JIrv30/Project8---LearningLog"
              demoLink="https://regal-bunny-b86b6e.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OsandXs}
              isBlog={false}
              title="O's and X's"
              description="Classic game of O's and X's"
              ghLink="https://github.com/JIrv30/project14-tic-tac-toe"
              demoLink="https://clinquant-toffee-03c1fb.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=''
              isBlog={false}
              title="Project 6"
              description="Description 6"
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;