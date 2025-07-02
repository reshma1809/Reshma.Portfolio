import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger success alert
    setShowSuccess(true);

    // Auto-hide after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <Container fluid className="contact-section">
      <Row className="contact-row">
        <Col md={8} className="contact-card">
          <div className="contact-header">
            <h2>Connect With Me</h2>
            <p>
              <br />
              Got something in mind? Just drop a message below!
            </p>
          </div>

          {/* 🌟 Success Alert at Top */}
          {showSuccess && (
            <Alert variant="success" className="mt-2">
              ✨ Message sent successfully! I’ll get back to you soon 💌
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control type="text" placeholder="Your Name" required />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control type="email" placeholder="Your Email" required />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="send-button">
              SEND MESSAGE !
            </Button>
          </Form>

          <h6 className="reach-line">
            Reach me at – <span className="email-text">renusirli9@gmail.com</span>
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
