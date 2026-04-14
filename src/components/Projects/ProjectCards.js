import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        style={{
          height: props.imgHeight || "200px",
          objectFit: "contain",
          objectPosition: "center"
        }}
      />
      <Card.Body style={{ minHeight: "200px", display: "flex", flexDirection: "column" }}>
        <Card.Title style={{ minHeight: "60px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>{props.title}</Card.Title>
        <Card.Text 
          style={{ textAlign: "justify", flex: 1 }}
          dangerouslySetInnerHTML={{ 
            __html: props.description.replace(
              /<strong>(.*?)<\/strong>/g, 
              '<span class="gold">$1</span>'
            ) 
          }}
        />
        <div style={{ display: "flex", gap: "10px", marginTop: "auto", flexWrap: "wrap" }}>
          {props.ghLink && (
            <Button
              variant="secondary"
              href={props.ghLink}
              target="_blank"
              style={{
                backgroundColor: "#c09c4c",
                color: "#021727",
                border: "2px solid #c09c4c"
              }}
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="secondary"
              href={props.demoLink}
              target="_blank"
              style={{
                backgroundColor: "#c09c4c",
                color: "#021727",
                border: "2px solid #c09c4c"
              }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
