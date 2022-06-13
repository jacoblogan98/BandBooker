import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteReview } from '../features/reviewSlice'

function Review({ review }) {
    const dispatch = useDispatch()
    const currUser = useSelector(state => state.user.user)

    const Arr = []

    for (let i = review.rating; i > 0; i--) {
        Arr.push("fa fa-star checked text-yellow")
    }

    for (let i = (5 - review.rating); i > 0; i--) {
        Arr.push("fa fa-star-o text-yellow")
    }

    const renderStars = Arr.map((starClass, i) => <span key={i} className={starClass}></span>)

    function handleDeleteReview() {
        console.log(review)
        dispatch(deleteReview(review.id))
    }

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
                    {currUser.id === review.user.id ? <Button onClick={handleDeleteReview}> Delete Review</Button> : null}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Review