package com.example.demo;

import com.example.demo.models.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@WebMvcTest
public class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    private ObjectMapper objectMapper;

    @BeforeEach
    public void setUp() {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void testRegister() throws Exception {
        // Создаем объект User для теста
        User user = new User();
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setUsername("johndoe");
        user.setPassword("password123");
        user.setEmail("johndoe@example.com");

        // Отправляем POST-запрос на регистрацию
        mockMvc.perform(post("/auth/register") // Эндпоинт регистрации
                        .contentType("application/json") // Тип содержимого JSON
                        .content(objectMapper.writeValueAsString(user))) // Тело запроса — сериализованный объект User
                .andExpect(MockMvcResultMatchers.status().isOk()); // Проверка, что ответ имеет статус 200 OK
    }

    @Test
    public void testLogin() throws Exception {
        // Создаем объект User для теста
        User user = new User();
        user.setUsername("johndoe");
        user.setPassword("password123");

        // Отправляем POST-запрос на логин
        mockMvc.perform(post("/auth/login") // Эндпоинт логина
                        .param("username", user.getUsername()) // Параметр запроса — имя пользователя
                        .param("password", user.getPassword())) // Параметр запроса — пароль
                .andExpect(MockMvcResultMatchers.status().isOk()); // Проверка, что ответ имеет статус 200 OK
    }
}
