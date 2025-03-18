package com.example.demo.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Применяется ко всем путям
                .allowedOrigins("http://localhost:63342")  // Разрешаем доступ с этого источника
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Разрешаем методы
                .allowedHeaders("Content-Type", "Authorization")  // Разрешаем эти заголовки
                .allowCredentials(true);  // Разрешаем отправку cookies и авторизацию
    }
}
