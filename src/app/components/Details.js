'use client';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WebIcon from '@mui/icons-material/Web';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactCardFlip from 'react-card-flip';


const cardData = [
  {
    title: "Server and Storage Systems",
    text: "To provide great advantage by adding efficiency to business processes by solving problems with our Technology Services.",
    icon: <WebIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
  },
  {
    title: "IT Support Services",
    text: "Our customers have the right to unlimited calls and on-site support within the scope of the agreement.",
    icon: <AdsClickIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
  },
  {
    title: "Desktop and Server Virtualization",
    text: "Our server virtualization, workforce mobility platform enables end users to access their data and applications from any device.",
    icon: <ScreenSearchDesktopIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
  },
  {
    title: "Network and Security Solutions",
    text: "The security of IT infrastructures of institutions is an important subject of expertise and professional protection of data security.",
    icon: <LocalGroceryStoreIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
  },
  {
    title: "Cloud Services",
    text: "A copy of our customers' Business Critical Systems is the provision of service in IT Cloud Cloud technologies.",
    icon: <LocalGroceryStoreIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
  },
  {
    title: "Tracing Solutions",
    text: "With our IT Cloud Monitoring service, we monitor the entire infrastructure of our customers by setting alarms.",
    icon: <LocalGroceryStoreIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
  }
];

function Details() {
  const [flippedState, setFlippedState] = useState(cardData.map(() => false));

  const handleFlip = (idx) => {
    const newFlippedState = flippedState.map((isFlipped, i) => (i === idx ? !isFlipped : isFlipped));
    setFlippedState(newFlippedState);
  };

  return (
    <Box
      width="100%"
      minHeight="100%"
      mt={3}
      mb={3}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Typography
        sx={{ fontSize: { xs: '20px', md: '25px' } }}
        color="white"
        variant="h3"
        fontWeight="bold"
        mb={2}
        data-aos="fade-down"
      >
        Our Services and Solutions
      </Typography>
      <Typography
        sx={{ fontSize: { xs: '15px', md: '20px' } }}
        color="white"
        variant="h4"
        mb={2}
        data-aos="fade-down"
      >
        Your IT Infrastructure is Entrusted to Us.
      </Typography>
      <div className="flex justify-center md:mt-5 mt-10 mb-0 md:mb-10">
        <div 
 data-aos="fade-up" className="w-auto h-auto shadow-lg hover:shadow-xl bg-blue-950 p-3 text-white cursor-pointer">
          Learn more about services
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg> */}
        </div>
      </div>
      <Container  data-aos="fade-up" className="mt-4">
        <Row xs={1} md={3} className="g-4">
          {cardData.map((card, idx) => (
            <Col key={idx} className="d-flex align-items-stretch" data-aos="zoom-up">
              <ReactCardFlip flipSpeedFrontToBack="2" flipSpeedBackToFront="2" key={idx} isFlipped={flippedState[idx]} flipDirection="horizontal">
                <Card
               
                  style={{
                    padding: '6px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    color: 'white',
                    backgroundColor: 'gray',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    minHeight: '250px',
                  }}
                  onMouseEnter={() => handleFlip(idx)}
                  onMouseLeave={() => handleFlip(idx)}
                >
                  {card.icon}
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
                <Card
               
                  style={{
                    position: 'relative',
                    padding: '6px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    color: 'white',
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/office.jpeg');`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    minHeight: '250px',
                  }}
                >
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </ReactCardFlip>
            </Col>
          ))}
        </Row>
      </Container>
    </Box>
  );
}

export default Details;
