import { useDispatch } from "react-redux"

const initialState = [
    {
      content: 'reducer defines how redux store works',
      important: true,
      id: 1,
    },
    {
      content: 'state of store can contain any data',
      important: false,
      id: 2,
    },
  ]
const noteReducer = (state = initialState, action) => {
    switch(action.type){
        case 'NEW_NOTE':
            return state.concat(action.data)
        case 'TOGGLE_IMPORTANCE': {
            const id = action.data.id
            const noteToChange = state.find(n => n.id === id)
            const noteChanged = {
                ...noteToChange,
                important: !noteToChange.important
            }
            return state.map(note => note.id === id ? noteChanged : note)
        }
        default:
            return state
    }
}

const getId = () => Number(Math.random()*1000000)

export const addNote = content => {
    const [important, id] = [false, getId()]
    return {
        type: 'NEW_NOTE',
        data: {content, important, id}
    }
}

export const toggleImportanceOf = id => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        data: {id}
    }
}

export default noteReducer