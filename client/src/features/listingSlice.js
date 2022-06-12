const initialState = []

const fetchListings = () => {
    return function (dispatch) {
        fetch('/listings')
            .then(res => {
                if (res.ok) {
                    res.json().then(listings => dispatch({ type: 'listings/index', payload: listings }))
                } else {
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const showListing = (id) => {
    return function (dispatch) {
        fetch(`listings/${id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(listing => dispatch({ type: 'listings/show', payload: listing }))
                } else {
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const createListing = (newListing, history) => {
    return function (dispatch) {
        fetch('/listings', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newListing)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(newList => {
                        dispatch({ type: 'listings/add', payload: newList })
                        history.push('/yourlistings')
                    })
                } else {
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const editListing = (listing, history) => {
    return function (dispatch) {
        fetch(`/listings/${listing.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(listing)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(updatedListing => {
                        dispatch({ type: "listings/update", payload: updatedListing })
                        history.push('/yourlistings')
                    })
                } else {
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const deleteListing = (id) => {
    return function (dispatch) {
        fetch(`/listings/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then(res => {
                if (res.ok) {
                    dispatch({ type: "listings/delete", payload: id })
                } else {
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const listingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'listings/index':
            return action.payload

        case 'listings/show':
            return action.payload

        case 'listings/add':
            return [...state, action.payload]

        case 'listings/update':
            return [...state, action.payload]

        case 'listings/delete':
            return state.filter(listing => listing.id !== action.payload)

        default:
            return state
    }
}

export default listingReducer
export { fetchListings, showListing, createListing, editListing, deleteListing }