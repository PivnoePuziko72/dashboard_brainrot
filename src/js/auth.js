import { auth } from '../config/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Валидация пароля
function validatePassword(password) {
    if (password.length < 6) {
        throw new Error('Пароль должен содержать минимум 6 символов');
    }
    return true;
}

// Регистрация
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            validatePassword(password);
            await createUserWithEmailAndPassword(auth, email, password);
            localStorage.setItem('authMessage', 'Регистрация успешна!');
            window.location.href = 'dashboard.html';
        } catch (error) {
            alert(error.message);
        }
    });
}

// Вход
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('authMessage', 'Вход выполнен успешно!');
            window.location.href = 'dashboard.html';
        } catch (error) {
            alert(error.message);
        }
    });
}