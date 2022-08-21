import { useDispatch} from "react-redux"
import {createAnecOf} from '../reducers/anecdoteReducer'
import { createAnec } from "../services/anecService"
import { createNew } from "./Store"

const AnecForm = () => {
    const dispatch = useDispatch()
    const addAnec = async event => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        dispatch(createNew(content))
    }

    return ( 
        <div>
        <h2>create new</h2>
        <form onSubmit={addAnec}>
            <div><input name="anec"/></div>
            <button>create</button>
        </form>
      </div>
    )
}

export default AnecForm