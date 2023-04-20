import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes"

function App(){
    return (
    <div>
        <Header />
        {Notes.map(noteEntry => (
            <Note 
                key={noteEntry.key}
                title={noteEntry.title}
                content={noteEntry.content}
            />
        ))}
        <Footer />
    </div>
    );
}

export default App;