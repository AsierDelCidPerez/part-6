import { createStore } from "redux"
import ReactDOM  from "react"

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderizar = () => {
    root.render(<NoteAppSimplify/>)
}

const noteReducer = (state = [], action) => {
    switch(action.type){
        case 'NEW_NOTE':
            return state.concat(action.data)
        default:
            return state
    }
}

const NoteAppSimplify = () => {

    return (
        <div>
            <ul>

            </ul>
        </div>
    )
}

export default renderizar