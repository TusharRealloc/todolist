const initialState = {
    isLoading: false,
    data:[]
}

export const reduder = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDITEM': return {...state,data:state.payload}
        case 'EDITITEM': return {...state,data:state.payload}
        case 'DELETEITEM': return {...state,data:state.payload}
        case 'DONEITEM': return {...state,data:state.payload}
        default: return state
    }
}