const API_URL = 'http://localhost:8080/api/auth/register'; // Замените на ваш URL

// Функция для регистрации пользователя
async function registerUser(userData) {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email,
                password: userData.password
            })
        });

        // Проверка успешного ответа
        if (response.ok) {
            const result = await response.json();
            console.log('Регистрация успешна:', result);
            alert('Получилось!'); // Выводим сообщение об успешной регистрации
            return result;
        } else {
            const error = await response.json();
            console.error('Ошибка регистрации:', error);
            alert('Ошибка при регистрации. Попробуйте снова.');
        }
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
        alert('Произошла ошибка. Попробуйте позже.');
    }
}

// Обработчик формы регистрации
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form");
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const userData = {
                firstname: document.getElementById("first-name").value,
                lastname: document.getElementById("last-name").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
            };

            const response = await registerUser(userData);
            console.log(response);
        });
    }
});
