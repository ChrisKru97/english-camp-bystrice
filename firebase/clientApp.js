import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
    apiKey: "AIzaSyDYr9hp6ZIzTzz0CIUA4h6SpcsOy10fgKQ",
    authDomain: "english-camp-bystrice.firebaseapp.com",
    projectId: "english-camp-bystrice",
    storageBucket: "english-camp-bystrice.appspot.com",
    messagingSenderId: "968982566594",
    appId: "1:968982566594:web:fa16bdd08abb4b0377cd5b"
});

const db = getFirestore(app);
export { db };