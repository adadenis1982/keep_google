import { SetStateAction, useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';
import Navbar from '../Navbar/Navbar';
import NoteInput from '../NoteInput/NoteInput';
import NoteList from '../NoteList/NoteList';

import '../../styles/style.css'

const App = () => {
  const notesAll = useAppSelector((state) => state.notes);

  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setNotes(notesAll)
  }, [notesAll]);

  const setSearch = (searchTerm: SetStateAction<string>) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className='app'>
      <Navbar
        setSearch={setSearch}
      />
      <NoteInput />
      <NoteList
        notes={notes}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default App;
