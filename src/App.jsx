import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import React, { useState } from "react";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);
  function addNote(newNote) {
    setnotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={1}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}

      <Note key={1} title="Note title" content="Note Description" />
      <Footer />
    </div>
  );
}

export default App;
