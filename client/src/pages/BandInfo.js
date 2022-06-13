import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from 'react-router-dom';
import AddReviewForm from '../components/AddReviewForm';
import Review from '../components/Review';

function BandInfo() {
    const locate = useLocation()

    const band = locate.state

    const { name, genre, description, hourly_rate, reviews, location } = band

    const renderReviews = reviews.map((review) => <Review key={review.id} review={review} />)

    return (
        <Container>
            <Row className="mt-5 mb-1 d-flex align-items-around mx-auto" style={{ maxWidth: 1000 }}>
                <Col className="col-md-8 text-md-start col-12 text-center my-auto ">
                    <h1>{name}</h1>
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
                <p>{genre}</p>
            </Row>

            <Row className="mt-4 mx-auto" style={{ maxWidth: 1000 }}>
                <p>{hourly_rate}</p>
            </Row>

            <Row className="mt-4 mx-auto" style={{ maxWidth: 1000 }}>
                <p>{reviews.length} reviews</p>
            </Row>

            <Container className="mb-4 ">
                <h2 className="text-center">Reviews</h2>
                <Row className="justify-content-around">
                    {renderReviews}
                </Row>
                <h2 className="text-center">Leave a Review!</h2>
                <AddReviewForm bandId={band.id} />
            </Container>

        </Container>
    )
}

export default BandInfo      