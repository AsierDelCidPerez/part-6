import { voteOf } from "../reducers/anecdoteReducer"
import { useSelector, useDispatch } from "react-redux"
import { updateAnecWithId } from "../services/anecService"
import { showNotificationWithMsg, voteAnecWithIdUsingAndAnec } from "./Store"

const AnecList = () => {
    const dispatch = useDispatch()
    const filtro = useSelector(state => state.filter)
    console.log(useSelector(state => state))
    const anecdotes = useSelector(anec => anec.annecdotes).filter(an => an.content.match(filtro))
    anecdotes.sort((a, b) => b.votes - a.votes)

    const vote = async id => {
        const anec = anecdotes.find(an => an.id === id)
        dispatch(voteAnecWithIdUsingAndAnec(id, anec))
        dispatch(showNotificationWithMsg(`You voted "${anec.content}"`))
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote => (
            <div key={anecdote.id}>
                <div>
                {anecdote.content}
                </div>
                <div>
                has {anecdote.votes}
                <button onClick={async() => await vote(anecdote.id)}>vote</button>
                </div>
            </div>
            )
            )}
        </div>
    )
}

export default AnecList