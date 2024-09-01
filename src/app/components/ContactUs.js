import * as React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '@/app/css/ContactUs.css';

export default function Ab() {
  const handleMailClick = () => {
    window.location.href = 'mailto:neskomedia01@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+923483715545';
  };

  const handleWhatsappClick = () => {
    window.open('https://wa.me/+923483715545', '_blank');
  };

  return (
    <Row xs={1} md={3} className="g-2 justify-content-center">
      <Col xs="auto" md="auto" className="d-flex justify-content-center mb-3">
      <Card data-aos="fade-up" className="text-slate-200 contact-card w-64 h-48 bg-blue-950">
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <LocalPhoneIcon
              onClick={handlePhoneClick}
              style={{ fontSize: '50px', color: '#e2e8f0',margin:'5px' }}
              aria-label="Call Customer Service"
            />
            <Card.Text className="contact-text">Customer Service</Card.Text>
            <Card.Text className="contact-text">+923483715545</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs="auto" md="auto" className="d-flex justify-content-center mb-3">
      <Card data-aos="fade-up" className="text-slate-200 contact-card w-64 h-48 bg-blue-950">
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <WhatsAppIcon
              onClick={handleWhatsappClick}
              style={{ fontSize: '50px', color: '#e2e8f0',margin:'5px' }}
              aria-label="WhatsApp Office"
            />
            <Card.Text className="contact-text">Office</Card.Text>
            <Card.Text className="contact-text">London, UK</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs="auto" md="auto" className="d-flex justify-content-center mb-3">
        <Card data-aos="fade-up" className="text-slate-200 contact-card w-64 h-48 bg-blue-950">
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <MailOutlineIcon
              onClick={handleMailClick}
              style={{ fontSize: '50px', color: '#e2e8f0',margin:'5px' }}
              aria-label="Email Office"
            />
            <Card.Text className="contact-text">Mail Address</Card.Text>
            <Card.Text className="contact-text">bsolution@gmail.com</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
