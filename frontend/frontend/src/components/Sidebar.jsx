import { NavLink } from 'react-router-dom'
import { LayoutDashboard, ListTodo, History, Settings } from 'lucide-react'

function Sidebar() {
  const linkClass = ({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">DFlow</div>
      <nav className="sidebar-nav">
        <NavLink to="/" end className={linkClass}>
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/tasks" className={linkClass}>
          <ListTodo size={18} />
          <span>Tasks</span>
        </NavLink>
        <NavLink to="/history" className={linkClass}>
          <History size={18} />
          <span>History</span>
        </NavLink>
        <NavLink to="/settings" className={linkClass}>
          <Settings size={18} />
          <span>Settings</span>
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar