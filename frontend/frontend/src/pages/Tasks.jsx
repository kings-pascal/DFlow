import { useState } from 'react'
import { useTasks } from '../context/TaskContext'
import TaskFormModal from '../components/TaskFormModal'
import { Pencil, Trash2 } from 'lucide-react'
import ConfirmDialog from '../components/ConfirmDialog'
import EmptyState from '../components/EmptyState'


function Tasks() {
  const [taskToDelete, setTaskToDelete] = useState(null)
  const { tasks, loading, completeTask, reopenTask, deleteTask } = useTasks()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState(() => {
  return localStorage.getItem('defaultView') || 'All'
})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState(null)
  if (loading) {
    return <p>Loading...</p>
  }

  function handleToggle(task) {
    if (task.completed) {
      reopenTask(task.id)
    } else {
      completeTask(task.id)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  function matchesFilter(task) {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Today') return task.dueDate === today && !task.completed
    if (activeFilter === 'Upcoming') return task.dueDate > today && !task.completed
    if (activeFilter === 'Completed') return task.completed
    if (activeFilter === 'Overdue') return task.dueDate < today && !task.completed
    return true
  }

  const visibleTasks = tasks
    .filter(matchesFilter)
    .filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <h1>Tasks</h1>

      <div className="tasks-toolbar">
      <input
      type="text"
      placeholder="Search tasks..."
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
       />
    <button onClick={() => setIsModalOpen(true)}>+ Add Task</button>
   </div>
   {taskToDelete && (
  <ConfirmDialog
    message={`Delete "${taskToDelete.title}"?`}
    onConfirm={() => {
      deleteTask(taskToDelete.id)
      setTaskToDelete(null)
    }}
    onCancel={() => setTaskToDelete(null)}
  />
  )}
       {(isModalOpen || taskToEdit) && (
  <TaskFormModal
    taskToEdit={taskToEdit}
    onClose={() => {
      setIsModalOpen(false)
      setTaskToEdit(null)
    }}
  />
)}
      <div className="task-filters">
        {['All', 'Today', 'Upcoming', 'Completed', 'Overdue'].map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? 'filter-active' : ''}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {visibleTasks.length === 0 ? (
        <EmptyState message="No tasks match this filter." />
      ) : (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <li key={task.id} className="task-item">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task)}
              />
              <span className="task-title">{task.title}</span>
              <span className={`badge badge-${(task.priority || 'medium').toLowerCase()}`}>
                {task.priority}
              </span>
              <span>{task.dueDate}</span>
              <button
                className="icon-btn"
                title="Edit"
                aria-label="Edit task"
                onClick={() => setTaskToEdit(task)}
              >
                <Pencil size={16} />
              </button>
              <button
                className="icon-btn icon-btn-danger"
                title="Delete"
                aria-label="Delete task"
                onClick={() => setTaskToDelete(task)}
              >
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Tasks