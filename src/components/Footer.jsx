import {Container, Row, Col} from 'react-bootstrap'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer () {
  let date = new Date()
  let year = date.getFullYear()

  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copyright'>
          <h3>Designed and Developed by James Irving</h3>
        </Col>
        <Col md='4' className='footer-copyright'>
          <h3>Copyright &#169; {year} JI</h3>
        </Col>
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a 
              href='https://www.linkedin.com/in/james-irving-02b589283'
              style={{color: 'white'}}
              target='_blank'
              rel='noopener noreferrer'
              ><FaLinkedinIn /></a>
            </li>
            <li className='social-icons'>
              <a 
              href='https://github.com/JIrv30'
              style={{color: 'white'}}
              target='_blank'
              rel='noopener noreferrer'
              ><AiFillGithub /></a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}