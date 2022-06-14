import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useDispatch } from 'react-redux';
import { logIn } from '../features/userSlice';
import { useSelector } from 'react-redux';

function Login() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [userError, setUserError] = useState()

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    console.log(userError)

    function handleChange(e) {
        const key = e.target.name

        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    function handleLogin(e) {
        e.preventDefault()

        dispatch(logIn(formData, history, setUserError))
    }

    return (
        <Container fluid>
            <Container className="mx-auto mt-5">
                <Row className="text-center">
                    <h2>Welcome Back</h2>
                    <h4>BandBooker</h4>
                    <h1>Login</h1>
                </Row>

                <Row className="mb-5">
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                name="username"
                                type="text"
                                placeholder="Username"
                                onChange={handleChange}
                                value={formData.username}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </Form.Group>
                        <Row className="d-flex justify-content-center mb-2">
                            <Button variant="primary" type="submit" className="w-25">
                                Login
                            </Button>
                        </Row>

                        {userError ? (
                            <Row className="text-danger text-center">
                                <strong>{userError.error}</strong>
                            </Row>
                        ) : null}
                    </Form>
                </Row>

                <Row className="text-center">
                    <h4>Don't have an account?</h4>
                </Row>

                <Row>
                    <Button
                        onClick={() => history.push("/signup")}
                        className="w-25 mx-auto"
                    >
                        Sign Up
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Login