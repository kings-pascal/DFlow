import { useState } from 'react'
import { useTasks } from '../context/TaskContext'

function TaskFormModal({ onClose, taskToEdit }) {
  const { addTask, updateTask } = useTasks()

  const [title, setTitle] = useState(taskToEdit?.title || '')
  const [description, setDescription] = useState(taskToEdit?.description || '')
  const [dueDate, setDueDate] = useState(taskToEdit?.dueDate || '')
  const [priority, setPriority] = useState(taskToEdit?.priority || 'Medium')
  const [estimatedMinutes, setEstimatedMinutes] = useState(taskToEdit?.estimatedMinutes || '')

  function handleSubmit(e) {
    e.preventDefault()

    if (!title.trim()) {
      return
    }

    const taskData = {
      title,
      description,
      dueDate,
      priority,
      estimatedMinutes: Number(estimatedMinutes) || 0,
    }

    if (taskToEdit) {
      updateTask(taskToEdit.id, taskData)
    } else {
      addTask({ ...taskData, completed: false })
    }

    onClose()
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <label>Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <label>Estimated Minutes</label>
          <input
            type="number"
            value={estimatedMinutes}
            onChange={(e) => setEstimatedMinutes(e.target.value)}
          />

          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">{taskToEdit ? 'Update Task' : 'Save Task'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskFormModal