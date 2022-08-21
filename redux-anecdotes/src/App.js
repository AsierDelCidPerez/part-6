import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecForm from './components/AnecForm'
import AnecList from './components/AnecList'
import Filter from './components/Filter'
import { ReactDOM } from 'react-dom'
import Notification from './components/Notification'
import { initializeNotesWith } from './reducers/anecdoteReducer'
import { getAll } from './services/anecService'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  
  useEffect(() => {
    getAll().then(res => dispatch(initializeNotesWith(res.data)))
  }, [dispatch])

  return (
    <div>
      <Notification/>
      <Filter/>
      <AnecList/>
      <AnecForm/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderizar = () => {
    root.render(<App/>)
}

export default renderizar