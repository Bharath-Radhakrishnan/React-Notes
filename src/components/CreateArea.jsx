import React,{useState} from "react";
import Note from "./Note";

function CreateArea(props) {

  const [inputItem, setItem]=useState({
    title:"",
    content:""
  });
  function handleChange(e){
    const {name, value}=e.target;
    setItem((prevValue)=>{
      return {
        ...prevValue,
        [name]:value
      };
    });
  }
    function handleClick(event){
      event.preventDefault();
       props.onAdd(inputItem);
      setItem({title:"",
    content:""})
    }
    // setContact(prevValue => {
    //   return {
    //     ...prevValue,
    //     [name]: value
    //   };
    // });
  return (
    <div>
      <form>
        <input onChange={handleChange}name="title" placeholder="Title" value={inputItem.title} />
        <textarea onChange={handleChange} name="content" value={inputItem.content} placeholder="Take a note..." rows="3" />
        <button onClick={handleClick} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
