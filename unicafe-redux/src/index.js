import React from 'react';
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import reducer from './reducers/blogReducer'

const store = createStore(reducer)

const App = () => {
  //console.log(store.getState())
  const {good, ok, bad} = store.getState()
  const getMyAction = typeAction => () => store.dispatch({type: typeAction})
  return (
    <div>
      <button onClick={getMyAction('GOOD')}>good</button>
      <button onClick={getMyAction('OK')}>ok</button>
      <button onClick={getMyAction('BAD')}>bad</button>
      <button onClick={getMyAction('RESET')}>reset stats</button>
      <div>good {good}</div>
      <div>ok {ok}</div>
      <div>bad {bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
