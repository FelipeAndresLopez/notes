import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Filters } from './components/Filters';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import { initNotes } from './reducers/noteReducer';
import { getAll } from './services/notes';
import { store } from './store';

export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initNotes())
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <Filters />
      <Notes />
    </div>
  )
}