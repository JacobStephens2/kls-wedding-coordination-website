import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/cormorant-garamond"
import './style.css'
import { Fade } from "react-awesome-reveal";




export default function Home() {
  return <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">KLS <div className="elegant">Wedding Coordination</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container>
      <Fade>
      <Row className="intro">

        <Col className="vertical-center" md={12} lg={7}>
        <StaticImage src="../images/reception-setup.jpg" alt="A wide view of an indoor wedding reception setup. Photo by Bartlett Pair Photography" />
        </Col>

        <Col className="vertical-center">
          <h1>As an event professional and recent bride, it is my goal to assist other brides in having a care-free day with your family and friends that you will always cherish and&nbsp;remember.</h1>
        </Col>

      </Row>
      </Fade>


      <Fade>
      <Row className="section" id="about">

        <Col className="vertical-center order-lg-2" md={12} lg={6}>
        <StaticImage src="../images/KLSaboutme-1x1.jpg" alt="A photo of Kendel Lyn Stephens. Photo by Bartlett Pair Photography" />
        </Col>

        <Col className="vertical-center order-lg-1">
          <Row>
            <h2 className="about-header">Hi there,&thinsp;I'm Kendel&nbsp;Lyn!</h2>
            <p>
            I am an event planner at a local college, and a September 2020 bride. My husband and I were not planning on having a day-of wedding coordinator for our wedding, but we are so glad we ended up having someone to assist in making our day run smoothly from behind the&nbsp;scenes.
            </p>
            <p>
            I was inspired to do the same for other brides by offering my day-of coordination services. Please don't hesitate to reach out with any questions you have. I would love the opportunity to work with&nbsp;you!
            </p>
          </Row>
        </Col>

      </Row>
      </Fade>


      <Fade>
      <Row className="section" id="services">

        <Col className="vertical-center">
          <StaticImage 
          src="../images/cake-reception.jpg"
          alt="A photo of a wedding cake by Bartlett Pair Photography." 
          />
        </Col>

        <Col lg={7} md={12} className="vertical-center">
          <Row>
            <h2>Services</h2>
            <h3>My coordination package includes the following services beginning 1-2 months before your&nbsp;wedding:</h3>
            <ul>
              <li>Up to 5 in-person meetings; one meeting will be a venue walkthrough with the bride and or groom. I will be available via email and phone to check-in and chat during discussed and agreed upon times, which does not count towards the 5 in-person meetings</li>
              <li>Vendor contract review to understand how your vendors will be helping you day-of</li>
              <li>Vendor communication 1 week prior to the wedding, if desired (including confirming arrival 
              times, getting necessary insurance information, meal counts, confirming services booked, etc) </li>
              <li>Identifying missing essential pieces to the day-of plan  </li>
              <li>Creating the day-of wedding timeline together, and distributing this to your vendors </li>
              <li>Wedding Party Rehearsal – present to assist in choreographing the bridal family and party 
              before the big day so that they know where and when to walk, sit, stand, etc.  </li>
              <li>Wedding Day-Of Management and Execution for up to 12 hours</li>
            </ul>
          </Row>
        </Col>

      </Row>
      </Fade>


      <Fade>
      <Row className="section" id="contact">

        <Col className="vertical-center order-lg-2" md={12} lg={6}>
        <StaticImage src="../images/carleyauston-ceremony-wide.jpg" alt="A wide view of a wedding reception setup. Photo by Elizabeth Mae Photography" />
        </Col>

        <Col className="vertical-center order-lg-1">
          <Row>
        <h2>Contact</h2>
        <p> Feel free to contact me via email at <a href="mailto:kendel.lyn@gmail.com">kendel.lyn10@gmail.com</a>.<br />Let's connect on <a href="https://www.facebook.com/klsweddingcoordination">Facebook</a>!</p>
          </Row>
        </Col>

      </Row>
      </Fade>

      
      <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Photo Credits
    </Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link href="https://bartlettpairphotography.com/">Bartlett Pair Photography</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="https://elizabethmaephotography.com">Elizabeth Mae Photography</Nav.Link>
  </Nav.Item>
</Nav>

    </Container>
    
      </div>
}
