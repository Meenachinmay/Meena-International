import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/tictactoe.png";
import projImg2 from "../assets/img/portfolio.png";
import projImg3 from "../assets/img/flappy-bird.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tic-Tac-Toe",
      description: "A Game Play",
      imgUrl: projImg1,
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Flappy Bird",
      description: "A Game Play",
      imgUrl: projImg3,
    }
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Works</h2>
                <p> Trust us !, As a startup we provide good service and value our Money and needs...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container></section>
  )
}