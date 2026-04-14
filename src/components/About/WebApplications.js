import React from "react";
import { Col, Row } from "react-bootstrap";

function WebApplications() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Flask">
        <img src="https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-ar21~v2.svg" alt="Flask" className="tech-icon-images tech-icon-light" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Dash">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg" alt="Dash" className="tech-icon-images" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Streamlit">
        <img src="https://streamlit.io/images/brand/streamlit-mark-color.png" alt="Streamlit" className="tech-icon-images" />
      </Col>
    </Row>
  );
}

export default WebApplications;
