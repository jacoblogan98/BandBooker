import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from 'react-router-dom';

function ListingDetails() {
    const locate = useLocation()
    const listing = locate.state

    const { id, title, location, description, date, user } = listing

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

        </Container>
    )
}

export default ListingDetails