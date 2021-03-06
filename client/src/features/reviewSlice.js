const initialState = []

const fetchReviews = () => {
    return function (dispatch) {
        fetch('/reviews')
            .then(res => {
                if (res.ok) {
                    res.json().then(reviews => dispatch({ type: 'reviews/index', payload: reviews }))
                } else {
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const addReview = (newReview, setErrors) => {
    return function (dispatch) {
        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(newReview => dispatch({ type: 'reviews/create', payload: newReview }))
                } else {
                    res.json().then(err => setErrors(err))
                }
            })
    }
}

const deleteReview = (id) => {
    return function (dispatch) {
        fetch(`/reviews/${id}`, {
            method: "DELETE"
        })
            .then(res => {
                if (res.ok) {
                    dispatch({ type: 'reviews/delete', payload: id })
                } else {
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'reviews/index':
            return action.payload

        case 'reviews/create':
            return [...state, action.payload]

        case 'reviews/delete':
            const filteredReviews = state.filter(review => review.id !== action.payload)
            return filteredReviews

        default:
            return state
    }
}

export default reviewsReducer

export { fetchReviews, addReview, deleteReview }