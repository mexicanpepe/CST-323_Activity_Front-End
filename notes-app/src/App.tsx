import Login from './components/Login';
import NotesList from './components/NotesList';
import NoteDetail from './components/NoteDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App = () => {
  const [activePage, setActivePage] = useState('login');
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);


  return (
    <div>
      {activePage === 'login' && (
        <Login setActivePage={setActivePage}/>
      )}
      {activePage === 'notesList' && (
        <NotesList notes={notes} setNotes={setNotes} setCurrentNote={setCurrentNote} setActivePage={setActivePage}/>
      )}
      {activePage === 'noteDetail' && currentNote && (
        <NoteDetail currentNote={currentNote} notes={notes} setNotes={setNotes} setActivePage={setActivePage}  />
      )}
    </div>
  );
};

export default App;