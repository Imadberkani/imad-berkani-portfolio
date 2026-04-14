import React from "react";
import { Col, Row } from "react-bootstrap";

function Databases() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="MySQL">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" className="tech-icon-images" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Oracle">
        <img src="https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg" alt="Oracle" className="tech-icon-images" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="SQL Server">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" alt="SQL Server" className="tech-icon-images" />
      </Col>
    </Row>
  );
}

export default Databases;
