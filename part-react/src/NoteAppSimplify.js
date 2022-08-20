import ReactDOM  from "react-dom/client"
import { Provider } from "react-redux"
import NoteApp from "./components/SimplyNotes/NoteApp"
import { combineReducers } from "redux"
import noteReducer from "./reducers/noteReducer"
import store from "./components/SimplyNotes/store"
import filterReducer from "./reducers/filterReducer"

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderizar = () => {
    root.render(
        <Provider store={store}>
            <NoteApp/>
        </Provider>
    )
}

// store.subscribe(() => console.log(store.getState()))

export default renderizar