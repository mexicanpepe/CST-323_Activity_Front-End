import axios from "axios";
import { useState } from "react";

const NoteDetail = ({ currentNote, notes, setNotes, setActivePage, userInformation }) => {
  const [title, setTitle] = useState(currentNote.title);
  const [content, setContent] = useState(currentNote.content);

  const handleSave = async (note) => {
    try {
      const response = await axios.post(`http://Activity-backend-env.eba-ekxv5yww.us-east-1.elasticbeanstalk.com/${userInformation.userId}`, note);

      if (response.status === 200) {
        console.log("Note saved successfully:", note);
        setNotes([...notes, note]);
        setActivePage("notesList");

      } else {
        console.log("Failed to save note:", note);
      }
    } catch (error) {
      console.log("Error saving note:", error);
      console.log("Thisis the note being passed in: ", note);
    }
  };

  const handleDelete = async (noteToDelete) => {
    console.log('Deleting note:', noteToDelete);

    try {
      const response = await axios.delete(`http://Activity-backend-env.eba-ekxv5yww.us-east-1.elasticbeanstalk.com/notes/${userInformation.userId}/${noteToDelete.noteId}`);

      if (response.status === 200) {
        console.log("Note deleted successfully:", noteToDelete);
        setNotes(notes.filter(note => note.id !== noteToDelete.id));
        setActivePage('notesList');

      } else {
        console.log("Failed to delete note:", noteToDelete);
      }
    } catch (error) {
      console.log("Error deleting note:", error);
    }
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
      <button className="btn btn-success" onClick={() => handleSave({ ...currentNote, title, content})}>
        Save
      </button>
      <button className="btn btn-danger" onClick={() => handleDelete(currentNote)}>
        Delete
      </button>
    </div>
  );
};

export default NoteDetail;