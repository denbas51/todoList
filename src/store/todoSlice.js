import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: Math.random(),
        text: action.payload.text,
        completed: false,
        date: new Date().toISOString().slice(12, 19),
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      )
      toggledTodo.completed = !toggledTodo.completed
      toggledTodo.date = new Date().toISOString().slice(12, 19)
    },
    changeTodo(state, action) {
      const changedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      )
      changedTodo.text = action.payload.value
      changedTodo.date = new Date().toISOString().slice(12, 19)
    },
  },
})

export const { addTodo, removeTodo, toggleTodoComplete, changeTodo } =
  todoSlice.actions

export default todoSlice.reducer
