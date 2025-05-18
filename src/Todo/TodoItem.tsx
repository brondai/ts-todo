import type { Todo } from './Todo'

type Props = {
  todo: Todo
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
  editTodo: (id: number) => void
}

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }: Props) {
  // const [isEditing, setIsEditing] = useState(false)
  // const [editText, setEditText] = useState(todo.text)
  // const [editDesc, setEditDesc] = useState(todo.description || '')

  // const handleSave = () => {
  //   if (editText.trim()) {
  //     editTodo(todo.id, editText.trim(), editDesc.trim())
  //     setIsEditing(false)
  //   }
  // }

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition h-56 flex flex-col justify-between">
      
        <>
          {/* Title + Toggle */}
          <div className="flex justify-between items-start mb-2">
            <h3
              className={`text-lg font-semibold ${
                todo.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              {todo.text}
            </h3>
            <button
              onClick={() => toggleTodo(todo.id)}
              className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition"
            >
              {todo.completed ? 'Undo' : 'Mark Done'}
            </button>
          </div>

          {/* Description */}
          <div className="text-sm text-gray-600 overflow-y-auto max-h-24 pr-1 mb-2">
            {todo.description ? (
              <p className={todo.completed ? 'line-through text-gray-300' : ''}>
                {todo.description}
              </p>
            ) : (
              <p className="italic text-gray-400">No description</p>
            )}
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => editTodo(todo.id)}
              className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm"
            >
              Delete
            </button>
          </div>
        </>
    </div>
  )
}
