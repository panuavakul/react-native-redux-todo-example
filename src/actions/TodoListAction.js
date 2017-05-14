// @flow

// Type definitions
type AddTodoAction = {
  type: 'ADD_TODO',
  payload: {
    text: string
  }
}
type DeleteTodoAction = {
  type: 'DELETE_TODO',
  payload: {
    id: string
  }
}
type ToggleTodoAction = {
  type: 'TOGGLE_TODO',
  payload: {
    id: string
  }
}

export function addTodo (text: string): AddTodoAction {
  return {
    type: 'ADD_TODO',
    payload: {text: text}
  }
}

export function deleteTodo (id: string): DeleteTodoAction {
  return {
    type: 'DELETE_TODO',
    payload: {id: id}
  }
}

export function toggleTodo (id: string): ToggleTodoAction {
  return {
    type: 'TOGGLE_TODO',
    payload: {id: id}
  }
}
