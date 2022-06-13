import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function Profile() {
    const history = useHistory()
    const currUser = useSelector(state => state.user.user)

    const { name, username, email } = currUser

    return (
        <Container fluid>
            <Container className="mx-auto mt-5">
                <h1>Account Details</h1>
                <hr></hr>
                <h2>Name: {name}</h2>
                <h3>Username: {username}</h3>
                <h6>Email: {email}</h6>
                <Button className="me-2" onClick={() => history.push("/editprofile", currUser)}>
                    Edit Profile
                </Button>
                <Button className="me-2" onClick={() => history.push("/createlisting")}>
                    Post A Listing
                </Button>
                <Button className="me-2" onClick={() => history.push("/yourlistings")}>
                    Your Listings
                </Button>
            </Container>
        </Container>
    );
}

export default Profile  