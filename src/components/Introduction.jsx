import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Introduction.css';
import me from '../assets/me.jpg';
const Introduction = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1 });

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <Container id="intro" className="intro-container" ref={introRef}>
      <Row className="align-items-center text-center text-md-left">
        <Col xs={12} className="mb-4">
          <Image
            className='intro-image mx-auto d-block'
            src={me}
            roundedCircle
            fluid
            alt="Aswin Raj T"
          />
        </Col>
        <Col xs={12}>
          <h1 className="mb-4">Hi, I'm Aswin Raj T</h1>
          <p className="intro-text mb-4">
            I am a Computer Science graduate with a strong foundation in web development. 
            Currently, I am doing an internship in MERN stack development, where I am honing my skills 
            in building dynamic and responsive web applications. With a passion for coding and a keen 
            interest in modern web technologies, I am eager to contribute to innovative projects and 
            continue growing as a developer.
          </p>
          <Button 
            variant="primary"
            href="path/to/your-resume.pdf"
            download="Aswin_Raj_T_Resume.pdf"
            className="d-block mx-auto mx-md-0"
          >
            Download Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
