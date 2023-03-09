// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuEQzFmCwMmh1yjOoqzohMpb5f4BKbgso",
    authDomain: "digitaliafreelance.firebaseapp.com",
    projectId: "digitaliafreelance",
    storageBucket: "digitaliafreelance.appspot.com",
    messagingSenderId: "960158205295",
    appId: "1:960158205295:web:a3638575acd88dc311d49a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase storage reference
const storage = getStorage(app);
export default storage;