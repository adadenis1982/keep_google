import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { noteReducer } from './reducer/noteReducer';
import { StoreState } from './types/types';
import { NoteAction } from './actionCreators/notesAC';

export const store = createStore<StoreState, NoteAction, any, any>(
  noteReducer,
  composeWithDevTools()
);
