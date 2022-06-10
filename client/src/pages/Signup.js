import React from 'react'
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

function Signup() {

    const history = useHistory()

    return (
        <Container fluid>
            <Container className="mx-auto mt-5">
                <Row className="text-center">
                    <h2>Welcome to BandBooker!</h2>
                    <h4>A site for booking live music!</h4>
                    <h1>Sign Up</h1>
                </Row>

                <Row className="mb-5">
                    <Form >
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name..."
                                // onChange={handleChange}
                                // value={usernameInput}
                                name="name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username..."
                                // onChange={handleChange}
                                // value={signUpData.username}
                                name="username"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                // onChange={handleChange}
                                // value={signUpData.email}
                                name="email"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password..."
                                // onChange={handleChange}
                                // value={signUpData.password}
                                name="password"
                            />
                        </Form.Group>

                        <Row className="d-flex justify-content-center mb-2">
                            <Button variant="primary" type="submit" className="w-25">
                                Create Account
                            </Button>
                        </Row>

                        {/* {error ? (
                  <Row className="text-danger text-center">
                    <strong>{error}</strong>
                  </Row>
                ) : null} */}
                    </Form>
                </Row>

                <Row className="text-center">
                    <h4>Already have an account?</h4>
                </Row>

                <Row>
                    <Button
                        onClick={() => history.push("/login")}
                        className="w-25 mx-auto"
                    >
                        Login
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Signup