import { useDispatch } from "react-redux"
import { createFilterOf } from "../../reducers/filterReducer"

const Filter = () => {

    const dispatch = useDispatch()

    const filterChange = filter => {
        dispatch(createFilterOf(filter))
    }

    return (
        <div>
            all <input type="radio" name="filter" onChange={() => filterChange('ALL')}/>&nbsp;&nbsp;
            important <input type="radio" name="filter" onChange={() => filterChange('IMPORTANT')}/>&nbsp;&nbsp;
            nonimportant <input type="radio" name="filter" onChange={() => filterChange('NONIMPORTANT')}/>
        </div>
    )
}

export default Filter