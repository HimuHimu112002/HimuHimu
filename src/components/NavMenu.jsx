import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
const NavMenu = () => {
  return (
    <BrowserRouter>
      <Navbar id='home' expand="lg" className="bg-body-tertiary py-3 shadow sticky-top">
        <Container>
          <Navbar.Brand className='text-center' href="#">Aktarujjaman</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* <HashLink smooth to="/"><Nav className='ms-3'>Home</Nav></HashLink> */}
              
              {/* <Link to='#banner'><Nav.Link className='ms-3'>Home</Nav.Link></Link> */}
              <Link to="#skill"><Nav.Link className='ms-3' href="#action2">Skill</Nav.Link></Link>
              <Link to="#experience"> <Nav.Link className='ms-3' href="#action3">Experience</Nav.Link></Link>
              <Link to="#project"><Nav.Link className='ms-3' href="#action4">Project</Nav.Link></Link>
              {/* <Nav.Link className='ms-3' href="#action5">Education</Nav.Link> */}
              <Link to="#contact"><Nav.Link className='ms-3' href="#action6">Contact</Nav.Link></Link>

            </Nav>
            <a href='https://github.com/HimuHimu112002'><Button className='nav__github--button ms-4'>GIthub profile</Button></a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  )
}

export default NavMenu