import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"

function Review({ review }) {
    const Arr = []

    for (let i = review.rating; i > 0; i--) {
        Arr.push("fa fa-star checked text-yellow")
    }

    for (let i = (5 - review.rating); i > 0; i--) {
        Arr.push("fa fa-star-o text-yellow")
    }

    const renderStars = Arr.map((starClass, i) => <span key={i} className={starClass}></span>)

    return (
        <Col>
            <Card
                key={review.id}
                style={{ width: '18rem' }}
                className="mb-3 mx-auto"
            >
                <Card.Header className="bg-sand">{renderStars}</Card.Header>
                <Card.Body>
                    <Card.Title>{review.user.username}</Card.Title>
                    <Card.Text>{review.comment}</Card.Text>
                    {/* <Button onClick={() => deleteReview(instanceReview.id)}> Delete Review</Button> */}

                </Card.Body>
            </Card>
        </Col>
    )
}

export default Review