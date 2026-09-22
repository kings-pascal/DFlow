import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

function Settings() {
  const { theme, setTheme } = useTheme()
const [defaultView, setDefaultView] = useState(() => {
  return localStorage.getItem('defaultView') || 'All'
})

useEffect(() => {
  localStorage.setItem('defaultView', defaultView)
}, [defaultView])

const [userName, setUserName] = useState(() => {
  return localStorage.getItem('userName') || 'John'
})

useEffect(() => {
  localStorage.setItem('userName', userName)
}, [userName])

function handleClearPreferences() {
  localStorage.removeItem('theme')
  localStorage.removeItem('defaultView')
  setTheme('Light')
  setDefaultView('All')
}
  return (
    <div>
      <h1>Settings</h1>
      
      <div className="settings-section">
  <label>Your Name</label>
  <input
    type="text"
    value={userName}
    onChange={(e) => setUserName(e.target.value)}
  />
</div>

      <div className="settings-section">
        <label>T+heme</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>

      <div className="settings-section">
        <label>Default task view</label>
        <select value={defaultView} onChange={(e) => setDefaultView(e.target.value)}>
          <option value="All">All</option>
          <option value="Today">Today</option>
        </select>
      </div>

      <button onClick={handleClearPreferences}>Clear local UI preferences</button>
    </div>
  )
}

export default Settings