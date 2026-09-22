
const BASE_URL = 'http://localhost:8080/api/tasks'

export function getTasks() {
  return fetch(BASE_URL).then((res) => res.json())
}

export function createTask(task) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  }).then((res) => res.json())
}

export function updateTaskOnServer(id, updates) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  }).then((res) => res.json())
}

export function deleteTaskOnServer(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  })
}