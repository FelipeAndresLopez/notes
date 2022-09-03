

export const noteReducer = (state = [], action) => {

    if (action.type === '@notes/init') {
        return action.payload
    }

    if (action.type === '@notes/created') {
        return state.concat(action.payload)
    }

    if (action.type === '@note/toggle_importance') {
        const { id } = action.payload
        return state.map(note => {
            if (note.id === id) {
                return {
                    ...note,
                    importance: !note.importance
                }
            }

            return note
        })
    }

    return state
}

const genetareId = () => Math.floor(Math.random() * 99999999) + 1

export const createNote = (content) => {

    return {
        type: '@notes/created',
        payload: {
            content,
            important: false,
            id: genetareId()
        }
    }
}


export const toggleImportanceOf = (id) => {

    return {
        type: '@note/toggle_importance',
        payload: {
            id
        }
    }
}

export const initNotes = (notes) => {
    return {
        type: '@notes/init',
        payload: notes
    }
}