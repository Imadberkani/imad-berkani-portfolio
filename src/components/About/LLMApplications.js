import React from "react";
import { Col, Row } from "react-bootstrap";

function LLMApplications() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="LangChain">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/LangChain_Logo.svg" alt="LangChain" className="tech-icon-images tech-icon-light" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="together.ai">
        <img src="https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.84.0/icons/together-text.svg" alt="together.ai" className="tech-icon-images tech-icon-light" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Weaviate">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Weaviate_logo.svg" alt="Weaviate" className="tech-icon-images tech-icon-light" />
      </Col>
    </Row>
  );
}

export default LLMApplications;
