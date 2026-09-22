import { NavLink } from 'react-router-dom'
import { LayoutDashboard, ListTodo, History, Settings } from 'lucide-react'

function MobileNav() {
  const linkClass = ({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`

  return (
    <nav className="mobile-nav">
      <NavLink to="/" end className={linkClass} title="Dashboard" aria-label="Dashboard">
        <LayoutDashboard size={20} />
      </NavLink>
      <NavLink to="/tasks" className={linkClass} title="Tasks" aria-label="Tasks">
        <ListTodo size={20} />
      </NavLink>
      <NavLink to="/history" className={linkClass} title="History" aria-label="History">
        <History size={20} />
      </NavLink>
      <NavLink to="/settings" className={linkClass} title="Settings" aria-label="Settings">
        <Settings size={20} />
      </NavLink>
    </nav>
  )
}

export default MobileNav