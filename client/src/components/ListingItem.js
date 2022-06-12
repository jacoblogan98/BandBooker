import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from 'react-router-dom';

function ListingItem({ listing }) {
    const [buttonState, setButtonState] = useState(null)
    const history = useHistory()

    const { id, title, location, description, date, user } = listing

    function renderButton() {
        switch (buttonState) {
            case "UnAuth":
                return (
                    <Button variant="primary" >
                        Enter Raffle
                    </Button>
                );

            case "Owner":
                return (
                    <Button variant="warning" >
                        Delete
                    </Button>
                );

            case "Entered": {
                return (
                    <Button variant="secondary text-white" >
                        Entered
                    </Button>
                );
            }

            default: {
                return (
                    <Button variant="primary" onClick={() => history.push(`/listings/${id}`, listing)}>
                        View Listing
                    </Button>
                );
            }
        }
    }

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
                                {renderButton()}
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ListingItem