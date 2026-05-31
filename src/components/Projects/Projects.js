import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodOrdering from "../../Assets/Projects/foodOrdering.png";
import taskDashboard from "../../Assets/Projects/taskDashboard.png";
import project1 from "../../Assets/Projects/project1.png";
import liveChat from "../../Assets/Projects/liveChat.png;
  
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
       <p style={{ color: "white" }}> A showcase of web applications and digital solutions I've built using React, JavaScript, PHP, MySQL, and modern frontend technologies. </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={project1}
            isBlog={false}
            title="CSC Service Portal"
            description="Developed a production-ready CSC (Common Service Center) service portal using React.js, PHP, and MySQL. Built a fully responsive and mobile-friendly interface with multilingual support (English & Marathi), light/dark theme switching, dynamic blog management, service listings, and contact inquiry forms. Optimized website performance, accessibility, and SEO to improve search visibility and user engagement. Successfully deployed and maintained the application on Hostinger, ensuring a seamless experience across desktop, tablet, and mobile devices."
            ghLink="#"
            demoLink="https://shreeservz.com"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={taskDashboard}
            isBlog={false}
            title="TaskFlow Dashboard"
            description="Developed a modern task management dashboard inspired by tools like Zoho and Jira using React.js and Valtio for state management. Features include task creation and assignment, status tracking (Backlog, In Progress, Done), custom tags, drag-and-drop functionality, Kanban and List views, and customizable dashboard themes. Built with a focus on performance, intuitive user experience, and scalable state management."
            ghLink="https://github.com/YOUR_USERNAME/taskflow-dashboard"
            demoLink="https://your-demo-link.com"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={foodOrdering}
            isBlog={false}
            title="FoodKing"
            description="Developed a responsive food ordering platform using React.js with category-based browsing, dynamic food listings, shopping cart, and wishlist functionality. Implemented tab-based menu navigation, interactive sliders, 'Load More' pagination, and smooth scroll animations using Framer Motion. Focused on creating an engaging user experience with intuitive navigation, responsive layouts, and modern UI design patterns."
            ghLink="https://github.com/YOUR_USERNAME/foodiehub"
            demoLink="https://your-demo-link.com"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={liveChat}
            isBlog={false}
            title="LiveChatAPP"
            description="A full-stack real-time chat application built with TypeScript, React, and WebSockets. Features JWT authentication, multi-room messaging, live typing indicators, and auto-reconnect logic."
            ghLink="https://github.com/YOUR_USERNAME/foodiehub"
            demoLink="https://live-chat-app-blue.vercel.app/"
          />
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
