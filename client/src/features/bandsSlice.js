const initialState = {
    all: [],
    band: null
}

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

const showBand = (id) => {
    return function (dispatch) {
        fetch(`/bands/${id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(band => {
                        console.log(band)
                        dispatch({ type: 'bands/show', payload: band })
                    })
                } else {
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const bandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'bands/index':
            return { ...state, all: action.payload }

        case 'bands/show':
            return { ...state, band: action.payload }

        default:
            return state
    }
}

export default bandsReducer

export { fetchBands, showBand }