import React, { useState } from 'react'
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from 'reactstrap'

const links = ['Home', 'Tentang Kami', 'Rental Mobil', 'Kontak Kami']

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState()
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar expand={'sm'} color={'light'} fixed={'top'}>
        <Container fluid className='d-flex justify-content-between'>
          <Container className='ms-5 ps-5 pt-1'>
            <NavbarBrand href="/">RENTCARIN</NavbarBrand>
          </Container>
          <Container>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                {links.map((x) => (
                  <NavItem>
                    <NavLink href="/components/">{x}</NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Collapse>
          </Container>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar