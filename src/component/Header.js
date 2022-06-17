import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar className='py-4 shadow sticky-top' bg='light' expand='lg'>
      <Container>
        <Nav.Link to='/' as={Link}>
          <Navbar.Brand>Text To Emoji</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link to='/showSavedMessages' as={Link}>
              Show Messages
            </Nav.Link>
            <Nav.Link to='/addEmoji' as={Link}>
              Add Emoji
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
