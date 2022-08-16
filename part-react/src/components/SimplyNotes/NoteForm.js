import { useDispatch } from "react-redux"
import { addNote } from "../../reducers/noteReducer"
import { create } from "./services/notes"

const NoteForm = () => {
    const dispatch = useDispatch()
    
    const agregarNota = async event => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        const action = addNote(content)
        const myNote = {
            ...action,
            data: (await create(action.data)).data
        }
        console.log(myNote)
        dispatch(myNote)
    }
    return (
        <form onSubmit={agregarNota}>
            <input name="note" placeholder="my note..."/>
            <button type="submit">Save</button>
        </form>
    )
}

export default NoteForm