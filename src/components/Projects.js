import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/HABIT TRACKER.jpeg";
import projImg2 from "../assets/img/EV.jpeg";
import projImg3 from "../assets/img/SO.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Habit Tracker",
      description: "Habit tracker web application using Reactjs",
      imgUrl: projImg1,
    },
    {
      title: "Event Management system",
      description: "using MERN stack development",
      imgUrl: projImg2,
    },
    {
      title: "Social Schemes and Budget allocation",
      description: "using data analysing",
      imgUrl: projImg3,
    },
    {
      title: "????",
      description: "",
      imgUrl: projImg1,
    },
    {
      title: "?????",
      description: "",
      imgUrl: projImg2,
    },
    {
      title: "????",
      description: "",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Feel free to checkout my Projects!!!!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                    <Tab.Pane eventKey="section">
                      <p>????</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>????</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
