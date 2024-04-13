import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../slices/todoSlice"

function AddTodo() {
  const dispatch = useDispatch()
  const [text, setText] = useState("")

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo({ id: Date.now(), text }))
      setText("")
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo()
    }
  }

  return (
    <div className="add-todo flex justify-between">
      <input
        type="text"
        placeholder="todo here"
        className="px-4 py-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress} // Call handleKeyPress when a key is pressed
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Add
      </button>
    </div>
  )
}

export default AddTodo
