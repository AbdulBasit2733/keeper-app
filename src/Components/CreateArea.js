import React, { useState } from 'react'

function CreateArea(props) {

    const [note, setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(event){
        const{name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }

  return (
    <div className='createArea'>
        <form>
            <input name='title' onChange={handleChange} value={note.title}  placeholder='Title'/>
            <textarea name="content" onChange={handleChange} id="" value={note.content} rows="3" placeholder='Take a note...'></textarea>
            <button className='submit' onClick={submitNote}>Add</button>
        </form>
    </div>
  )
}

export default CreateArea