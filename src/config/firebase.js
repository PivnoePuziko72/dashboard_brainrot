// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDFXk5V_lZQVYaCNGdhUeijdsxHxYM-16I",
  authDomain: "brainrot-72.firebaseapp.com",
  projectId: "brainrot-72",
  storageBucket: "brainrot-72.firebasestorage.app",
  messagingSenderId: "73382663050",
  appId: "1:73382663050:web:b7a393cfdb57dd5f8fee73",
  measurementId: "G-KBZ3KHD5VQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);