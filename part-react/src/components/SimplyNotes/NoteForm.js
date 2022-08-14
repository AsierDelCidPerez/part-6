import { useDispatch } from "react-redux"
import { addNote } from "../../reducers/noteReducer"

const NoteForm = () => {
    const dispatch = useDispatch()
    
    const agregarNota = event => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        dispatch(addNote(content))
    }
    return (
        <form onSubmit={agregarNota}>
            <input name="note" placeholder="my note..."/>
            <button type="submit">Save</button>
        </form>
    )
}

export default NoteForm