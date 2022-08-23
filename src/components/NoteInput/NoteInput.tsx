import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import * as actions from '../../redux/actionCreators/notesAC';
import { v4 as uuidv4 } from 'uuid';
import { ClickAwayListener, TextareaAutosize, Button } from '@material-ui/core';

import '../../styles/style.css';

const NoteInput = () => {
  const dispatch = useAppDispatch();

  const [newNote, setNewNote] = useState({ title: '', body: '' });
  const [isTitle, setIsTitle] = useState(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let name = event.target.name;
    let value = event.target.value;
    setNewNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleAddNote = (event: React.MouseEvent<HTMLButtonElement | Document>) => {
    event.preventDefault();

    if (!newNote.title && !newNote.body) {
      setIsTitle(false);
    } else {
      dispatch(
        actions.addNote({
          id: uuidv4(),
          title: newNote.title,
          body: newNote.body,
        })
      );
      setNewNote({ title: '', body: '' });
      setIsTitle(false);
    }
  };

  return (
    <section className="input-section">
      <ClickAwayListener onClickAway={handleAddNote}>
        <form className="input-container">
          {isTitle && (
            <input
              name="title"
              type="text"
              placeholder="Введите заголовок"
              value={newNote.title}
              onChange={handleChange}
            />
          )}
          <TextareaAutosize
            aria-label="empty textarea"
            name="body"
            placeholder="Заметка..."
            value={newNote.body}
            onClick={() => setIsTitle(true)}
            onChange={handleChange}
          />
          {isTitle && <Button onClick={handleAddNote}>Добавить</Button>}
        </form>
      </ClickAwayListener>
    </section>
  );
};

export default NoteInput;
