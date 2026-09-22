import { useTasks } from '../context/TaskContext'

function Dashboard() {
  const { tasks, loading } = useTasks()

  if (loading) {
    return <p>Loading...</p>
  }

  function getGreeting() {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  function getWeekRange() {
    const now = new Date()
    const dayOfWeek = now.getDay()
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek

    const monday = new Date(now)
    monday.setDate(now.getDate() + diffToMonday)
    monday.setHours(0, 0, 0, 0)

    const sunday = new Date(monday)
    sunday.setDate(monday.getDate() + 6)
    sunday.setHours(23, 59, 59, 999)

    return { monday, sunday }
  }

  const totalTasks = tasks.length
  const completedTasks = tasks.filter((t) => t.completed).length
  const pendingTasks = tasks.filter((t) => !t.completed).length

  const today = new Date().toISOString().split('T')[0]
  const todaysTasks = tasks.filter((task) => task.dueDate === today && !task.completed)

  const userName = localStorage.getItem('userName') || 'John'

  const { monday, sunday } = getWeekRange()

  const thisWeeksTasks = tasks.filter((task) => {
    if (!task.dueDate) return false
    const due = new Date(task.dueDate)
    return due >= monday && due <= sunday
  })

  const weeklyCompleted = thisWeeksTasks.filter((task) => task.completed).length
  const weeklyTotal = thisWeeksTasks.length
  const progressPercent = weeklyTotal === 0 ? 0 : Math.round((weeklyCompleted / weeklyTotal) * 100)

  return (
    <div>
      <h1>{getGreeting()}, {userName}</h1>
      <p>Here is your task overview for today.</p>

      <div className="stat-cards">
        <div className="stat-card">
          <span>Total Tasks</span>
          <strong>{totalTasks}</strong>
        </div>
        <div className="stat-card">
          <span>Completed</span>
          <strong>{completedTasks}</strong>
        </div>
        <div className="stat-card">
          <span>Pending</span>
          <strong>{pendingTasks}</strong>
        </div>
      </div>

      <h2>Today's Tasks</h2>
      <ul>
        {todaysTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <h2>Weekly Progress</h2>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <p className="progress-label">{progressPercent}% of tasks completed</p>
    </div>
  )
}

export default Dashboard