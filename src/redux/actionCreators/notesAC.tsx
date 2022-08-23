import * as actionTypes from '../actionTypes/notesAT';

export interface TypeNote {
  type: string;
  payload: {
    id: string;
    title: string;
    body: string;
  };
}

export interface TypeAddNote {
  type: string;
  payload: {
    id: string;
    title: string;
    body: string;
  };
}

export interface TypeEditNote {
  type: string;
  payload: {
    id: string;
    title: string;
    body: string;
  };
}

export interface TypeDeleteNote {
  type: string;
  payload: string;
}

export interface TypeDeleteAllNotes {
  type: string;
}

export const addNote = (note: {
  id: string;
  title: string;
  body: string;
}): TypeAddNote => {
  return {
    type: actionTypes.ADD_NOTE,
    payload: note,
  };
};

export const editNote = (note: {
  id: string;
  title: string;
  body: string;
}): TypeEditNote => {
  return {
    type: actionTypes.EDIT_NOTE,
    payload: note,
  };
};

export const deleteNote = (id: string): TypeDeleteNote => {
  return {
    type: actionTypes.DELETE_NOTE,
    payload: id,
  };
};

export const deleteAllNotes = (): TypeDeleteAllNotes => {
  return {
    type: actionTypes.DELETE_ALL_NOTE,
  };
};

export type NoteAction =
  | TypeNote
  | TypeAddNote
  | TypeEditNote
  | TypeDeleteNote
  | TypeDeleteAllNotes
