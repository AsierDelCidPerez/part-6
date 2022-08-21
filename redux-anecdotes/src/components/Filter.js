import { useDispatch } from "react-redux"
import { setFilterWith } from "../reducers/filterReducer"
import {connect} from 'react-redux'

const Filter = props => {
    // const dispatch = useDispatch()
    const filtrar = event => {
        const txt = event.target.value
        props.setFilterWith(txt)
    }

    return (
        <div>
            filter <input type="text" onChange={filtrar}/>
        </div>
    )
}

export default connect(null, {setFilterWith})(Filter)