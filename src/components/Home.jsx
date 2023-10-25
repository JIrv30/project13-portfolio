import {Container, Row, Col} from 'react-bootstrap'
import homeLogo from '../assets/home-main.svg'
import Particle from './Particle'
import Type from './Type'
import myImg from '../assets/avatar.svg'
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from 'react-parallax-tilt'

export default function Home () {

  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particle />
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 style={{paddingBottom: 15}} className='heading'>
                Hi There! {' '}
                <span className='wave' role='img' aria-labelledby='wave'>
                👋🏻
                </span>
              </h1>

              <h1 className='heading-name'>
                I'm <strong className='main-name'> James Irving</strong>
              </h1>

              <div style={{padding: 50, textAlign: 'left'}}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{paddingBottom: 20}}>
              <img
              src={homeLogo}
              alt='home picture'
              className='img-fluid'
              style={{maxHeight: '450px'}}
              />
            </Col>
            <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          </Row>


            
          
        </Container>
      </Container>

      <Container fluid className='home-about-section' id='about'>
        <Container>

        <Row>
              <Col md={12}  className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Feel free to <span className="purple">connect </span>with me
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                  <a
                    href="https://github.com/JIrv30"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                  </li>
                
                  <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/james-irving-02b589283"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                
              </ul>
            </Col>
        </Row>

          <Row>
            <Col md={8} className='home-about-description'>
              <h1 style={{fontSize: '2.6em'}}>
                LET ME <span className='purple'>INTRODUCE</span> MYSLEF
              </h1>
              <p className='home-about-body'>
              I fell in love with programming and I have used my skills to enhance students education
              <br />
              <br /> I am fluent in: 
              <i>
                <b className='purple'>
                  HTML, CSS, Javascript and React
                </b>
              </i>
              <br />
              <br />
              My field of interests are building new
              <i>
                <b className='purple'>Web Technologies and Products
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}