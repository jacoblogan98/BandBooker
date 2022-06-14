const initialState = {
    user: "",
    authorized: false
}

const setUser = () => {
    return function (dispatch) {
        fetch('/authorized_user')
            .then(res => {
                if (res.ok) {
                    res.json().then(authUser => dispatch({ type: 'login', payload: { user: authUser, authorized: true } }))
                } else {
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const signUp = (newUser, history, setUserErrors) => {
    return function (dispatch) {
        fetch("/signup", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(newUser => {
                        console.log(newUser)
                        dispatch({ type: "signup", payload: { user: newUser, authorized: true } })
                        history.push("/")
                    })
                } else {
                    res.json().then(err => setUserErrors(err))
                }
            })
    }
}

const logIn = (user, history, setUserError) => {
    return function (dispatch) {
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        dispatch({ type: "login", payload: { user: user, authorized: true } })
                        history.push("/")
                    })
                } else {
                    res.json().then(err => setUserError(err))
                }
            })
    }
}

const logOut = () => {
    return function (dispatch) {
        fetch('/logout', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok) {
                    dispatch({ type: "logout", payload: { user: "", authorized: false } })
                } else {
                    res.json().then(err => console.log(err))
                }
            })
    }
}

const updateAccount = (user, history, setUserErrors) => {
    return function (dispatch) {
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(updatedUser => {
                        dispatch({ type: "update", payload: { user: updatedUser, authorized: true } })
                        history.push('/profile')
                    })
                } else {
                    res.json().then(err => setUserErrors(err))
                }
            })
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "login":
            return action.payload

        case "logout":
            return action.payload

        case "signup":
            return action.payload

        case "update":
            return action.payload

        default:
            return state
    }
}

export default userReducer
export { setUser, logIn, logOut, signUp, updateAccount }