const initialState = []

const fetchBands = () => {
    return function (dispatch) {
        fetch('/bands')
            .then(res => {
                if (res.ok) {
                    res.json().then(bands => dispatch({ type: 'bands/index', payload: bands }))
                } else {
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const bandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'bands/index':
            return action.payload
        default:
            return state
    }
}

export default bandsReducer

export { fetchBands }