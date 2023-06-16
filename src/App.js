import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import notes from "../src/notes";
import CreateArea from './Components/CreateArea'

function App() {
  const [notes, setNotes] = useState([]);


  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }



  return (
    <>
      <div>
        <Navbar />
        <CreateArea onAdd={addNote}/>

        {notes.map((noteItem, index)=> {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
}

export default App;
