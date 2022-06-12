import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from 'react-router-dom';

function ListingItem({ listing }) {
    const history = useHistory()

    const { id, title } = listing

    return (
        <Col>
            <Card className="h-100">
                {/* <Card.Img
          src={image_url}
          alt="listing"
          onClick={() => handleCardClick(id, listing)}
          role="button"
          className="h-75"
        /> */}
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <Container className="ms-2">
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Button variant="primary" onClick={() => history.push(`/listings/${id}`, listing)}>
                                    View Listing
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ListingItem