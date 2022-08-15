import { createStore } from "redux"
import ReactDOM  from "react-dom/client"
import { Provider } from "react-redux"
import NoteApp from "./components/SimplyNotes/NoteApp"
import { combineReducers } from "redux"
import noteReducer from "./reducers/noteReducer"
import filterReducer from "./reducers/filterReducer"
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer
})

const store = createStore(reducer, composeWithDevTools())

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