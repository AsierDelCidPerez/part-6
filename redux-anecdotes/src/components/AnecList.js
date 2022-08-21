import { actOfVoteWithId, voteOf } from "../reducers/anecdoteReducer"
import { updateAnecWithId } from "../services/anecService"
import { connect } from 'react-redux'
import { showNotificationWithMsg, voteAnecWithIdUsingAndAnec } from "./Store"
import { actOfShowNotificationWithMsg } from "../reducers/notificationReducer"

const AnecList = props => {
    const anecdotes = props.anecs
    anecdotes.sort((a, b) => b.votes - a.votes)

    const vote = async id => {
        const anec = anecdotes.find(an => an.id === id)
        await props.voteWithIdAndAnec(id, anec)
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

const mapStateToProps = state => {
    return {
        anecs: state.annecdotes.filter(anec => anec.content.match(state.filter)),
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        voteWithIdAndAnec: async(id, anec) => {
            const myAnec = {...anec, votes: anec.votes+1}
            await updateAnecWithId(id, myAnec)
            dispatch(actOfShowNotificationWithMsg(`You voted: "${myAnec.content}"`))
            dispatch(actOfVoteWithId(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecList)