import { useState } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

export type Todo = {
  id: number
  text: string
  description: string
  completed: boolean
}

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editData, setEditData] = useState<Todo | undefined>(undefined)

  const handleAddTodo = (text: string, description: string) => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text: text.trim(),
        description: description.trim(),
        completed: false,
      },
    ])
    setShowForm(false)
  }

  const handleToggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const editTodo = (id: number) => {
    setShowForm(true)
    const editData = todos?.find(todo => todo.id === id)
    setEditData(editData)
}

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex w-full justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Todo App</h1>
            <p className="text-sm text-gray-500">{today}</p>
          </div>
          <button
            onClick={() => setShowForm(prev => !prev)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {showForm ? 'Close' : 'Add Todo'}
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="mb-6 bg-white p-4 rounded shadow">
            <TodoForm onAddTodo={handleAddTodo} editData={editData} />
          </div>
        )}

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={handleToggleTodo}
              deleteTodo={handleDeleteTodo}
              editTodo={editTodo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
