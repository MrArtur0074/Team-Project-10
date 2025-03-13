package com.example.demo.repositories;

import com.example.demo.models.Interest;
import org.springframework.data.jpa.repository.JpaRepository;


public interface InterestRepository extends JpaRepository<Interest, Long> {
}
