import { auth } from '../config/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Проверка инициализации Firebase
console.log('Firebase Auth initialized:', auth);

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
    console.log('Register form found');
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('Register form submitted');
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            validatePassword(password);
            console.log('Attempting to create user:', email);
            
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User created successfully:', userCredential.user);
            
            localStorage.setItem('authMessage', 'Регистрация успешна!');
            window.location.href = '../pages/dashboard.html';
        } catch (error) {
            console.error('Registration error:', error);
            alert(error.message);
        }
    });
}