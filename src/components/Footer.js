import { Container, Row, Col } from "react-bootstrap";
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineMail ,AiOutlinePhone} from 'react-icons/ai';

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
      
          <Col size={12} sm={6} className="footer_content">
         
           <ul>
            <li className="social-icon footer_icon" style={{display:'flex',justifyContent:'space-around'}}>
            <CiLocationOn style={{fontSize:40,marginRight:10}}></CiLocationOn>
              Japan,Kanagawa-Ken,Kawasaki-shi,Miyamae-Ku,Miyazaki 3-11-3-902
            </li>
            <li className="social-icon footer_icon">
            <AiOutlinePhone style={{fontSize:30,marginRight:10}}/>
              080-4168-4443
            </li>
            <li className="social-icon footer_icon" >
            <AiOutlineMail style={{fontSize:28,marginRight:10}}></AiOutlineMail>
              meenamahesh23123@meena-intl.com
            </li>
           </ul>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Meena International @Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
