import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { inicializarNotes, toggleImportanceOf } from "../../reducers/noteReducer"
import { getAll } from "./services/notes"


const Note = ({note, handleClick}) => (
    <li onClick={handleClick}>
        {note.content}&nbsp;
        <strong>{note.important ? '(important)' : ''}</strong>
    </li>
)

const Notes = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    useEffect(() => {
        getAll().then(res => 
            dispatch(inicializarNotes(res.data))
        )
    }, [dispatch])
    const filtro = note => {
        switch(filter){
            case 'IMPORTANT':
                return note.important
            case 'ALL':
                return true
            case 'NONIMPORTANT':
                return !note.important
        }
    }
    // console.log(useSelector(state => state))
    return (
        <ul>
        {
            useSelector(state => state.notes).filter(filtro).map(note => (
                <Note key={note.id}
                    note={note}
                    handleClick={() => dispatch(toggleImportanceOf(note.id))}/>
            ))
        }
    </ul>
    )
}

export default Notes