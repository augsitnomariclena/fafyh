  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDuNQPIXHmUyIRcsoDSPNx8Bqh6XyRZudQ",
  authDomain: "halymseko.firebaseapp.com",
  projectId: "halymseko",
  storageBucket: "halymseko.firebasestorage.app",
  messagingSenderId: "135895574937",
  appId: "1:135895574937:web:64bfa0638e5320c335cb08",
  measurementId: "G-8F9VE9XPVY"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
