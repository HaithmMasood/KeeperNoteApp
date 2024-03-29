import React, { useState } from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItems, index) => {
                return index !== id;
            })
        })
    }

    return <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItems, index) => {
            return <Note
                key={index}
                id={index}
                title={noteItems.title}
                content={noteItems.content}
                onDelete={deleteNote}
            />
        })}
        <Footer />
    </div>
}

export default App; 