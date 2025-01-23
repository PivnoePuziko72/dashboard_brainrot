import { auth } from '../config/firebase.js';
import { signOut } from 'firebase/auth';

// Показ сообщения об успешной авторизации
window.onload = () => {
    const message = localStorage.getItem('authMessage');
    if (message) {
        const messageEl = document.getElementById('message');
        messageEl.textContent = message;
        messageEl.classList.add('show');
        localStorage.removeItem('authMessage');
        setTimeout(() => messageEl.classList.remove('show'), 3000);
    }
};

// Проверка авторизации
auth.onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    document.getElementById('userEmail').textContent = user.email;
});

// Выход
document.getElementById('logoutBtn').addEventListener('click', async () => {
    try {
        await signOut(auth);
        window.location.href = '../index.html';
    } catch (error) {
        alert(error.message);
    }
});