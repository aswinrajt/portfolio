import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Education.css'; 

const Education = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); 

    cardRefs.current.forEach(card => {
      observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  const educationDetails = [
    {
      institution: 'Luminar Technolab, Calicut',
      degree: 'MERN Stack Developer Internship',
      description: 'Currently doing an internship focused on full-stack development using MongoDB, Express.js, React, and Node.js.',
    },
    {
      institution: 'Calicut University',
      degree: 'Bachelor of Computer Science',
      description: 'Graduated with a strong focus on software development, data structures, and algorithms and needfull skills.',
    },
    {
      institution: 'NGO Quarters Higher Secondary School',
      degree: 'Higher Secondary Education in Computer Science',
      description: 'Completed higher secondary education with a specialization in Computer Science.',
    },
  ];

  return (
    <Container id="education" className="my-5 education-container">
      <h2>Education</h2>
      <Row>
        {educationDetails.map((education, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="education-card" ref={el => cardRefs.current[index] = el}>
              <Card.Body>
                <Card.Title>{education.degree}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{education.institution}</Card.Subtitle>
                <Card.Text>{education.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Education;
