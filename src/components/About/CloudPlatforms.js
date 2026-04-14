import React from "react";
import { Col, Row } from "react-bootstrap";

function CloudPlatforms() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Databricks">
        <img src="https://az-icons.com/export/icons/d180faa9ddc77cb9e841ff02998e5e21.svg" alt="Databricks" className="tech-icon-images" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Azure ML">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure ML" className="tech-icon-images" />
      </Col>
    </Row>
  );
}

export default CloudPlatforms;
