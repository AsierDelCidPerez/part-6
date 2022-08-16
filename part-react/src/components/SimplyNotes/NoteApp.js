import React from "react"
import {  addNote, toggleImportanceOf } from "../../reducers/noteReducer"
import {useDispatch, useSelector} from 'react-redux'
import NoteForm from "./NoteForm"
import Notes from "./NoteList"
import Filter from "./Filter"


const NoteApp = () => {
    const dispatch = useDispatch()
    
    return (
        <div>
            <NoteForm/>
            <Filter/>
            <Notes/>
        </div>
    )
}

export default NoteApp