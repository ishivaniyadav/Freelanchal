import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiFdFS3XWAqU7vW4lG-1tNCpZkGxS2kfU",
  authDomain: "freelanchal.firebaseapp.com",
  projectId: "freelanchal",
  storageBucket: "freelanchal.firebasestorage.app",
  messagingSenderId: "501105979584",
  appId: "1:501105979584:web:175c8030f7a4d325c67d25",
  measurementId: "G-TN0ZY4CG4E"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
