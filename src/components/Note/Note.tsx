import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import * as actions from '../../redux/actionCreators/notesAC';
import { IconButton, TextareaAutosize, Tooltip } from '@material-ui/core';
import { MdDelete } from 'react-icons/md';
import { AiFillSave } from 'react-icons/ai';

export interface Props {
  note: {
    id: string;
    title: string;
    body: string;
  };
}

function Note({ note }: Props) {
  const dispatch = useAppDispatch();

  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteBody, setNoteBody] = useState(note.body);
  
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name } = event.target;
    const { value } = event.target
    
    name === 'title' ? setNoteTitle(value) : setNoteBody(value);
  };
 
  const editNote = (id: string) => {
   
    if (noteTitle || noteBody) {
      dispatch(actions.editNote({ id, title: noteTitle, body: noteBody }));
    };
  };

  const deleteNote = (id: string) => {
    dispatch(actions.deleteNote(id));
  }

  return (
    <div className="card">
      {note.title && (
        <TextareaAutosize
          name="title"
          defaultValue={noteTitle}
          onChange={handleChange}
          className="title"
        />
      )}
      {note.body && (
        <TextareaAutosize
          name="body"
          defaultValue={noteBody}
          onChange={handleChange}
          className="body"
        />
      )}
      <br />
      <div className="options">
        <Tooltip title="Save">
          <IconButton
            aria-label="save"
            className="save"
            onClick={() => editNote(note.id)}
          >
            <AiFillSave className="icon" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            aria-label="delete"
            className="delete"
            onClick={() => deleteNote(note.id)}
          >
            <MdDelete className="icon" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default Note;
