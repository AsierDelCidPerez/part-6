import { useDispatch} from "react-redux"
import {createAnecOf} from '../reducers/anecdoteReducer'
import { createAnec } from "../services/anecService"
import { createNew } from "./Store"
import {connect} from 'react-redux'
import { actOfShowNotificationWithMsg } from "../reducers/notificationReducer"

const AnecForm = props => {
    const addAnec = async event => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        await props.createAnec(content)
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

const mapDispatchToProps = dispatch => {
    return {
        createAnec: async content => {
            const res = await createAnec({content, votes: 0})
            dispatch(actOfShowNotificationWithMsg(`You created: "${content}"`))
            dispatch(createAnecOf({id: res.id, content}))
        }
    }
}

export default connect(null, mapDispatchToProps)(AnecForm)