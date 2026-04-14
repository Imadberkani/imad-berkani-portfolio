import React from "react";
import Card from "react-bootstrap/Card";
import { useLanguage } from "../../context/LanguageContext";

function AboutCard() {
  const { currentLanguage } = useLanguage();

  const translations = {
    en: {
      graduated: "I graduated from:",
      diploma1: "Master’s Degree in Applied Mathematics and Statistics — Sorbonne University (Paris)",
      diploma2: "Specialized Master — Expert in Data Science (INSA Rouen)"
    },
    fr: {
      graduated: "Je suis diplômé de :",
      diploma1: "M2 Mathématiques Appliquées, Statistique — Sorbonne Université (Paris)",
      diploma2: "Mastère Spécialisé — Expert en sciences des données (INSA Rouen)"
    }
  };

  const currentText = translations[currentLanguage] || translations.en;

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {currentText.graduated}
            <br />
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginTop: "6px" }}>
              •{" "}
              <a
                href="https://m2stat.sorbonne-universite.fr/"
                target="_blank"
                rel="noreferrer"
                className="gold"
              >
                {currentText.diploma1}
              </a>
              <img
                src="https://www.sorbonne-universite.fr/sites/default/files/media/2019-10/logo_4.svg"
                alt="Sorbonne"
                style={{ height: "30px", width: "auto" }}
              />
            </span>
            <br />
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginTop: "6px", flexWrap: "nowrap" }}>
              •{" "}
              <a
                href="https://www.insa-rouen.fr/sites/default/files/2018-05/DI232v6_MS%20INSA%20Rouen_expert%20en%20sciences%20des%20donn%C3%A9es_web.pdf"
                target="_blank"
                rel="noreferrer"
                className="gold"
                style={{ whiteSpace: "nowrap" }}
              >
                {currentText.diploma2}
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/97/Groupe_INSA_%E2%80%A2_Logo.svg"
                alt="INSA Rouen"
                style={{ height: "45px", width: "auto" }}
              />
            </span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
