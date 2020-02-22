import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setItem]=useState([])

  fetch("/get-data")
  .then(res=>res.json())
  .then(data=>setItem(data));



  function added(note){
    setItem((prevNotes)=>[...prevNotes,note]);
    fetch('/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
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
