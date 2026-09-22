# DFlow — Task Management Dashboard

A full-stack task management app built as a portfolio project, with a React frontend and a Spring Boot backend.

## Tech Stack

**Frontend:** React, Vite, JavaScript, Plain CSS, React Router, Lucide Icons, PWA (installable)
**Backend:** Java, Spring Boot, MySQL

## Features

- Dashboard with task stats, today's tasks, and weekly progress
- Full task CRUD (create, edit, delete, mark complete)
- Search and filter tasks (All, Today, Upcoming, Completed, Overdue)
- Task history view
- Dark mode
- Persisted user preferences (theme, name, default view)
- Responsive layout (sidebar on desktop, bottom nav on mobile)
- Installable as a Progressive Web App

## Setup

### Backend

1. Navigate to the backend folder.
2. Set the following environment variable before running the app:
DB_PASSWORD=your_mysql_password

3. Update `application.properties` with your own database name/username if different from defaults.
4. Run the Spring Boot application.

### Frontend

1. Navigate to the `frontend` folder.
2. Install dependencies: npm install

3. Start the development server: npm run dev

4. The app runs on `http://localhost:5173` by default, and expects the backend running on `http://localhost:8080`.

## Notes

This project was built incrementally: starting with a static frontend using fake data, then connecting it to a real Spring Boot + MySQL backend, with authentication planned as a future step.