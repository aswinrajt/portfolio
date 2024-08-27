import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Skills.css'; 

const Skills = () => {
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

  const skills = [
    { name: 'HTML', img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'Bootstrap', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
    { name: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'Node.js', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  ];

  return (
    <Container id="skills" className="my-5">
      <h2>My Skills</h2>
      <br />
      <br />
      <Row>
        {skills.map((skill, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="skill-card" ref={el => cardRefs.current[index] = el}>
              <Card.Img variant="top" as={Image} src={skill.img} alt={`${skill.name} logo`} style={{ height: '150px', objectFit: 'contain' }} />
              <Card.Body>
               <center> <Card.Title>{skill.name}</Card.Title></center>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
