import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { ImPointRight } from "react-icons/im";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Title style={{fontSize: '1.8rem', color: '#b562d6', paddingLeft: '18px'}}>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          <span className="purple">Key Skills: </span>
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          <ImPointRight /> {props.skill1}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          <ImPointRight /> {props.skill2}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          <ImPointRight /> {props.skill3}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          <ImPointRight /> {props.skill4}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;