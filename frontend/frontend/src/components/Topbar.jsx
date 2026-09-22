import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/': 'Dashboard',
  '/tasks': 'Tasks',
  '/history': 'History',
  '/settings': 'Settings',
}

function Topbar() {
  const location = useLocation()
  const title = pageTitles[location.pathname] || 'DFlow'

  return (
    <header className="topbar">
      <h2>{title}</h2>
    </header>
  )
}

export default Topbar