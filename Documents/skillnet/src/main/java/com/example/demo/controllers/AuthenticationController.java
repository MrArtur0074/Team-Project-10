package com.example.demo.controllers;

import com.example.demo.models.User;
import org.springframework.web.bind.annotation.PutMapping;
import com.example.demo.services.AuthenticationService;
import com.example.demo.dto.AuthenticationRequest;
import com.example.demo.dto.AuthenticationResponse;
import com.example.demo.dto.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.repositories.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class AuthenticationController {

    private final UserRepository userRepository;

    // Получение данных текущего пользователя
    @GetMapping("/profile")
    public ResponseEntity<User> getProfile(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(user);
    }

    // Обновление данных текущего пользователя
    @PutMapping("/profile")
    public User updateProfile(@AuthenticationPrincipal User user, @RequestBody User updatedUser) {
        user.setFirstname(updatedUser.getFirstname());
        user.setLastname(updatedUser.getLastname());
        user.setEmail(updatedUser.getEmail());
        return userRepository.save(user);
    }
}