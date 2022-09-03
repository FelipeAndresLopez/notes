import React from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../reducers/noteReducer';
import { createNewNote } from '../services/notes';

const NewNote = () => {

    const dispatch = useDispatch()

    const addNote = async (evt) => {
        evt.preventDefault()
        const { target } = evt;
        const content = target.note.value
        target.note.value = ''
        dispatch(createNote(content))
    }


    return (
        <form onSubmit={addNote}>
            <input type="text" name="note" />
            <button>add</button>
        </form>
    );
}

export default NewNote;
