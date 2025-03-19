const API_URL = 'http://localhost:8080/api/auth';

// Функция для регистрации пользователя
async function registerUser(userData) {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('✅ Регистрация успешна:', result);
            alert('✅ Регистрация выполнена!');

            // Редирект на main.html после успешной регистрации
            window.location.href = "../main/main.html";

            return result;
        } else {
            const error = await response.json();
            console.error('❌ Ошибка регистрации:', error);
            alert(`❌ Ошибка при регистрации: ${error.message || 'Попробуйте снова.'}`);
        }
    } catch (error) {
        console.error('❌ Ошибка при регистрации:', error);
        alert('❌ Произошла ошибка. Попробуйте позже.');
    }
}

// Функция для входа пользователя
async function loginUser(credentials) {
    try {
        const response = await fetch(`${API_URL}/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('✅ Успешный вход:', result);

            // Сохраняем токен в localStorage
            localStorage.setItem('token', result.token);
            alert('✅ Вход выполнен!');

            // Перенаправление на страницу профиля
            window.location.href = "../main/profile.html";
        } else {
            const error = await response.json();
            console.error('❌ Ошибка входа:', error);
            alert(`❌ Ошибка входа: ${error.message || 'Неправильный email или пароль.'}`);
        }
    } catch (error) {
        console.error('❌ Ошибка при входе:', error);
        alert('❌ Ошибка сети. Проверьте подключение.');
    }
}

// Обработчик форм регистрации и входа
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    if (registerForm) {
        registerForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const userData = {
                firstname: document.getElementById("first-name").value,
                lastname: document.getElementById("last-name").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
            };

            await registerUser(userData);
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const credentials = {
                email: document.getElementById("login-email").value,
                password: document.getElementById("login-password").value,
            };

            await loginUser(credentials);
        });
    }
});
