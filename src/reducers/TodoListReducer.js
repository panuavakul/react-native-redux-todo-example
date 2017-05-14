// @flow

// Type definitions
type State = {
  todos: Array<{ id: string, completed: boolean, text: string }>
}
type Action = {
  type: string,
  payload: Object
} | {
    type: 'ADD_TODO',
    payload: {
      text: string
    }
  } | {
    type: 'TOGGLE_TODO',
    payload: {
      id: string
    }
  };

// Reducer
export default function reducer (
  state: State = { todos: [] },
  action: Action) {
  if (action.type === 'ADD_TODO') {
    const idNumber = new Date().getTime() + Math.random()
    const id = idNumber.toString()
    return { ...state, todos: [...state.todos, { id: id, completed: false, text: action.payload.text }] }
  } else if (action.type === 'TOGGLE_TODO') {
    var newTodos = Array.from(state.todos)
    // Some how flow can't figure out type of Union type in arrow function
    const selectedId: string = action.payload.id
    var selectedTodo = newTodos.find((todo) => {
      return todo.id === selectedId
    })
    selectedTodo.completed = !selectedTodo.completed

    var newState = Object.assign({}, state)
    newState = { ...newState, todos: newTodos }
    return newState
  } else {
    return state
  }
}

