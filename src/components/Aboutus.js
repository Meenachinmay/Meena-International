import React from 'react'

import { Container, Row, Col } from "react-bootstrap";
import about from "../assets/img/aboutus.png";
import 'animate.css';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
export const Aboutus = () => {
  return (
    <section className="about" id="about">
            <br></br> <br></br> <br></br>
    <br></br>
    <Container>
      <Row className="align-items-center">
      
        <Col style={{display:'flex',flexDirection:'column'}}>
        <Col><h2>About us</h2></Col>
<br></br>
        <Col><p style={{fontSize:20}}>&emsp;&emsp;Hellow ,  i am Meena Mahesh Kumar the CEO of Meena International,a leading IT company dedicated to transforming businesses through innovative technology solutions. With a passion for digital advancements, We have steered our organization towards excellence in the ever-evolving IT landscap</p></Col>
       <p style={{fontSize:20}}>&emsp;&emsp;Our mission is to empower businesses to thrive in the digital age.Through our comprehensive range of IT services.</p>
       <a href="#contact" >  <button style={{color:'#5bc0de'}}> Connect Us <ArrowRightCircle size={25} style={{color:'#5bc0de'}} /></button></a>
        </Col>
        <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={about} style={{height:400,borderRadius:50}} alt="Contact Us"/>
            }
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <br></br> <br></br> <br></br>
    <br></br>
  </section>
  )
}


