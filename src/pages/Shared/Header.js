import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
              <Navbar  collapseOnSelect expand="lg" fixed="top" bg="" className="navbars" variant="dark">
    <Container>
   <h2 className="nav-title">OPUS <span className="titless">PORTFOLIO</span></h2>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  className="ms-auto">
      <Nav.Link className="navs" as={Link} to="/home"> <i class="fas fa-home"></i> Home</Nav.Link>
      <Nav.Link  className="navs" as={Link} to="/projects"> <i class="fas fa-tasks"></i> Projects</Nav.Link>
      <Nav.Link  className="navs" as={Link} to="/contact"> <i class="fas fa-address-book"></i> Contact</Nav.Link>
      <Nav.Link className="resume" href="https://drive.google.com/uc?export=download&id=1CRmLr6_OLEqIA6g4AyypQ5yaxZTGt7Uf"> <i class="fas fa-file"></i> Get Resume</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
    
  </Navbar>
        </div>
    );
};

export default Header;