import { createNewNote, getAll } from "../services/notes"


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

export const createNote = (content) => {

    return async (dispatch) => {

        const newNote = await createNewNote(content)
        dispatch({
            type: '@notes/created',
            payload: newNote
        })
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

export const initNotes = () => {
    return async (dispatch) => {
        const notes = await getAll()
        dispatch({
            type: '@notes/init',
            payload: notes
        })
    }

}