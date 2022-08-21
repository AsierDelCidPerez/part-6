import { useDispatch } from "react-redux"
import { create } from "./services/notes"
import { createNote } from "./store"
import { connect } from "react-redux"
import { addNote } from "../../reducers/noteReducer"

const NoteForm = props => {
    const dispatch = useDispatch()
    
    const agregarNota = async event => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        // dispatch(createNote(content))
        props.createNote(content)
    }
    return (
        <form onSubmit={agregarNota}>
            <input name="note" placeholder="my note..."/>
            <button type="submit">Save</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        createNote: value => {
            dispatch(addNote(value))
        }
    }
}

export default connect(null, mapDispatchToProps)(NoteForm)