import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import IDEs from "./IDEs";
import DataEngineeringTools from "./DataEngineeringTools";
import Databases from "./Databases";
import DataVisualization from "./DataVisualization";
import WebApplications from "./WebApplications";
import LLMApplications from "./LLMApplications";
import CloudPlatforms from "./CloudPlatforms";
import { useLanguage } from "../../context/LanguageContext";

function About() {
  const { currentLanguage } = useLanguage();

  const translations = {
    en: {
      aboutTitle: "About",
      aboutMe: "me",
      skillset: "PROGRAMMING",
      skillsetTitle: "LANGUAGES",
      dataEngineering: "MACHINE LEARNING AND",
      dataEngineeringTitle: "DEEP LEARNING",
      databases: "DATABASES",
      databasesTitle: "",
      dataVisualization: "DATA",
      dataVisualizationTitle: "VISUALISATION",
      webApps: "WEB",
      webAppsTitle: "APPLICATIONS",
      llmApps: "LLM-BASED",
      llmAppsTitle: "APPLICATIONS",
      devops: "DEVOPS &",
      devopsTitle: "TESTING",
      cloudPlatforms: "CLOUD &",
      cloudPlatformsTitle: "PLATFORMS"
    },
    fr: {
      aboutTitle: "À propos de",
      aboutMe: "moi",
      skillset: "LANGAGES DE",
      skillsetTitle: "PROGRAMMATION",
      dataEngineering: "MACHINE LEARNING ET",
      dataEngineeringTitle: "DEEP LEARNING",
      databases: "BASES DE",
      databasesTitle: "DONNÉES",
      dataVisualization: "VISUALISATION DE",
      dataVisualizationTitle: "DONNÉES",
      webApps: "APPLICATIONS",
      webAppsTitle: "WEB",
      llmApps: "APPLICATIONS",
      llmAppsTitle: "LLM",
      devops: "DEVOPS &",
      devopsTitle: "TESTING",
      cloudPlatforms: "CLOUD &",
      cloudPlatformsTitle: "PLATEFORMES"
    }
  };

  const currentText = translations[currentLanguage] || translations.en;

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {currentText.aboutTitle} <strong className="gold">{currentText.aboutMe}</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          {currentText.skillset} <strong className="gold">{currentText.skillsetTitle}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          {currentText.dataEngineering} <strong className="gold">{currentText.dataEngineeringTitle}</strong>
        </h1>

        <DataEngineeringTools />

        <h1 className="project-heading">
          {currentText.databases} <strong className="gold">{currentText.databasesTitle}</strong>
        </h1>

        <Databases />

        <h1 className="project-heading">
          {currentText.dataVisualization} <strong className="gold">{currentText.dataVisualizationTitle}</strong>
        </h1>

        <DataVisualization />

        <h1 className="project-heading">
          {currentText.webApps} <strong className="gold">{currentText.webAppsTitle}</strong>
        </h1>

        <WebApplications />

        <h1 className="project-heading">
          {currentText.llmApps} <strong className="gold">{currentText.llmAppsTitle}</strong>
        </h1>

        <LLMApplications />

        <h1 className="project-heading">
          {currentText.devops} <strong className="gold">{currentText.devopsTitle}</strong>
        </h1>

        <IDEs />

        <h1 className="project-heading">
          {currentText.cloudPlatforms} <strong className="gold">{currentText.cloudPlatformsTitle}</strong>
        </h1>

        <CloudPlatforms />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
