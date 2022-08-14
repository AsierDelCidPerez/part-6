import React from "react"
import {  addNote, toggleImportanceOf } from "../../reducers/noteReducer"
import {useDispatch, useSelector} from 'react-redux'
import NoteForm from "./NoteForm"
import Notes from "../../reducers/NoteList"


const NoteApp = () => {
    const dispatch = useDispatch()

    const agregarNota = event => {
        event.preventDefault()
        dispatch(addNote(event.target.note.value))
    }

    return (
        <div>
            <NoteForm/>
            <Notes/>
        </div>
    )
}

export default NoteApp