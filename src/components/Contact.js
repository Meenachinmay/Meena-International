import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact2.webp";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} style={{height:400,borderRadius:50}} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form >
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="First Name"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Email Address"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" ></textarea>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                  
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
