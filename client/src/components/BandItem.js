import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'

function BandItem({ band }) {
    const history = useHistory()

    const { id, name } = band

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
                    <Card.Title className="text-center">{name}</Card.Title>
                    <Container className="ms-2">
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Button variant="primary" onClick={() => history.push(`/bands/${id}`, band)}>
                                    View Band
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BandItem