
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h5>Connect with me</h5>
            <div>
              <a href="https://www.linkedin.com/in/aswinrajt" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/aswinrajt" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaGithub size={30} />
              </a>
              <a href="https://www.instagram.com/niwsa_" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaInstagram size={30} />
              </a>
              <a href="https://wa.me/9605766178" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaWhatsapp size={30} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100004783065768&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com/ASW1NIWSA" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaTwitter size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <h5>Send me a message</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
              {submitted && <p className="mt-3 text-success">Your message has been sent!</p>}
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} Aswin Raj T. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
















