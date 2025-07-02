import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';

import ECOBIN from '../Assets/Eco-Bin.jpg';
import JOBY from '../Assets/joby.jpg';
import PORTFOLIO from '../Assets/portfolio.png';
import QUOTES_GENERATOR from '../Assets/Quotes.png';
import CALCULATOR from '../Assets/calculator.png';


const projects = [
  {
    id: 1,
    title: 'ECO-BIN An E-Waste Management System',
    description: 'Eco-Bin is a full-stack web application that simplifies e-waste collection and disposal. Users can easily locate nearby collection centers and book pickups. Developed using HTML, CSS, JavaScript, and MySQL to promote sustainable tech solutions.',
    imageUrl: ECOBIN,
    link: 'https://github.com/reshma1809/EcoBin-E-Waste-Management-System'
  },
   {
    id: 2,
    title: 'Personal Web Profile',
    description: 'A responsive personal portfolio website developed using React.js, showcasing my skills, projects, and experience. It features a modern UI, organized layout, and interactive elements to provide a seamless user experience across all devices.',
    imageUrl: PORTFOLIO,
    link: 'https://github.com/reshma1809/Personal_Porfolio'
  },
  {
    id: 3,
    title: 'A Job & Internship Discovery Platform',
    description: 'Joby is a job and internship search platform built with HTML, CSS, JavaScript, and React. It features smooth navigation, dynamic interactivity, and a clean, responsive UI. Designed to provide a seamless experience for users across all devices.',
    imageUrl: JOBY,
    link: 'https://github.com/reshma1809/Joby'
  },
   {
    id: 4,
    title: 'Inspiring Quotes Generator Web App',
    description: 'A lightweight, responsive web application that dynamically fetches and displays inspirational quotes using a public API. Built with HTML, CSS, and JavaScript, the app features a clean UI, smooth transitions, and social sharing functionality for seamless user engagement.',
    imageUrl: QUOTES_GENERATOR ,
    link: 'https://github.com/reshma1809/Quotes-Generator'
  },
  {
    id: 5,
    title: 'A User-Friendly Calculator for Quick Math',
    description: 'Developed a responsive calculator web app using HTML, CSS, and JavaScript. Supports basic arithmetic operations with a clean and minimal interface. Designed for quick and easy use across both desktop and mobile devices.',
    imageUrl: CALCULATOR,
    link: 'https://github.com/reshma1809/calculator'
  },

];

const Projects = () => {
  return (
    <Container fluid className="projects-container">
      <Row>
        <Col className="text-center mb-4">
          <h2 className="projects-title">My Projects</h2>
        </Col>
      </Row>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xs={12} sm={6} md={4} className="d-flex align-items-stretch mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button href={project.link} target="_blank">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> {/* 💡 THIS WAS MISSING! */}
    </Container>
  );
};

export default Projects;
