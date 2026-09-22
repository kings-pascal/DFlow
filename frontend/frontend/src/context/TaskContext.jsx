import { createContext, useContext, useState, useEffect } from 'react'
import { getTasks, createTask, updateTaskOnServer, deleteTaskOnServer } from '../services/taskService'


const TaskContext = createContext(null)

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTasks()
      .then((data) => {
        setTasks(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

 function addTask(newTask) {
  createTask(newTask).then((savedTask) => {
    setTasks((prev) => [...prev, savedTask])
  })
}
function updateTask(id, updates) {
  const existingTask = tasks.find((task) => task.id === id)
  const fullUpdatedTask = { ...existingTask, ...updates }

  updateTaskOnServer(id, fullUpdatedTask).then((savedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? savedTask : task))
    )
  })
}
  

function deleteTask(id) {
  deleteTaskOnServer(id).then(() => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  })
}

  function completeTask(id) {
    updateTask(id, { completed: true })
  }

  function reopenTask(id) {
    updateTask(id, { completed: false })
  }

  const value = {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    completeTask,
    reopenTask,
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export function useTasks() {
  return useContext(TaskContext)
}