import React from "react";
import { Col, Row } from "react-bootstrap";

function IDEs() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="GitHub Actions">
        <img src="https://img.shields.io/badge/GitHub_Actions-2088FF.svg?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" className="tech-icon-images" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="pytest">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Pytest_logo.svg" alt="pytest" className="tech-icon-images" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Docker">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" alt="Docker" className="tech-icon-images" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Azure DevOps">
        <img src="https://img.shields.io/badge/Azure_DevOps-0078D7.svg?style=for-the-badge&logo=azuredevops&logoColor=white" alt="Azure DevOps" className="tech-icon-images" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Jenkins">
        <img src="https://get.jenkins.io/art/jenkins-logo/logo.svg" alt="Jenkins" className="tech-icon-images" />
      </Col>
    </Row>
  );
}

export default IDEs;
