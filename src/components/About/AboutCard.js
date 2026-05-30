import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Shubhangi Bhosale</span>{" "}
            from <span className="purple">Maharashtra, India</span>.
            <br />
            I'm a <span className="purple">React Developer</span> passionate
            about building modern, scalable, and user-friendly web applications.
            <br />
            I specialize in{" "}
            <span className="purple">
              React.js, JavaScript, TypeScript, Redux Toolkit, React Query,
              Material UI, and REST API Integration
            </span>
            .
            <br />
            <br />
            I enjoy creating responsive user interfaces, optimizing application
            performance, and writing clean, maintainable code.
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Frontend Best Practices 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Discovering New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and never stop growing."
          </p>

          <footer className="blockquote-footer">
            Shubhangi Bhosale
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
