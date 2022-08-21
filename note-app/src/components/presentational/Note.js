
const Note = ({note, changeImportant}) => {

    const toggleImportance = event => {
        changeImportant(note.id)
    }

    return (
        <li>
            <span>{note.content}</span>
            &nbsp;
            <button onClick={toggleImportance}>{note.important ? 'MAKE NOT IMPORTANT' : 'MAKE IMPORTANT'}</button>
        </li>
    )
}

export default Note