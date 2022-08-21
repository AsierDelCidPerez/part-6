import Note from "./Note"

const Home = ({notesToShow}) => {
    return (
        <div>
            <h1>Notes</h1>
            <ul>
            {
                notesToShow.map(note => <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)}/>)
            }
        </ul>
        </div>
    )
}

export default Home