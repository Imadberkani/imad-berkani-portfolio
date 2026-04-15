import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useLanguage } from "../context/LanguageContext";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  function scrollHandler() {
    if (window.scrollY >= 20) updateNavbar(true);
    else updateNavbar(false);
  }
  window.addEventListener("scroll", scrollHandler);

  const texts = {
    en: { home: "Home", about: "About", projects: "Projects", resume: "Resume" },
    fr: { home: "Accueil", about: "À propos", projects: "Projets", resume: "CV" },
  };

  const flagBtnStyle = (active) => ({
    padding: "2px 6px",
    backgroundColor: "transparent",
    border: "none",
    boxShadow: active ? "0 0 5px rgba(192,156,76,0.8)" : "none",
  });
  const flagImgStyle = (active) => ({
    width: "30px",
    height: "20px",
    objectFit: "cover",
    opacity: active ? 1 : 0.7,
    transition: "opacity 0.2s ease",
  });

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Nav.Item className="mx-2">
              <Button
                variant="light"
                onClick={() => setCurrentLanguage("fr")}
                style={flagBtnStyle(currentLanguage === "fr")}
                aria-label="Passer le site en Français"
                title="Français"
              >
                <img
                  src="https://flagcdn.com/w40/fr.png"
                  alt="Drapeau français"
                  style={flagImgStyle(currentLanguage === "fr")}
                />
              </Button>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Button
                variant="light"
                onClick={() => setCurrentLanguage("en")}
                style={flagBtnStyle(currentLanguage === "en")}
                aria-label="Switch site to English"
                title="English"
              >
                <img
                  src="https://flagcdn.com/w40/gb.png"
                  alt="UK flag"
                  style={flagImgStyle(currentLanguage === "en")}
                />
              </Button>
            </Nav.Item>
          </Nav>

          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {texts[currentLanguage].home}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {texts[currentLanguage].about}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> {texts[currentLanguage].projects}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> {texts[currentLanguage].resume}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Imadberkani/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
