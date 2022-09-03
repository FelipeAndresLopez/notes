import React from 'react';

import { Filters } from './components/Filters';
import NewNote from './components/NewNote';
import Notes from './components/Notes';

export const App = () => {

  return (
    <div>
      <NewNote />
      <Filters />
      <Notes />
    </div>
  )
}