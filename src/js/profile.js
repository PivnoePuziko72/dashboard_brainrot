import { auth } from '../config/firebase.js';
import { signOut } from 'firebase/auth';

// Проверка авторизации
auth.onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    document.getElementById('userEmail').textContent = user.email;
});import { auth } from '../config/firebase.js';
import { signOut } from 'firebase/auth';

// Проверка авторизации
auth.onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    document.getElementById('userEmail').textContent = user.email;
});