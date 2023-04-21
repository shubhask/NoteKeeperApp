import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateNote(props){
    const [toDoItem, setToDoItem] = useState({
        title : "",
        content : ""
    })

    const [clicked, setClicked] = useState(false);
    function handleOnChange(event){
        const {name, value} = event.target;
        setToDoItem((prevValue) => {
            if(name === "title"){
                return {
                    title : value,
                    content: prevValue.content
                }
            }else if(name === "content"){
                return {
                    title: prevValue.title,
                    content: value
                }
            }
        });

        //Shorcut for above code
        // setToDoItem((prevValue) => {
        //     return (
        //         {
        //             ...prevValue,
        //             [name]: value
        //         }
        //     )
           
        // })

        event.preventDefault();
    }
    function handleAddItem(event){
        props.addItem(toDoItem);
        setToDoItem({
            title : "",
            content : ""
        })
        event.preventDefault();
    }

    function handleOnclick(event){
        setClicked(true);
    }
    return (
        <form class = "create-note" onSubmit={handleAddItem}>
            <div>
                {clicked && <input  name="title" onChange={handleOnChange} placeholder="Title" value={toDoItem.title} />}
                <textarea name="content" rows={clicked ? 3 : 1} onClick={handleOnclick} onChange={handleOnChange} placeholder="Take a note..." value={toDoItem.content} />
                <Zoom in={clicked}>
                    <Fab type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </div>
        </form>
    );
}

export default CreateNote;