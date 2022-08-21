import { useDispatch } from "react-redux"
import { setFilterWith } from "../reducers/filterReducer"

const Filter = () => {
    const dispatch = useDispatch()
    const filtrar = event => {
        const txt = event.target.value
        dispatch(setFilterWith(txt))
    }

    return (
        <div>
            filter <input type="text" onChange={filtrar}/>
        </div>
    )
}

export default Filter