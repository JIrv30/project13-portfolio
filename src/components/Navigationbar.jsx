import { useState } from "react"
import  Navbar  from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import{CgGitFork, CgFileDocument} from 'react-icons/cg'
import {ImBlog} from 'react-icons/im'
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai'
import logo from '../assets/website-developer-face.svg'



export default function Navigationbar () {
  const [expanded, setExpanded] = useState(false)
  const [navColor, setNavColor] = useState(false)

  function scrollHandler () {
    if(window.scrollY >= 20) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }

  window.addEventListener('scroll', scrollHandler)

  return (
    <>
      <Navbar
      expanded={expanded}
      fixed="top"
      expand='md'
      className={navColor ? 'sticky' : 'navbar'}
      >
        <Container>
          <Navbar.Brand href='/' className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand"/>
          </Navbar.Brand>
          <Navbar.Toggle
          aria-controls='resposive-navbar-nav'
          onClick={()=>{
            setExpanded(expanded ? false : 'expanded')
          }}>
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey='#home'>
              <Nav.Item>
                <Nav.Link 
                as={Link}
                to='/'
                onClick={()=>{
                  setExpanded(false)
                }}>
                  <AiOutlineHome style={{marginBottom: '2px'}} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/CV"
                onClick={() => setExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> CV
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item className="fork-btn">
              <Button
                href="placeholder"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}