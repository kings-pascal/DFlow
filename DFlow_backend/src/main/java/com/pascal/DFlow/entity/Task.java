package com.pascal.DFlow.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name="tasks")
public class Task {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    
    private String title;

    private String description;

    private boolean completed;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private String priority;

    private LocalDate dueDate;
  
    private Integer estimatedMinutes;

    @PrePersist
    protected void Oncreate(){
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    public Task(){
    
    }

    public Long getId(){
        return id;
    }

    public void setTitle(String title){
        this.title = title;
    }
    public String getTitle(){
        return title;
    }

    public void setDescription(String description){
        this.description = description;
    }
    public String getDescription(){
        return description;
    }

    public void setCompleted(boolean completed){
        this.completed=completed;
    }
    public boolean getCompleted(){
        return completed;
    } 

    public void setCreatedAt(LocalDateTime createdAt){
        this.createdAt=createdAt;
    }
    public LocalDateTime getCreatedAt(){
        return createdAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt){
        this.updatedAt = updatedAt;
    }
    public LocalDateTime getUpdatedAt(){
        return updatedAt;
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

