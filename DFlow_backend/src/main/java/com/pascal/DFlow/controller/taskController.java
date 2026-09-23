package com.pascal.DFlow.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.pascal.DFlow.dto.TaskRequest;
import com.pascal.DFlow.entity.Task;
import com.pascal.DFlow.service.TaskService;

import jakarta.validation.Valid;

@CrossOrigin(origins = {"http://localhost:5173", "https://frontend-dusky-three-yevmtqhkos.vercel.app"})
@RestController
@RequestMapping("/api/tasks")
public class taskController {

    private final TaskService taskService;

    public taskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {
        return ResponseEntity.ok(taskService.getAllTasks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        return ResponseEntity.ok(taskService.getTaskById(id));
    }

    @PostMapping
    public ResponseEntity<Task> createTask(@Valid @RequestBody TaskRequest request) {
        Task task = new Task();
        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setCompleted(request.isCompleted());
        task.setDueDate(request.getDueDate());
        task.setPriority(request.getPriority());
        task.setEstimatedMinutes(request.getEstimatedMinutes());
        return ResponseEntity.status(HttpStatus.CREATED).body(taskService.createTask(task));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @Valid @RequestBody TaskRequest request) {
        Task updateTask = new Task();
        updateTask.setTitle(request.getTitle());
        updateTask.setDescription(request.getDescription());
        updateTask.setCompleted(request.isCompleted());
        updateTask.setDueDate(request.getDueDate());
        updateTask.setPriority(request.getPriority());
        updateTask.setEstimatedMinutes(request.getEstimatedMinutes());
        return ResponseEntity.ok(taskService.updateTask(id, updateTask));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }
}
