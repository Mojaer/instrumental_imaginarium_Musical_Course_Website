// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD7cVNeCeQwsP5fyDxlk7TKTi-5eS6dQo4",
    authDomain: "instrumental-imaginarium.firebaseapp.com",
    projectId: "instrumental-imaginarium",
    storageBucket: "instrumental-imaginarium.appspot.com",
    messagingSenderId: "183977254162",
    appId: "1:183977254162:web:eae84242e6975978d727cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;