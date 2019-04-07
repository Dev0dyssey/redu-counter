export const addButton = () => {
    return {
        type: 'ADD_VALUE',
        payload: 1
    }
}

export const subtractButton = () => {
    return {
        type: 'SUBTRACT_VALUE',
        payload: 1
    }
}

export const addDelayButton = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addButton())
        }, 1000)
    }
}

export const subtractDelayButton = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(subtractButton())
        }, 1000)
    }
}