import { useState } from 'react'
import type { Todo } from './Todo'

type Props = {
  onAddTodo: (text: string, description: string) => void
  editData?: Todo
}

export default function TodoForm({ onAddTodo, editData }: Props) {
  const [text, setText] = useState(editData?.text ?? '')
  const [description, setDescription] = useState(editData?.description ?? '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTodo(text, description)
      setText('')
      setDescription('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full border rounded px-3 py-2"
        placeholder="Todo title"
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full border rounded px-3 py-2"
        placeholder="Description (optional)"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Save
      </button>
    </form>
  )
}
