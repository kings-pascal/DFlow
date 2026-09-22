import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TaskProvider } from './context/TaskContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import App from './App.jsx'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TaskProvider>
        <ThemeProvider>
           <App />
        </ThemeProvider>
      </TaskProvider>
    </BrowserRouter>
  </StrictMode>,
)