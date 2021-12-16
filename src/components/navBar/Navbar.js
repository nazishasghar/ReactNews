import React from 'react';
import {Nav,Container,Navbar,NavDropdown} from 'react-bootstrap'
function NavbarView(props) {
    return (
  <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
    <Container>
    <Navbar.Brand href="/">Indian Times</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/Headline">Headlines</Nav.Link>
        <NavDropdown title="Select Country" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        {props.loggedIn ? 
        <Nav>
          <Nav.Link href="/SignIn">SignIn</Nav.Link>
          <Nav.Link href="/SignUp">SignUp</Nav.Link></Nav> : <Nav.Link href="/SignIn">SignOut</Nav.Link>
        }
      </Nav>
    </Navbar.Collapse>
    </Container>
    {props.children}
    </Navbar>
    );
}

export default NavbarView;
