import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Works.css'; 

const Works = () => {
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

  const works = [
    { 
      title: 'Mercedese Benz',
      img: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/untitled_design_-_2023-03-09t155840-sixteen_nine.jpg?size=948:533', 
      description: "A responsive clone of the Mercedes-Benz website, built with HTML, CSS, and Bootstrap, showcasing a detailed replication of the brand's design.",
      link: 'https://aswinrajt.github.io/mercedes-clone/'
    },
    { 
      title: 'BMI Calculator',
      img: 'https://www.tataaia.com/content/dam/tataaialifeinsurancecompanylimited/calculator/life-planning-tools/bmi-calculator/banner-image-bmi.png', 
      description: 'A simple BMI calculator made with HTML, CSS, and JavaScript, providing instant feedback on health status based on user inputs.',
      link: 'https://example.com/project2'
    },
    { 
      title: 'Country details finder',
      img: 'https://media.istockphoto.com/id/583715254/photo/national-flags-of-the-different-countries-of-the-world.webp?b=1&s=612x612&w=0&k=20&c=gdvXYVsV6R6K0aCip-Q4i_R5qCfLsg61-qAXtlhUzpI=', 
      description: 'A web app that fetches and displays key information about countries using a free API, built with HTML, CSS, and JavaScript.',
      link: 'https://aswinrajt.github.io/country/'
    },
    { 
      title: 'SRK Portfolio',
      img: 'https://pbs.twimg.com/media/FyRt2fwaAAAssDB.jpg:large', 
      description: 'A React-based portfolio for Shah Rukh Khan, featuring his works and skills in a modern layout with interactive elements.',
      link: 'https://example.com/project1'
    },
    { 
      title: 'Wifi mall navigation system',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fqbRXMauxLZvE2mRwx6Er-XploCHYA6JUw&s', 
      description: 'A Python-based app offering real-time indoor navigation in malls using Wi-Fi, with an interactive map for easy wayfinding.',
      link: 'https://example.com/project1'
    }
  ];

  return (
    <Container id="works" className="my-5">
      <h2>My Works</h2>
      <br /><br /><br />
      <Row>
        {works.map((work, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card 
              className="work-card"
              ref={el => cardRefs.current[index] = el}
            >
              <Card.Img variant="top" src={work.img} alt={`${work.title} image`} />
              <Card.Body>
                <center><Card.Title>{work.title}</Card.Title></center>
                <Card.Text>{work.description}</Card.Text>
                <Button 
                  variant="primary" 
                  href={work.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-work-button"
                >
                  View Work
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Works;
