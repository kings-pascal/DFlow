import { useTasks } from '../context/TaskContext'
import EmptyState from '../components/EmptyState'

function History() {
  const { tasks, loading } = useTasks()

  if (loading) {
    return <p>Loading...</p>
  }

  const completedTasks = tasks.filter((task) => task.completed)

  return (
    <div>
      <h1>History</h1>
      <p>Completed tasks appear here.</p>

     {completedTasks.length === 0 ? (
  <EmptyState message="No completed tasks yet." />
) : (
  <ul className="task-list">
    {completedTasks.map((task) => (
     <li key={task.id} className="task-item">
            <span>{task.title}</span>
            <span className={`badge badge-${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
            <span>Due: {task.dueDate}</span>
          </li> 
    ))}
  </ul>
)}
    </div>
  )
}

export default History