import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a React Developer passionate about building modern, scalable, and
              user-friendly web applications.
              <br />
              <br />
              With experience in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, React.js, Redux Toolkit, React Query, and REST
                  APIs
                </b>
              </i>
              , I focus on developing high-quality frontend solutions that provide seamless
              user experiences.
              <br />
              <br />
              I enjoy creating reusable components, optimizing application performance, and
              writing clean, maintainable code.
              <br />
              <br />
              My preferred tech stack includes
              <i>
                <b className="purple">
                  {" "}
                  React.js, Next.js, Material UI, Tailwind CSS, Git, and modern web
                  technologies
                </b>
              </i>
              .
              <br />
              <br />
              I'm always eager to learn, collaborate, and take on new challenges that help
              me grow as a developer.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
