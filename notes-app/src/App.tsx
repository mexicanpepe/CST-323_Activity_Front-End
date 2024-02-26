import Login from './components/Login';
import NotesList from './components/NotesList';
import NoteDetail from './components/NoteDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App = () => {
  const [activePage, setActivePage] = useState('login');
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [userInformation, setUserInformation] = useState({username: '', email: '', password: ''});


  return (
    <div>
      {activePage === 'login' && (
        <Login setActivePage={setActivePage} userInformation={userInformation}setUserInformation={setUserInformation} setNotes={setNotes}/>
      )}
      {activePage === 'notesList' && (
        <NotesList notes={notes} setNotes={setNotes} setCurrentNote={setCurrentNote} setActivePage={setActivePage}/>
      )}
      {activePage === 'noteDetail' && currentNote && (
        <NoteDetail currentNote={currentNote} notes={notes} setNotes={setNotes} setActivePage={setActivePage} userInformation={userInformation} />
      )}
    </div>
  );
};

export default App;