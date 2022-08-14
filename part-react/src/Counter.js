import React from 'react'
import ReactDOM from "react-dom/client"
import {createStore} from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
    root.render(<Counter/>)
    
}

const counterReducer = (state=0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        case 'ZERO':
            return 0
        default:
            return state
    }
}

const store = createStore(counterReducer)

const Counter = ({renderizar}) => {

    return (
        <div>
            <h3>{store.getState()}</h3>
            <div>
                <button onClick={() => store.dispatch({type: 'INCREMENT'})}>+1</button>
                <button onClick={() => store.dispatch({type: 'DECREMENT'})}>-1</button>
                <button onClick={() => store.dispatch({type: 'ZERO'})}>0</button>
            </div>
        </div>
    )
}

store.subscribe(renderApp)


export default renderApp