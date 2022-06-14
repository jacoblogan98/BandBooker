import React, { useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateAccount } from '../features/userSlice';
import { v4 as uuid } from 'uuid'

function EditProfile() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: ""
    })
    const [userErrors, setUserErrors] = useState()

    const locate = useLocation()
    const history = useHistory();
    const dispatch = useDispatch()


    const currUser = locate.state

    const { id, name, username, email } = currUser

    function handleChange(e) {
        const key = e.target.name

        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    function handleEditProfile(e) {
        e.preventDefault()

        const editProfile = {
            ...formData,
            id
        }

        dispatch(updateAccount(editProfile, history, setUserErrors))
    }

    return (
        <Container fluid>
            <Container className="mx-auto mt-5">
                <Row className="text-center">
                    <h1>Edit Profile</h1>
                </Row>

                <Row className="mb-5">
                    <Form >
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={name}
                                onChange={handleChange}
                                value={formData.name}
                                name="name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={username}
                                onChange={handleChange}
                                value={formData.username}
                                name="username"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={email}
                                onChange={handleChange}
                                value={formData.email}
                                name="email"
                            />
                        </Form.Group>

                        <Row className="d-flex justify-content-center mt-4">
                            <Button variant="primary" type="submit" className="w-25" onClick={handleEditProfile}>
                                Save Changes
                            </Button>
                        </Row>

                        {userErrors ? userErrors.errors.map(error =>
                            <Row className="text-danger text-center" key={uuid()}>
                                <strong>{error}</strong>
                            </Row>
                        ) : null}
                    </Form>
                </Row>

                <Row >
                    <Button
                        className="w-25 mx-auto"
                        variant="warning"
                        onClick={() => history.push("/profile")}
                    >
                        Exit Edit Form
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default EditProfile