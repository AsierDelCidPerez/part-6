import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleImportanceOf } from "../../reducers/noteReducer"


const Note = ({note, handleClick}) => (
    <li onClick={handleClick}>
        {note.content}&nbsp;
        <strong>{note.important ? '(important)' : ''}</strong>
    </li>
)

const Notes = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
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