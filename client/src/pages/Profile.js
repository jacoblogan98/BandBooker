import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useHistory } from "react-router-dom";

function Profile() {
    const history = useHistory()

    return (
        <Container fluid>
            <Container className="mx-auto mt-5">
                <h1>Account Details</h1>
                <hr></hr>
                <h2>Name: </h2>
                <h3>Username: </h3>
                <h6>Email: </h6>
                <Button className="me-2" onClick={() => history.push("/editprofile")}>
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