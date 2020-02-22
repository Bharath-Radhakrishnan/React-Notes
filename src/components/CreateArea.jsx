import React,{useState} from "react";
import Note from "./Note";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


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
    const [clicked,updateClicked]=useState(false);
    function gen(){
      updateClicked(!clicked);
    }
  return (
    <div>
      <form className="create-note">
        {clicked&& (<input onChange={handleChange}name="title" placeholder="Title" value={inputItem.title} />)}
        <textarea onChange={handleChange} onClick={gen} name="content" value={inputItem.content} placeholder="Take a note..." rows={clicked?"3":"1"} />
        <Zoom in={clicked}>
        <Fab onClick={handleClick} ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
