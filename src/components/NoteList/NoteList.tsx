import { v4 as uuidv4 } from 'uuid';
import bulbIcon from '../../assets/bulb.svg';
import Note from '../Note/Note'

import '../../styles/style.css'

export interface Props {
  notes: Array<{
    id: string;
    title: string;
    body: string;
  }>;
  searchTerm: string;
}

const NoteList = ({ notes, searchTerm }: Props) => {
  
  return (
    <>
      {notes?.length ? (
        <div className='note-container'>
          {notes
            .filter((value) => {
              if (searchTerm === '' || searchTerm.length < 2) {
                return value;
              } else {
                return value.title.toLowerCase().includes(searchTerm.toLowerCase())
                || value.body.toLowerCase().includes(searchTerm.toLowerCase());
              }
            })
            .map(value => <Note key={uuidv4()} note={value} />)}
        </div>
      ) : (
        <div className='blank'>
          <div>
            <img src={bulbIcon} alt='no note' />
            <h4>Notes you add appear here</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteList;
