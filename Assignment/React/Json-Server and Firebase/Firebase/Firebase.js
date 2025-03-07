// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIwl68c9rHuA_v4v2hGMz1ZVTfOL1bCmE",
  authDomain: "crud-b0810.firebaseapp.com",
  projectId: "crud-b0810",
  storageBucket: "crud-b0810.firebasestorage.app",
  messagingSenderId: "903835124249",
  appId: "1:903835124249:web:8bcded25c4481c8bd26088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }