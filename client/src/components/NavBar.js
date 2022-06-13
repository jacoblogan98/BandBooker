import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../features/userSlice'

function NavBar() {
    const auth = useSelector(state => state.user.authorized)
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logOut())
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {auth
                    ? <>
                        <Navbar.Brand href="/">BandBooker</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/createlisting">Create a Listing</Nav.Link>
                                <Nav.Link href="/yourlistings">Your Listings</Nav.Link>
                                <Nav.Link href="/bands">Bands</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <NavDropdown title="More" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/profile">Your Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </>
                    : <>
                        <Navbar.Brand href="/">BandBooker</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/bands">Bands</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/login">Log In / Sign Up </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </>}

            </Container>
        </Navbar>
    )
}

export default NavBar