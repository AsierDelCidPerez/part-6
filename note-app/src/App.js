import logo from './logo.svg';
import './App.css';
import Home from './components/containers/Home';
import Navbar from './components/presentational/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Notes from './components/containers/Notes';
import { Provider } from 'react-redux';
import store from './redux/store'
import Users, { tryLogin } from './components/containers/Users';
import { useSelector, useDispatch } from 'react-redux';
import { actOfSetUserWithUser } from './redux/reducers/userReducer';
import { setToken } from './services/noteService';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar/>
        </div>

        <Routes>
          <Route path="/users" element={<Users/>}/>
          <Route path="/notes" element={<Notes/>}/>
          <Route path="/" element={<Home/>}/>

        </Routes>

      </Router>
    </Provider>
  )
}

export default App;
