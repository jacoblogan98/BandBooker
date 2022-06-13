import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../features/reviewSlice';

function AddReviewForm({ bandId }) {
    const [formData, setFormData] = useState({
        comment: "",
        rating: ""
    })

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

        console.log(newReview)

        dispatch(addReview(newReview))

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={handleChange} type="number" min="1" max="5" name="rating" />
            <input onChange={handleChange} type="text" name="comment" placeholder="Write your comments here..." />
            <input type="submit" />
        </form>
    )
}

export default AddReviewForm    