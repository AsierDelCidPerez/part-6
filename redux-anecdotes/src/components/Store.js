import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import anecReducer, { actOfVoteWithId, createAnecOf } from '../reducers/anecdoteReducer'
import notificationReducer, { actOfHideNotification, actOfShowNotificationWithMsg } from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'
import thunk from 'redux-thunk'
import { createAnec, updateAnecWithId } from '../services/anecService'

export const createNew = content => {
    return async dispatch => {
        const anecdote = await createAnec({content, votes:0})
        dispatch(createAnecOf({content: anecdote.content, id: anecdote.id}))
    }
}

export const voteAnecWithIdUsingAndAnec = (id, myAnec) => {
    return async dispatch => {
        // const myAnec = anecs.find(anec => anec.id === id)
        const newAnec = {...myAnec, votes: myAnec.votes+1}
        await updateAnecWithId(id, newAnec)
        dispatch(actOfVoteWithId(id))
    }
}

export const showNotificationWithMsg = msg => {
    return async dispatch => {
        dispatch(actOfShowNotificationWithMsg(msg))
        setTimeout(() => dispatch(actOfHideNotification()), 5000)
    }
} 

const reducer = combineReducers({
    annecdotes: anecReducer,
    notification: notificationReducer,
    filter: filterReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store