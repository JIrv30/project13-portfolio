import Card from "react-bootstrap/Card";

export default function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">James Irving </span>
            from <span className="purple"> Southampton, England.</span>
            <br /> I have been a teacher for 20 years and I'm looking for career change
            <br />
            I am currently employed as a Deputy Headteacher at a large secondary school in Gosport where I have been using my softeware develppment skills to enhance students education
            <br />
            <br />
          </p>
          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}