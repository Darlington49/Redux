export const todoSelector = ({ todos }) => todos

export const todoSelectorFiltred = ({ todos, filter }) => {
    if (filter === null) {
        return todos
    }
    return todos.filter(todo => todo.completed === filter)
}
