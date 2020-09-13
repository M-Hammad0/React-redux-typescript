import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from './Actions';
import { NewNoteInput } from './NewNoteInput';
import { NotesState } from './notesReducer';

function App() {
  const notes = useSelector<NotesState,NotesState["notes"]>((state) => state.notes)
  const dispatch = useDispatch()

  const OnaddNote = (note:string) => {
    dispatch(addNote(note))
}


  return (
    <div>
      <NewNoteInput addNote={OnaddNote} />
      <hr />
      <ul>
        {notes.map((note: any,i: any) => 
          <li key={i}>{note}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
