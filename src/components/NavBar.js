import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" width="50" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link href="#">
              <i className="fas fa-home"></i>Home
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fas fa-sign-in-alt"></i>Sign In
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fas fa-user-plus"></i>Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
