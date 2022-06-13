import React, { useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../features/reviewSlice';
import { v4 as uuid } from 'uuid'

function AddReviewForm({ bandId }) {
    const [formData, setFormData] = useState({
        comment: "",
        rating: ""
    })
    const [errors, setErrors] = useState()
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)

    const handleChange = (e) => {
        const key = e.target.name
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const { comment, rating } = formData

        const newReview = {
            rating,
            comment,
            user_id: user.user.id,
            band_id: bandId
        }

        dispatch(addReview(newReview, setErrors))
        setFormData({
            comment: "",
            rating: ""
        })
    }

    return (
        <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: 1000 }}>
            <Form.Label>Rating</Form.Label>
            <Form.Select onChange={handleChange} value={formData.rating} type="number" name="rating">
                <option>Choose a rating</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Select>

            <Form.Label>Review</Form.Label>
            <Form.Control onChange={handleChange} value={formData.comment} type="text" name="comment" placeholder="Write your comments here..." />

            <Row className='d-flex justify-content-center'>
                <Button type="submit" className='w-25 mt-3 mb-2'>Submit</Button>
            </Row>

            {errors ? errors.errors.map(err =>
                <Row className="text-danger text-center mb-2" key={uuid()} >
                    <strong>{err}</strong>
                </Row>
            ) : null
            }
        </Form >
    )
}

export default AddReviewForm    