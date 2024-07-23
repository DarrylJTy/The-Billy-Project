import { Link } from 'gatsby'
import React from 'react'
import { Container, Nav, Navbar} from "react-bootstrap"
import "../style/navibar.css"

export default function Navibar() {
  return (
    <Navbar className="bg-white shadow-sm">
      <Container fluid className='container-block d-flex flex-column align-items-center'>
        <div className="logo-container">
          <img src="../logo-text.png" className='img-fluid custom-logo' alt="Logo" />
        </div>
        <Nav className='nav-container'>
          <CustomNavLink to="/" title="Home"/>
          <CustomNavLink to="/catalog" title="Catalog" />
          <CustomNavLink to="/branches" title="Contact" />
          <CustomNavLink to="/about" title="About" />
        </Nav>
      </Container>
    </Navbar>
  )
}

const CustomNavLink = ({ to, title }) => (
  <Link to={to} className='nav-link' activeClassName='active-link' partiallyActive={to !== '/'}>
    {title}
  </Link>
);
