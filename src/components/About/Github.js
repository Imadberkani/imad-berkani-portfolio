import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";

function Github() {
  const { currentLanguage } = useLanguage();

  const translations = {
    en: {
      github: "Personal",
      personal: "GitHub"
    },
    fr: {
      github: "GitHub",
      personal: "Personnel"
    }
  };

  const currentText = translations[currentLanguage] || translations.en;
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        {currentText.github} <strong className="gold">{currentText.personal}</strong>
      </h1>
      <GitHubCalendar
        username="imadberkani"
        blockSize={15}
        blockMargin={5}
        color="#c09c4c"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
