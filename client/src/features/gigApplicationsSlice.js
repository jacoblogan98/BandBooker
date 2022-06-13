const initialState = []

const fetchGigApplications = () => {
    return function (dispatch) {
        fetch('/gig_applications')
            .then(res => {
                if (res.ok) {
                    res.json().then(applications => dispatch({ type: 'gigapplications/index', payload: applications }))
                } else {
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const gigApplicationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'gigapplications/index':
            return action.payload

        default:
            return state
    }
}

export default gigApplicationsReducer

export { fetchGigApplications }