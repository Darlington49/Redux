import { connect } from "react-redux"
import { setFilterAction } from "../../store/filter/filterActions"
import { filterSelector } from "../../store/filter/FilterSelectors"

export function TodoFilter({ value, onChange }) {
    return <div>
        <button disabled={value === null} onClick={() => onChange(null)}>Aucun Filtre</button>
        <button disabled={value === true} onClick={() => onChange(true)}>Complété</button>
        <button disabled={value === false} onClick={() => onChange(false)}>A Faire</button>
    </div>
}

export const TodoFilterStore = connect(
    state => ({ value: filterSelector(state) }),
    dispatch => ({
        onChange: (value) => dispatch(setFilterAction(value))
    })
)(TodoFilter)