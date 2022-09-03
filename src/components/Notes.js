import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';

const Notes = () => {
    const notes = useSelector(state => state.notes);
    const currentFilter = useSelector(state => state.filter)
    let filteredNotes = [];
    if (currentFilter === 'IMPORTANT') {
        filteredNotes = notes.filter((note) => note.importance)
    }

    if (currentFilter === 'NO_IMPORTANT') {
        filteredNotes = notes.filter((note) => !note.importance)
    }
    if (currentFilter === 'ALL') {
        filteredNotes = notes
    }

    const dispatch = useDispatch();
    const toggleImportance = (id) => {
        dispatch(toggleImportanceOf(id))
    }

    return (
        <ul>
            {
                filteredNotes.map(note => {
                    return <li key={note.id} onClick={() => toggleImportance(note.id)}>
                        {note.content}{' '}
                        <strong>{note.importance ? 'important' : 'no important'}</strong>
                    </li>
                })
            }
        </ul>
    );
}

export default Notes;
