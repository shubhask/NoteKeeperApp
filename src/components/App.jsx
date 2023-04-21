import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes"
import { useState } from "react";
import CreateNote from "./createNote";

function App(){
    const [notes, setNotes] = useState([]);
    function handleSubmit(toDoItem){
        setNotes((prevNotes) => {
            return [...prevNotes, toDoItem]
        })
    }
    function handleDelete(id){
        setNotes ((prevNotes) => {
            return prevNotes.filter((noteItem, index)=>
            {
                return index !== id;
            })
        })
    }
    return (
    <div>
        <Header />
        <CreateNote addItem={handleSubmit} />
        {notes.map((noteEntry, index) => (
            <Note 
                key = {index}
                id = {index}
                title={noteEntry.title}
                content={noteEntry.content}
                deleteNote = {handleDelete}
            />
        ))}
        <Footer />
    </div>
    );
}

export default App;