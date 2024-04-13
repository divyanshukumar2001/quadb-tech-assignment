import { createSlice } from "@reduxjs/toolkit"

// Load todos from local storage when the app initializes
const storedTodos = JSON.parse(localStorage.getItem("todos")) || []

// Initial state of todos
const initialState = {
  todos: storedTodos,
}

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: true } : todo
      )
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
  },
})

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
