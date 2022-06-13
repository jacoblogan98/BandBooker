import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ListingDetails() {
    const locate = useLocation()
    const history = useHistory()
    const listing = locate.state
    const currUser = useSelector(state => state.user.user)

    console.log(currUser)

    const { id, title, location, description, date, user, gig_applications } = listing

    const renderButtons = () => {
        if (user.id === currUser.id) {
            return (
                <>
                    <Button onClick={() => history.push(`/listings/${id}/applicants`)}>View Applicants</Button>
                    <Button>Edit Listing</Button>
                    <Button>Delete Listing</Button>
                </>
            )
        }
    }

    return (
        <Container className="">
            <Row className="mt-5 mb-1 d-flex align-items-around mx-auto" style={{ maxWidth: 1000 }}>
                <Col className="col-md-8 text-md-start col-12 text-center my-auto ">
                    <h1>{title}</h1>
                </Col>
                <Col className="text-md-end text-center my-auto text-secondary">
                    <h2>{location}</h2>
                </Col>
            </Row>

            {/* <Row className="d-flex justify-content-center my-3">
                <img
                    src={image_url}
                    alt="listing"
                    style={{ maxHeight: 700, maxWidth: 1000 }}
                />
            </Row> */}

            <Row className="mt-4 mx-auto" style={{ maxWidth: 1000 }}>
                <p>{description}</p>
            </Row>

            <Row className="mt-4 mx-auto" style={{ maxWidth: 1000 }}>
                <p>{date}</p>
            </Row>

            <Row className="mt-4 mx-auto" style={{ maxWidth: 1000 }}>
                <p>{user.username}</p>
            </Row>

            <Row className="mt-4 mx-auto" style={{ maxWidth: 1000 }}>
                <p>{gig_applications.length} applicants</p>
            </Row>

            <Row className="mt-4 mx-auto" style={{ maxWidth: 1000 }}>
                {renderButtons()}
            </Row>

        </Container>
    )
}

export default ListingDetails