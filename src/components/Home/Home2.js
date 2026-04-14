import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Home2() {
  const { currentLanguage } = useLanguage();

  const translations = {
    en: {
      title: "LET ME",
      intro: "INTRODUCE",
      myself: "MYSELF",
      description: [
        <>What began as a passion for <b className="gold">applied mathematics</b> grew into a strong interest in <b className="gold">machine learning engineering</b>.</>,
        <>I cover the full <b className="gold">ML lifecycle</b>, from <b className="gold">data preparation</b> and <b className="gold">experimentation</b> to <b className="gold">deployment</b> and <b className="gold">monitoring</b> in production.</>,
        <>I bring <b className="gold">five years</b> of experience as a <b className="gold">Data Scientist</b> / <b className="gold">ML Engineer</b> across major French insurance groups, working closely with <b className="gold">marketing teams</b> to turn business needs into robust, production-ready solutions.</>,
        <>Day to day, I develop in <b className="gold">Python</b>, leveraging libraries such as <b className="gold">CatBoost</b>, <b className="gold">XGBoost</b>, <b className="gold">scikit-learn</b> and <b className="gold">MLflow</b>, in cloud environments built around the <b className="gold">Azure ecosystem</b> : <b className="gold">Databricks</b> for data preparation and experimentation, <b className="gold">Azure ML</b> for deployment and API exposure, and <b className="gold">Azure DevOps</b> for CI/CD pipelines.</>,
        <>I apply <b className="gold">MLOps best practices</b> with a strong focus on <b className="gold">drift monitoring</b>, having contributed to the open source library <b className="gold">Eurybia</b>.</>,
        <>In parallel, I explore personal projects around <b className="gold">RAG architectures</b>, <b className="gold">LLM fine-tuning</b> and <b className="gold">AI agents</b>.</>
      ],
      findMe: "FIND ME ON",
      connect: "Feel free to",
      connectText: "connect",
      withMe: "with me"
    },
    fr: {
      title: "À PROPOS",
      intro: "DE MOI",
      myself: "",
      description: [
        <>Passionné par les <b className="gold">mathématiques appliquées</b>, je me suis progressivement orienté vers le <b className="gold">machine learning engineering</b>.</>,
        <>J'interviens sur l'ensemble du <b className="gold">cycle de vie ML</b>, de la <b className="gold">préparation des données</b> au <b className="gold">suivi en production</b>, en passant par les phases d'<b className="gold">expérimentation</b> et de <b className="gold">déploiement</b>.</>,
        <>Après <b className="gold">cinq ans</b> d'expérience comme <b className="gold">Data Scientist</b> / <b className="gold">ML Engineer</b> au sein de deux grands groupes d'assurance, j'ai appris à travailler en étroite collaboration avec les <b className="gold">équipes marketing</b> pour transformer un besoin métier en solution robuste, prête à être déployée.</>,
        <>Au quotidien, je développe en <b className="gold">Python</b> avec des librairies comme <b className="gold">CatBoost</b>, <b className="gold">XGBoost</b>, <b className="gold">scikit-learn</b> et <b className="gold">MLflow</b>, dans un environnement cloud centré sur l'écosystème <b className="gold">Azure</b> : <b className="gold">Databricks</b> pour la data et l'expérimentation, <b className="gold">Azure ML</b> pour le déploiement et l'exposition d'API, et <b className="gold">Azure DevOps</b> pour les pipelines CI/CD.</>,
        <>Je mets en œuvre des pratiques <b className="gold">MLOps</b>, en particulier sur les sujets de <b className="gold">suivi du drift</b>, et j'ai par ailleurs contribué à la librairie open source <b className="gold">Eurybia</b>.</>,
        <>En parallèle, j'explore des projets perso autour des <b className="gold">architectures RAG</b>, du <b className="gold">fine-tuning de LLMs</b> et des <b className="gold">agents IA</b>.</>,
    ],
      findMe: "RETROUVEZ-MOI SUR",
      connect: "N'hésitez pas à",
      connectText: "me contacter",
      withMe: ""
    }
  };
  
  
  

  const currentText = translations[currentLanguage] || translations.en;

  return (
    <>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                {currentText.title} <span className="gold"> {currentText.intro} </span> {currentText.myself}
              </h1>
              <p className="home-about-body">
                {currentText.description[0]}
                <br />
                <br />
                {currentText.description[1]}
                <br />
                <br />
                {currentText.description[2]}
                <br />
                <br />
                {currentText.description[3]}
                <br />
                <br />
                {currentText.description[4]}
                <br />
                <br />
                {currentText.description[5]}
                <br />
                <br />
                {currentText.description[6]}
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="home-about-social">
              <h1>{currentText.findMe}</h1>
              <p>
                {currentText.connect} <span className="gold">{currentText.connectText} </span>{currentText.withMe}
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Imadberkani/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/imad-berkani-a600b518a/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Home2;
