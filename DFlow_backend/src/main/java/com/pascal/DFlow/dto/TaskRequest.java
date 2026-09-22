package com.pascal.DFlow.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;

public class TaskRequest {

    @NotBlank(message = "Title is required")
    private String title;

    private String description;

    private boolean completed;

    private String priority;

    private LocalDate dueDate;

    private Integer estimatedMinutes;

    public String getTitle() {
         return title; 
        }

    public void setTitle(String title) { 
        this.title = title; 
     }

    public String getDescription() {
         return description; 
    }

    public void setDescription(String description) { 
        this.description = description; 
    }

    public boolean isCompleted() {
         return completed; 
    }
    public void setCompleted(boolean completed) { 
        this.completed = completed; 
    }

    public String getPriority() {
    return priority;
    }

    public void setPriority(String priority) {
    this.priority = priority;
    }
  
    public LocalDate getDueDate() {
    return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
    this.dueDate = dueDate;
    }

    public Integer getEstimatedMinutes() {
    return estimatedMinutes;
    }

    public void setEstimatedMinutes(Integer estimatedMinutes) {
    this.estimatedMinutes = estimatedMinutes;
   }
}
