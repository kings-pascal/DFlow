package com.pascal.DFlow.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pascal.DFlow.entity.Task;

public interface TaskRepository extends JpaRepository<Task,Long> {
    

}
