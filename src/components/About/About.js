import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';
import ResumePDF from '../Assets/reshma_reshu_ resume.pdf';

const About = () => {
  return (
    <Container fluid className="about-container">
      <Row className="justify-content-center align-items-center">
        <Col md={8}>
          <div className="about-card">
            <div className="right">
              <div className="title text-center">
                <span className="about-title">About Me</span>
              </div>
              <div className="topic about-topic">Professional Profile</div>
              <p className="about-p">
                I am Reshma, a dedicated full-stack developer and Salesforce Admin trainee passionate about delivering seamless, user-focused digital solutions.
              </p>
              <p className="about-p">
                My journey began with mastering foundational programming languages  C, Python, Java, and JavaScript, I approach software development with logical precision and a problem-solving mindset honed through Data Structures and Algorithms. My experience spans modern frameworks such as ReactJS, AngularJS, and Spring Boot, paired with database management using MySQL, allowing me to build end-to-end, scalable web applications.
              </p>
              <p className="about-p">
                As a Salesforce Admin, I specialize in managing and optimizing Salesforce environments to enhance business workflows and user experiences. I have hands-on expertise in creating and maintaining objects, workflows, and reports within Salesforce, aligning technical solutions with organizational needs.
              </p>
              <p className="about-p">
                I am driven by a commitment to clean, maintainable code and user-centered design, ensuring every project I contribute to blends technical excellence with practical impact. </p>
              <div className="resume-buttons text-center">
                <Button variant="outline-light" href={ResumePDF} target="_blank" rel="noopener noreferrer">
                  View My Resume
                </Button>
                <Button variant="outline-light" href={ResumePDF} download>
                  Download My Resume
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
