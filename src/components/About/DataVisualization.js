import React from "react";
import { Col, Row } from "react-bootstrap";

function DataVisualization() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Plotly">
        <img src="https://www.vectorlogo.zone/logos/plotly/plotly-ar21.svg" alt="Plotly" className="tech-icon-images" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Matplotlib">
        <img src="https://upload.wikimedia.org/wikipedia/fr/3/37/Logo_Matplotlib.svg" alt="Matplotlib" className="tech-icon-images" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Seaborn">
        <img src="https://seaborn.pydata.org/_images/logo-wide-lightbg.svg" alt="Seaborn" className="tech-icon-images" />
      </Col>
    </Row>
  );
}

export default DataVisualization;
