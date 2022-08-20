import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import filterReducer from "../../reducers/filterReducer";
import noteReducer, { addLiteralNote, addNote } from "../../reducers/noteReducer";
import thunk from "redux-thunk";
import { create, getAll } from "./services/notes";

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer
})

export const createNote = content => {
    return async dispatch => {
        const createdNote = (await create(addNote(content).data)).data
        dispatch(addLiteralNote(createdNote))
    }
}

export const initializeNotes = () => {
    return async dispatch => {
        const initNotes = await getAll()
        dispatch({
            type: 'INITIAL_NOTES',
            data: initNotes.data
        })
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export default store