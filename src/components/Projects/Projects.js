import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import foodOrdering from "../../Assets/Projects/foodOrdering.png";
import suicide from "../../Assets/Projects/suicide.png";
import taskDashboard from "../../Assets/Projects/taskDashboard.png";
import project1 from "../../Assets/Projects/project1.png";

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
            title="FoodieHub"
            description="Developed a responsive food ordering platform using React.js with category-based browsing, dynamic food listings, shopping cart, and wishlist functionality. Implemented tab-based menu navigation, interactive sliders, 'Load More' pagination, and smooth scroll animations using Framer Motion. Focused on creating an engaging user experience with intuitive navigation, responsive layouts, and modern UI design patterns."
            ghLink="https://github.com/YOUR_USERNAME/foodiehub"
            demoLink="https://your-demo-link.com"
          />
        </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
