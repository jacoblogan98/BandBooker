import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../features/userSlice'

function NavBar() {
    const auth = useSelector(state => state.user.authorized)
    const dispatch = useDispatch()
    const history = useHistory()

    function handleLogout() {
        dispatch(logOut())
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {auth
                    ? <>
                        <Navbar.Brand onClick={() => history.push("/")}>BandBooker</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => history.push("/createlisting")}>Create a Listing</Nav.Link>
                                <Nav.Link onClick={() => history.push("/yourlistings")}>Your Listings</Nav.Link>
                                <Nav.Link onClick={() => history.push("/bands")}>Bands</Nav.Link>
                                <Nav.Link onClick={() => history.push("/about")}>About</Nav.Link>
                                <NavDropdown title="More" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => history.push("/profile")}>Your Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </>
                    : <>
                        <Navbar.Brand onClick={() => history.push("/")}>BandBooker</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => history.push("/bands")}>Bands</Nav.Link>
                                <Nav.Link onClick={() => history.push("/about")}>About</Nav.Link>
                                <Nav.Link onClick={() => history.push("/login")}>Log In / Sign Up </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </>}

            </Container>
        </Navbar>
    )
}

export default NavBar