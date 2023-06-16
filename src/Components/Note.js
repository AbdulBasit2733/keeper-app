import React from 'react'
import '../notes'

function Note(props) {

  function handleClick() {
    props.onDelete(props.id)
  }
  return (
    <note>
    <div>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button onClick={handleClick}>DELETE</button>
    </div>
    </note>
  )
}

export default Note