import { createStore } from "redux"
import ReactDOM  from "react-dom/client"
import { Provider } from "react-redux"
import NoteApp from "./components/SimplyNotes/NoteApp"
import noteReducer from "./reducers/noteReducer"

const store = createStore(noteReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderizar = () => {
    root.render(
        <Provider store={store}>
            <NoteApp/>
        </Provider>
    )
}

// store.subscribe(renderizar)

export default renderizar