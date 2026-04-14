import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rag from "../../Assets/Projects/rag.svg";
import scorescanner from "../../Assets/Projects/scorescanner.png";
import churnAuto from "../../Assets/Projects/churn_auto.png";
import topicModeling from "../../Assets/Projects/topic_modeling_card_v2.svg";
import eurybia from "../../Assets/Projects/eurybia.png";
import churnClient from "../../Assets/Projects/churn_client.png";
import { useLanguage } from "../../context/LanguageContext";

function Projects() {
  const { currentLanguage } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const translations = {
    en: {
      title: "My Recent",
      works: "Works",
      description: "Here are a few projects I've worked on recently.",
      professional: "Professional",
      personal: "Personal",
      eurybiaProject: {
        title: "Eurybia – Machine Learning Model Monitoring in Production",
        description: "Most Machine Learning models are <strong>static</strong> while the world is <strong>dynamic</strong>. Even after excellent results with <strong>cross-validation</strong> or on a <strong>validation set</strong>, nothing guarantees the maintenance of <strong>performance in production</strong>. Data evolves and it is crucial to act quickly to detect these <strong>drifts</strong>.<br/><br/>I contributed to Eurybia by implementing <strong>drift detection and quantification metrics</strong> for production data, writing <strong>Python notebook tutorials</strong>, and conducting a <strong>state-of-the-art review</strong> with <strong>mathematical formalization</strong> of the problem."
      },
      churnClientProject: {
        title: "Customer Churn Prediction – Interpretable Approach",
        description: "Customer churn was a critical business challenge. We needed to detect <strong>early warning signals</strong> in time to act. To address this challenge, I designed and automated a <strong>training data pipeline</strong> that <strong>consolidated and transformed data</strong> from <strong>multiple sources</strong>, then built an <strong>interpretable machine‑learning model</strong>.<br/><br/>The solution <strong>surfaces and quantifies churn precursors</strong> and reveals <strong>new risk alerts</strong>. With the model's <strong>interpretability</strong>, business teams can measure the <strong>independent effect</strong> of each alert, remove <strong>redundancies</strong>, and compare the <strong>relative importance</strong> of signals, turning results into <strong>clear, actionable indicators</strong> that drive <strong>customer retention</strong>."
      },
      churnAutoProject: {
        title: "Auto insurance churn prediction score – predictive approach",
        description: "Following the insights gained from the full customer churn analysis project, the next step was to <strong>internalize and industrialize a predictive churn score</strong> for <strong>auto insurance policies</strong>, designed to support a <strong>product retention campaign</strong>.<br/><br/>By combining <strong>internal data</strong> with <strong>external</strong> sources from <strong>open data</strong>, the approach delivered strong results, paving the way for the implementation of a full <strong>Machine Learning lifecycle</strong>: <strong>automated data extraction and transformation pipelines</strong>, model <strong>training</strong> and <strong>deployment</strong>, along with continuous <strong>performance tracking</strong> and <strong>monitoring</strong>.<br/><br/>One year later, an assessment conducted by operational marketing confirmed the model's added value, with excellent results reinforcing its long-term integration into the <strong>customer retention strategy</strong>."
      },
      topicModelingProject: {
        title: "Topic Modeling – Automated Theme Extraction from Customer Conversations",
        description: "Insurance members express a wide range of concerns when interacting with advisors. Manually identifying <strong>recurring topics</strong> at scale is both time consuming and inconsistent.<br/><br/>To address this, I built an <strong>automated topic extraction pipeline</strong> leveraging <strong>BERT embeddings</strong> to capture the semantic meaning of exchanges, combined with <strong>HDBSCAN clustering</strong> to surface <strong>recurring themes</strong> without requiring a predefined number of topics.<br/><br/>This solution enables teams to <strong>continuously monitor emerging subjects</strong>, detect <strong>friction points</strong> in the member journey, and prioritize <strong>operational improvements</strong> based on what members actually express."
      },
      sysragProject: {
        title: "SysRAG – Retrieval-Augmented Generation Pipeline on BBC News",
        description: "Large Language Models are powerful but constrained by <strong>static training knowledge</strong> and <strong>limited context windows</strong>. Injecting too much information into a prompt reduces relevance, increases costs, and causes important details to be missed.<br/><br/>To address this, I built a <strong>modular RAG pipeline</strong> on BBC News data combining <strong>Weaviate vector search</strong>, <strong>BM25 retrieval</strong>, and <strong>reranking</strong> to inject only the most relevant context into the generation step. The system is exposed through a <strong>Flask API</strong> and fully <strong>containerized with Docker Compose</strong>.<br/><br/>This architecture produces more <strong>grounded</strong>, <strong>scalable</strong>, and <strong>context-efficient</strong> answers compared to naive prompting approaches."
      },
      scorescannerProject: {
        title: "Face Recognition and Emotion Detection",
        description: "I developed <strong>ScoreScanner</strong>, an Python library designed to facilitate <strong>feature exploration</strong> in the early stages of modeling, especially before moving to more complex approaches such as <strong>gradient boosting</strong>.<br/><br/>The library provides a set of tools to analyze the relationship between input features and the target variable in supervised tabular machine learning, including <strong>data preprocessing</strong>, <strong>univariate analysis</strong>, <strong>supervised binning</strong>, outlier detection, multicollinearity reduction, and <strong>reporting</strong> around interpretable models such as <strong>logistic regression</strong>.<br/><br/>The goal is to speed up upstream modeling workflows, better understand feature structure, and build a solid analytical foundation before moving to more powerful but less interpretable models."
      }
    },
    fr: {
      title: "Mes Projets",
      works: "Récents",
      description: "Voici quelques projets sur lesquels j'ai travaillé récemment.",
      professional: "Professionnel",
      personal: "Personnel",
      eurybiaProject: {
        title: "Eurybia – Monitoring des modèles de Machine Learning en production",
        description: "La plupart des modèles de Machine Learning sont <strong>statiques</strong> alors que le monde est <strong>dynamique</strong>. Même après d'excellents résultats avec une <strong>validation croisée</strong> ou sur un <strong>jeu de validation</strong>, rien ne garantit le maintien des <strong>performances en production</strong>. Les données évoluent et il est crucial d'agir vite pour détecter ces <strong>dérives</strong>.<br/><br/>J'ai contribué à Eurybia en implémentant des <strong>métriques de détection et de quantification</strong> de la dérive des données en production, en rédigeant des <strong>tutoriels sous format de notebooks Python</strong>, et en réalisant un <strong>état de l'art</strong> avec une <strong>formalisation mathématique</strong> du problème."
      },
      churnClientProject: {
        title: "Prédiction de la résiliation totale des clients – Approche interprétable",
        description: "La résiliation client constituait un défi majeur pour l'entreprise, qui devait être capable d'identifier en amont des <strong>signaux d'alerte</strong> afin d'agir rapidement. Pour répondre à cet enjeu, j'ai conçu et automatisé un <strong>pipeline de données d'apprentissage</strong>, consolidant et transformant des données issues de <strong>multiples sources</strong>, puis développé un <strong>modèle de Machine Learning interprétable</strong>.<br/><br/>Cette approche a permis d'identifier et de quantifier les <strong>signaux précurseurs de résiliation</strong> existants, et de mettre en évidence de <strong>nouvelles alertes</strong>. Grâce à l'<strong>interprétabilité</strong> du modèle, les équipes métier ont pu mesurer l'<strong>effet indépendant</strong> de chaque alerte, éviter les <strong>redondances</strong> dans le traitement et comparer l'<strong>importance relative</strong> des signaux, transformant les résultats en <strong>indicateurs clairs et actionnables</strong> pour orienter les actions de <strong>rétention client</strong>."
      },
      churnAutoProject: {
        title: "Score prédictif de la résiliation d'un contrat d'assurance auto – approche prédictive",
        description: "Après les enseignements tirés du projet d'analyse de la résiliation totale, l'objectif était <strong>d'internaliser et d'industrialiser un score prédictif de résiliation</strong> pour les <strong>contrats d'assurance auto</strong>, destiné à alimenter une <strong>campagne de rétention produit</strong>.<br/><br/>En combinant <strong>données internes</strong> et <strong>données externes</strong> issues de l'<strong>open data</strong>, des résultats très satisfaisants ont permis de mettre en place un <strong>cycle de vie complet de Machine Learning</strong> : <strong>automatisation du pipeline</strong> d'extraction et de transformation, <strong>entraînement</strong> et <strong>mise en production</strong> du modèle, <strong>suivi de la performance</strong> et <strong>monitoring</strong> en continu.<br/><br/>Un an plus tard, une évaluation menée par le marketing opérationnel a confirmé l'apport du modèle, avec d'excellents résultats confortant son intégration durable dans la <strong>stratégie de rétention client</strong>."
      },
      topicModelingProject: {
        title: "Topic modeling – extraction automatique de thématiques à partir des échanges entre clients et conseillers",
        description: "Les sociétaires expriment une grande diversité de préoccupations lors de leurs échanges avec les conseillers. Identifier manuellement les <strong>sujets récurrents</strong> à grande échelle est à la fois chronophage et peu fiable.<br/><br/>Pour répondre à cet enjeu, j'ai conçu un <strong>pipeline automatisé d'extraction de thématiques</strong> s'appuyant sur des <strong>embeddings BERT</strong> pour capturer le sens sémantique des échanges, combinés à un <strong>clustering HDBSCAN</strong> pour faire émerger les <strong>thèmes récurrents</strong> sans nécessiter de définir un nombre de topics à l'avance.<br/><br/>Cette solution permet aux équipes de <strong>suivre en continu les sujets émergents</strong>, de détecter les <strong>points de friction</strong> dans le parcours sociétaire et de prioriser les <strong>améliorations opérationnelles</strong> sur la base de ce qu'expriment réellement les clients."
      },
      sysragProject: {
        title: "SysRAG – Pipeline RAG sur des articles issus de BBC News",
        description: "Les <strong>LLMs</strong> offrent des capacités impressionnantes, mais restent limités par une <strong>connaissance statique</strong> et une <strong>fenêtre de contexte bornée</strong>. À mesure que le volume d'information injecté dans le prompt augmente, la qualité du signal se dégrade : la pertinence baisse, les coûts montent, et des éléments clés peuvent être perdus.<br/><br/>Dans cette optique, j'ai développé un <strong>pipeline RAG modulaire</strong> à partir de sources d'information <strong>BBC News</strong>, reposant sur une combinaison de <strong>recherche vectorielle Weaviate</strong>, de <strong>BM25 retrieval</strong> et de <strong>reranking</strong>, pour sélectionner dynamiquement le contexte le plus utile avant génération. Le système est servi via une <strong>API Flask</strong> et déployé dans un environnement <strong>Docker Compose</strong>.<br/><br/>Par rapport à une approche naïve fondée uniquement sur le prompting, cette architecture produit des réponses plus <strong>ancrées dans les faits</strong>, mieux <strong>scalables</strong> et plus <strong>sobres en contexte</strong>."
      },
      scorescannerProject: {
        title: "Reconnaissance Faciale et Détection d'Émotions",
        description: "J’ai développé <strong>ScoreScanner</strong>, une librairie Python pensée pour faciliter l’<strong>exploration des variables</strong> en amont de la modélisation, en particulier avant le recours à des approches plus complexes comme le <strong>gradient boosting</strong>.<br/><br/>La librairie fournit un ensemble d’outils pour analyser la relation entre les variables explicatives et la cible sur des jeux de données tabulaires supervisés, avec des fonctionnalités de <strong>préparation des données</strong>, d’<strong>analyse univariée</strong>, de <strong>supervised binning</strong>, de détection d’outliers, de réduction de la multicolinéarité et de <strong>reporting</strong> autour de modèles interprétables comme la <strong>régression logistique</strong>.<br/><br/>L’objectif est d’accélérer les phases amont de modélisation, de mieux comprendre la structure des variables et de disposer d’une base d’analyse solide avant de passer à des modèles plus puissants mais moins lisibles."
      }
    }
  };

  const currentText = translations[currentLanguage] || translations.en;

  console.log("Active filter:", activeFilter);
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {currentText.title} <strong className="gold">{currentText.works}</strong>
        </h1>
        <p style={{ color: "white" }}>
          {currentText.description}
        </p>
        
        {/* Filtres */}
        <Row style={{ justifyContent: "center", paddingBottom: "20px", position: "relative", zIndex: 10 }}>
          <Col style={{ textAlign: "center" }}>
            <button
              onClick={() => setActiveFilter("all")}
              style={{
                backgroundColor: activeFilter === "all" ? "#c09c4c" : "transparent",
                color: activeFilter === "all" ? "#021727" : "#c09c4c",
                border: "2px solid #c09c4c",
                borderRadius: "25px",
                padding: "8px 20px",
                margin: "0 10px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                zIndex: 15
              }}
            >
              {currentText.professional} & {currentText.personal}
            </button>
            <button
              onClick={() => setActiveFilter("professional")}
              style={{
                backgroundColor: activeFilter === "professional" ? "#c09c4c" : "transparent",
                color: activeFilter === "professional" ? "#021727" : "#c09c4c",
                border: "2px solid #c09c4c",
                borderRadius: "25px",
                padding: "8px 20px",
                margin: "0 10px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                zIndex: 15
              }}
            >
              {currentText.professional}
            </button>
            <button
              onClick={() => setActiveFilter("personal")}
              style={{
                backgroundColor: activeFilter === "personal" ? "#c09c4c" : "transparent",
                color: activeFilter === "personal" ? "#021727" : "#c09c4c",
                border: "2px solid #c09c4c",
                borderRadius: "25px",
                padding: "8px 20px",
                margin: "0 10px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                zIndex: 15
              }}
            >
              {currentText.personal}
            </button>
          </Col>
        </Row>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Projets Professionnels */}
          {(activeFilter === "all" || activeFilter === "professional") && (
            <>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={eurybia}
                  isBlog={false}
                  title={currentText.eurybiaProject.title}
                  description={currentText.eurybiaProject.description}
                  ghLink="https://github.com/MAIF/eurybia"
                  demoLink=""
                />
              </Col>

              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={churnClient}
                  isBlog={false}
                  title={currentText.churnClientProject.title}
                  description={currentText.churnClientProject.description}
                />
              </Col>

              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={churnAuto}
                  isBlog={false}
                  title={currentText.churnAutoProject.title}
                  description={currentText.churnAutoProject.description}
                />
              </Col>

              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={topicModeling}
                  imgHeight="300px"
                  isBlog={false}
                  title={currentText.topicModelingProject.title}
                  description={currentText.topicModelingProject.description}
                />
              </Col>
            </>
          )}

          {/* Projets Personnels */}
          {(activeFilter === "all" || activeFilter === "personal") && (
            <>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={rag}
                  imgHeight="300px"
                  isBlog={false}
                  title={currentText.sysragProject.title}
                  description={currentText.sysragProject.description}
                  ghLink="https://github.com/Imadberkani/sysrag"
                />
              </Col>

              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={scorescanner}
                  imgHeight="300px"
                  isBlog={false}
                  title={currentText.scorescannerProject.title}
                  description={currentText.scorescannerProject.description}
                  ghLink="https://github.com/Imadberkani/scorescanner"
                />
              </Col>
            </>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;