export const filterReducer = (state = 'ALL', action) => {
    if (action.type === '@filters/set_importance') {
        return action.payload
    }
    return state
}

export const filterNotes = (filterType) => {
    return {
        type: '@filters/set_importance',
        payload: filterType
    }
}