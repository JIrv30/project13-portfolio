import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectsCards";
import Particle from "./Particle";


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
              imgPath=''
              isBlog={false}
              title="Project 1"
              description="description"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=''
              isBlog={false}
              title="Project 2"
              description="description 2."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=''
              isBlog={false}
              title="Project 3"
              description="description 3"
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=''
              isBlog={false}
              title="Project 4"
              description="description 5"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=''
              isBlog={false}
              title="project 5"
              description="Description 5."
              ghLink=""
              demoLink="" 
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