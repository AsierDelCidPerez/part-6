const [good, ok, bad] = [0, 0, 0]
const blogReducer = (state={good, ok, bad}, action) => {
    switch(action.type){
        case 'GOOD':
            return {
                ...state,
                good: state.good+1
            }
        case 'OK':
            return {
                ...state,
                ok: state.ok+1
            }
        case 'BAD':
            return {
                ...state,
                bad: state.bad+1
            }
        case 'RESET':
            const [good, ok, bad] = [0, 0, 0]
            return {good, ok, bad}
        default:
            return state
    }
}

export default blogReducer