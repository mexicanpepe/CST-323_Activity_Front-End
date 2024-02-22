import { useState } from "react";

const NoteDetail = ({ currentNote, notes, setNotes, setActivePage }) => {
  const [title, setTitle] = useState(currentNote.title);
  const [content, setContent] = useState(currentNote.content);

  const handleSave = (note) => {

    console.log('Saving note:', note);

    setNotes(notes.map(n => {
      n.id === note.id ? note : n;
    }));
    setActivePage('notesList');
  };

  const handleDelete = (noteToDelete) => {
    console.log('Deleting note:', noteToDelete);
    setNotes(notes.filter(note => note.id !== noteToDelete.id));
    setActivePage('notesList');
  };

  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="form-control"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="btn btn-success" onClick={() => handleSave({ ...currentNote, title, content })}>
        Save
      </button>
      <button className="btn btn-danger" onClick={() => handleDelete(currentNote)}>
        Delete
      </button>
    </div>
  );
};

export default NoteDetail;