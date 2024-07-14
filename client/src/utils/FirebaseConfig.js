 
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
 
const firebaseConfig = {
    apiKey: "AIzaSyCVJTg75ACGqBW5UjzTBWQbGZBBqGDXQGU",
    authDomain: "whatsapp-a4548.firebaseapp.com",
    projectId: "whatsapp-a4548",
    storageBucket: "whatsapp-a4548.appspot.com",
    messagingSenderId: "271384665473",
    appId: "1:271384665473:web:243bbd2a8bf9a30ebb5c80",
    measurementId: "G-B240NLL4NG"
};
 
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);