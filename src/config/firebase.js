import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js';

const firebaseConfig = {
  apiKey: "AIzaSyDFXk5V_lZQVYaCNGdhUeijdsxHxYM-16I",
  authDomain: "brainrot-72.firebaseapp.com",
  projectId: "brainrot-72",
  storageBucket: "brainrot-72.firebasestorage.app",
  messagingSenderId: "73382663050",
  appId: "1:73382663050:web:b7a393cfdb57dd5f8fee73",
  measurementId: "G-KBZ3KHD5VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);