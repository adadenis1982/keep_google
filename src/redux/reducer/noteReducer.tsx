import {
  NoteAction,
  TypeAddNote,
  TypeEditNote,
  TypeDeleteNote
} from '../actionCreators/notesAC';
import { StoreState } from '../types/types';
import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, DELETE_ALL_NOTE } from '../actionTypes/notesAT';

export const noteReducer = ( state: StoreState = { notes: [] }, action: NoteAction): StoreState => {
  switch (action.type) {
    case ADD_NOTE:
      const data = action as TypeAddNote;
      return { ...state, notes: [...state.notes, data.payload] };
    case EDIT_NOTE:
      const note = action as TypeEditNote;
      return { ...state, notes: state.notes.map((el) => el.id === note.payload.id ? note.payload : el) };
    case DELETE_NOTE:
      const id = action as TypeDeleteNote;
      return {...state, notes: state.notes.filter((el) => el.id !== id.payload) };
    case DELETE_ALL_NOTE:
      return {...state, notes: [] };
    default:
      return state;
  }
};
