import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMacos,
} from "react-icons/si";

export default function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
    </Row>
  );
}