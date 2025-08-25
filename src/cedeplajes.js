  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyATeo2YW5kWM0ZuKloEyka48umFfCxAfoY",
  authDomain: "wafgystras.firebaseapp.com",
  projectId: "wafgystras",
  storageBucket: "wafgystras.firebasestorage.app",
  messagingSenderId: "403526292761",
  appId: "1:403526292761:web:dff25f069e2e2e6b006188",
  measurementId: "G-7NM8ZKY8JS"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
