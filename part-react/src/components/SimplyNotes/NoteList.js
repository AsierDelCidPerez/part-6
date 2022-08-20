import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { inicializarNotes } from "../../reducers/noteReducer"
import { connect } from "react-redux"
import { getAll } from "./services/notes"
import { initializeNotes } from "./store"

const toggleImportanceOf = id => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        data: {id}
    }
}

const Note = ({note, handleClick}) => (
    <li onClick={handleClick}>
        {note.content}&nbsp;
        <strong>{note.important ? '(important)' : ''}</strong>
    </li>
)

const Notes = props => {
    const dispatch = useDispatch()

    //console.log(useSelector(state => state))
    return (
        <ul>
        {
            props.notes.map(note => (
                <Note key={note.id}
                    note={note}
                    handleClick={() => props.toggleImportanceOf(note.id)}/>
            ))
        }
    </ul>
    )
}

const mapStateToProps = state => {
    if(state.filter === 'ALL') return {notes: state.notes}
    return { 
        notes: 
        state.filter === 'IMPORTANT'
        ? state.notes.filter(note => note.important)
        : state.notes.filter(note => !note.important)
    }
}

const mapDispatchToProps = {
    toggleImportanceOf
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)