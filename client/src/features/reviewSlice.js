const initialState = []

const addReview = (newReview) => {
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
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'reviews/create':
            return [...state, action.payload]

        default:
            return state
    }
}

export default reviewsReducer

export { addReview }