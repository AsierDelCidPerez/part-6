const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



export const createAnecOf = (data) => {
  return {
    type: 'NEW_ANEC',
    data: {
      content: data.content,
      id: data.id,
      votes: 0
    }
  }
}

export const actOfVoteWithId = id => {
  return {
    type: 'VOTE',
    data: {id}
  }
}

export const initializeNotesWith = content => {
  return {
    type: 'INIT_ANECS',
    data: content
  }
}

const reducer = (state = [], action) => {
  switch(action.type){
    case 'VOTE': {
      const anns = state
      const ann = anns.find(an => an.id === action.data.id)
      const newAnn = {
        ...ann,
        votes: ann.votes+1
      }
      return anns.map(an => an.id === action.data.id ? newAnn : an)
    }
    case 'NEW_ANEC':
      return state.concat(action.data)
    case 'INIT_ANECS':
      return action.data
    default:
      return state
  }
}

export default reducer