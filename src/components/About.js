import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const About = () => {
  return (
    <section className="project" id="about">
      <Container>
        <Row className="align-items-center justify-content-center py-4" style={{ minHeight: '100vh' }}>
          <Col md={7} className="d-flex flex-column align-items-center justify-content-center">
            <h2>About Me</h2>
            <div className="w-100 px-4">
              <div className="text-gray-500 sm-text-lg dark:text-gray-400">
                <p className="mb-4 text-justify">
                  Information and Communication Technology (ICT) is my great love, and I attend UCSC for my undergraduate degree. My objective is to keep up to date with technological developments and always to improve my knowledge and abilities. I like problems and am always willing to learn new skills and technology.
                </p>
                <p className="mb-4 text-justify">
                  With a solid foundation in design and programming, I bring proven interpersonal and communication abilities. My ability to collaborate well with others helps me accomplish group goals. Maintaining current with new technology excites me especially, and I aggressively look for chances to broaden my knowledge in this exciting and always changing area.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                {/* Placeholder for download CV button */}
              </div>
            </div>
          </Col>
          <Col md={5} className="d-flex flex-column align-items-center justify-content-center py-4 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="mockup" className="img-fluid" />
            {/* Ensure the URL points to a valid image */}
          </Col>
        </Row>

      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
