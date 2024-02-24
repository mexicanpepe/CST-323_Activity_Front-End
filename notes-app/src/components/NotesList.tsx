const NotesList = ({ notes, setNotes, setCurrentNote, setActivePage }) => {

  const addNote = () => {
    const newNote = { title: '', content: '', id: Date.now() };
    setCurrentNote(newNote);
    setActivePage('noteDetail');
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  const noteSelect = (note) => {
    setCurrentNote(note);
    setActivePage('noteDetail');
  };



  return (
    <div className="container">
      <h1>Your Notes</h1>
      <ul className="list-group">
        {notes.map((note, index) => (
          <li key={index} className="list-group-item" onClick={() => noteSelect(note)}>
            {note.title}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={addNote}>
        Add New Note
      </button>
    </div>
  );
};

export default NotesList;