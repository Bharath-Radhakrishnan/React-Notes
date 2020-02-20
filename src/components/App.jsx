import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setItem]=useState([]);
  function added(note){
    setItem((prevNotes)=>[...prevNotes,note]);
  }
  function deleteNote(id){
    console.log(id);
    setItem(prevNotes=> prevNotes.filter(function(note,index){
      return index !== id;
    }))
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={added} />
      {item.map(function(i,index){
        return <Note key={index} id={index} title={i.title} content={i.content} delete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
