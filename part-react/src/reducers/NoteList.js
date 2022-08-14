import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleImportanceOf } from "./noteReducer"


const Note = ({note, handleClick}) => (
    <li onClick={handleClick}>
        {note.content}&nbsp;
        <strong>{note.important ? '(important)' : ''}</strong>
    </li>
)

const Notes = () => {
    const dispatch = useDispatch()

    return (
        <ul>
        {
            useSelector(note => note).map(note => (
                <Note key={note.id}
                    note={note}
                    handleClick={() => dispatch(toggleImportanceOf(note.id))}/>
            ))
        }
    </ul>
    )
}

export default Notes