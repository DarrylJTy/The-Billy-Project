import { Link } from 'gatsby'
import React from 'react'
import { Container, Nav, Navbar} from "react-bootstrap"
import "../style/navibar.css"

export default function Navibar() {
  return (
    <Navbar className="bg-white shadow-sm">
      <Container fluid className='container-block'>
          <img src="../mrbillylogorevamp.png" className='img-fluid' />
          <Nav className='me-auto'>
            <Link to="/" className='nav-link'>home</Link>
            <Link to="/tiles" className='nav-link'>tiles</Link>
            <Link to="/bathroom" className='nav-link'>bathroom</Link>
            <Link to="/doors" className='nav-link'>doors</Link>
          </Nav>
          <Link to="/branches" className='nav-link'>branches</Link>
          <Link to="/about" className='nav-link'>about us</Link>
      </Container>
    </Navbar>
  )
}
