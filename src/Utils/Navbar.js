import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
function NavBar() {
  return (
    <Container>
      <Navbar fixed="top" expand="lg" bg="info" varient="light" className='nav-container'>
        <h3 className="text-dark text-justify">Login Form</h3>
      </Navbar>
    </Container>
  )
}

export default NavBar