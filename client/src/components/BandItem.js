import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory, useParams } from 'react-router-dom';

function BandItem({ band }) {
    const history = useHistory()
    const params = useParams()

    const { id, name } = band

    const renderHireButton = params.id
        ? <Button variant="primary" onClick={() => history.push(`/bands/${id}`, band)}>
            Hire Band
        </Button> : null
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
                                {renderHireButton}
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BandItem